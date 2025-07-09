import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, image }) => {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-[9999] bg-white/60 backdrop-blur-sm flex justify-center items-center overflow-y-auto px-4 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut', delay: 0.05 }}
          >
            <img
              src={image}
              alt="Certificate"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-red-500 rounded-full w-10 h-10 text-xl flex items-center justify-center shadow hover:bg-primary transition-colors duration-200"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
