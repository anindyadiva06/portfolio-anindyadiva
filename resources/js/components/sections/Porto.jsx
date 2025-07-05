import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortoSection = ({ portoTab, setPortoTab }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllTechs, setShowAllTechs] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [certificateCategory, setCertificateCategory] = useState('All');
  const [techCategory, setTechCategory] = useState('Tech Stacks');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  {/* Projects */}
  const allProjects = [
    {
      title: 'SOSMEDCARE',
      type: 'Website | Group Project',
      role: 'Fullstack Developer | UI/UX Designer',
      category: ['Web Development', 'UI/UX'],
      techStack: ["Laravel", "HTML5", "CSS3", "JavaScript", "SQLite", "Expert System - Backward Chaining Method"],
      description:
        'SosmedCare is an expert system-based website that evaluates social media addiction through symptom-based questions, offering tailored features for Admins to manage data, Experts to verify and refine diagnostic rules, and Users to gain insights into their addiction, take diagnostic tests, and receive initial solutions as a first step toward managing their addiction.',
      image: '/images/sosmedcare.png',
      github: 'https://github.com/MutiaNandhika/Sispak-KecanduanMedsos-BC',
    },
    {
      title: 'SIGN WAVE',
      type: 'Website | Group Project',
      role: 'Fullstack Developer | UI/UX Designer',
      category: ['Web Development'],
      techStack: ["Laravel", "HTML5", "Bootstrap", "CSS3", "JavaScript", "MySQL"],
      description: 'Sign Wave is an interactive web platform designed to facilitate the learning of BISINDO sign language. By offering a comprehensive sign language dictionary and engaging quizzes, the platform helps users better understand and master sign language while presenting related information in a clear and engaging way. This website has been officially registered as a copyrighted work and has received a Copyright Registration Certificate from the Directorate General of Intellectual Property (DJKI), affirming its originality and legal protection under intellectual property law (HAKI)',
      image: '/images/signwave.png',
      github: 'https://github.com/athifanathania/sign-wave',
    },
    {
      title: 'MOON CYCLE',
      type: 'Mobile App | Group Project',
      role: 'Fullstack Developer | UI/UX Designer',
      techStack: ["Ionic", "Vue", "Firebase"],
      category: ['Mobile App Development', 'UI/UX'],
      description:
        'Moon Cycle is a mobile application designed to monitor and predict menstrual cycles while providing personalized nutritional guidance for each phase. It empowers women to gain a deeper understanding of their menstrual patterns and supports optimal nutritional intake throughout each cycle.',
      image: '/images/mooncycle.png',
      github: 'https://github.com/anindyadiva06/Pemrograman-Mobile_Moon-Cycle',
    },
    {
      title: 'PORTFOLIO - ANINDYA DIVA TALITHA',
      type: 'Website | Self Project',
      role: 'Fullstack Developer | UI/UX Designer',
      category: ['Web Development', 'UI/UX'],
      techStack: ["Laravel", "React", "Tailwind CSS", "JavaScript", "Vite"],
      description: "This portfolio website showcases my background along with a collection of projects I have worked on, ranging from web development and UI/UX design to data science and machine learning. It is designed to provide a comprehensive overview of my skills, experience, and dedication to creating functional digital solutions.",
      image: '/images/portodiva.png',
      github: 'https://github.com/anindyadiva06/portfolio-anindyadiva.git',
    },
    {
      title: 'EDUVENTURE',
      type: 'UI/UX Design | Group Project',
      role: 'UI/UX Designer',
      techStack: ["UI/UX", "Figma"],
      category: ['UI/UX'],
      description: "Eduventure is a gamified educational platform designed for elementary school students. By offering engaging and interactive questions on topics such as countries, currencies, landmarks, capitals, and more, the platform enhances children's general knowledge through a fun and educational experience",
      image: '/images/eduventure.png',
    },
    {
      title: 'RAPUNZEL',
      type: 'Website | Group Project',
      role: 'Front End Developer',
      techStack: ["HTML5", "CSS3", "PHP", "MySQL"],
      category: ['Web Development'],
      description: 'Rapunzel website designed to delve into the character of Rapunzel, highlighting her background, the supporting characters from the Rapunzel film, and additional details for a comprehensive and immersive experience.',
      image: '/images/rapunzel.png',
      github: 'https://github.com/anindyadiva06/rapunzel_project',
    },
    {
      title: 'HMIF Inventory',
      type: 'Website | Group Project',
      role: 'Fullstack Developer',
      techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      category: ['Web Development'],
      description: 'HMIF Inventory website was developed to address inefficiencies in the inventory borrowing system within the HMIF organization at Jenderal Soedirman University.',
      image: '/images/hmifinventory.png',
      github: 'https://github.com/athifanathania/hmif_inventory',
    },
    {
      title: 'HMIF UNSOED',
      type: 'Website | Group Project',
      role: 'Front End Developer',
      techStack: ["HTML5", "CSS3", "JavaScript", "PHP"],
      category: ['Web Development'],
      description: "HMIF Universitas Jenderal Soedirman website, created as a Web Design course final project, serves as an information platform showcasing the identity, programs, and collaborative spirit of the Student Association of Informatics (HMIF) 2023.",
      image: '/images/hmif.png',
      github: 'https://github.com/anindyadiva06/HMIF-Project',
    },
    {
      title: 'Accuracy Comparison of Naive Bayes with SMOTE and SVM with Hyperparameter Tuning for Indonesian Presidential Election Sentiment Analysis',
      type: 'Research | Group Project',
      role: 'Data Science Researcher',
      techStack: ["Data Science", "Naive Bayes", "SVM", "RapidMiner"],
      category: ['Data Science | Machine Learning'],
      description: "This study compares the performance of the Naive Bayes algorithm with SMOTE and the Support Vector Machine (SVM) with hyperparameter tuning in classifying public sentiment on Twitter regarding the 2024 Indonesian presidential election. After preprocessing the dataset, SMOTE was applied to address class imbalance for Naive Bayes, while Grid Search was used for tuning SVM. The results show that Naive Bayes with SMOTE achieved the highest accuracy at 91.69%, outperforming SVM with a linear kernel (90.26%) and an RBF kernel (85.77%). These findings highlight the effectiveness of SMOTE in improving classification accuracy, making Naive Bayes a more suitable choice for sentiment analysis in this context.",
      image: '/images/datmin.png',
    },
    {
      title: 'Spotify User Segmentation Using PCA, Clustering, and Association Rules',
      type: 'Group Project | Final Project for the Machine Learning Course',
      role: 'Machine Learning Student',
      techStack: ["Clustering", "PCA", "Behavior Analysis", "Association Rules", "Python"],
      category: ['Data Science | Machine Learning'],
      description: "This project analyzes Spotify user behavior through data preprocessing, Principal Component Analysis (PCA), K-Means clustering (k=6), and association rule mining. It identifies six distinct user segments based on daily listening time, session duration, access frequency, and song count. Each cluster exhibits unique behavioral patterns and genre preferences, ranging from acoustic enthusiasts to energetic or experimental listeners. The association rules reveal meaningful co-listening patterns, such as Classical with R\&B, enabling the development of personalized and context-aware music recommendations. These insights support enhanced user engagement, retention strategies, and targeted feature development.",
      image: '/images/spotify.png',
    },
    {
      title: 'CO₂ Emissions Prediction Using Linear and Multiple Regression with Feature Optimization',
      type: 'Machine Learning Coursework Project',
      role: 'Machine Learning Student',
      techStack: ["Linear Regression", "Python", "Model Evaluation"],
      category: ['Data Science | Machine Learning'],
      description: "This regression task analyzed the relationship between engine size and CO₂ emissions using linear regression. Normalization had minimal effect, while outlier removal improved accuracy by reducing the RMSE from 31.40 to 27.78 and the MAE from 24.10 to 22.18. Adding FUELCONSUMPTION_COMB and CYLINDERS further enhanced the results, lowering the MAE to 13.91 and the RMSE to 17.88. City fuel consumption showed the strongest correlation with CO₂ emissions (0.90). The final model achieved an MAE of 16.69, an RMSE of 22.61, a MAPE of 6.98%, and an R² of 0.8763.",
      image: '/images/co2.png',
    },
    {
      title: 'Gold Price Prediction Using Voting Classifier and Linear Regression Based on 2015–2025 Historical Data',
      type: 'Machine Learning Coursework Project',
      role: 'Machine Learning Student',
      techStack: ["Machine Learning", "Python", "Linear Regression", "KNN", "Random Forest"],
      category: ['Data Science | Machine Learning'],
      description: "This project predicts gold prices using historical data (2015–2025) through classification and regression approaches. A Voting Classifier (KNN + Random Forest) was used to determine price direction, while Linear Regression was applied to estimate price values. Splitting the data by year (2015–2023 for training, 2024–2025 for testing) resulted in better accuracy. The classification model achieved an accuracy of 99.08%, and the regression model reached an R² of 0.9926 with an MAE of 19.91. Predicted prices for April 22–24, 2025, showed a slight decline but were still classified as an upward trend, indicating strong model performance.",
      image: '/images/emas.png',
    },
  ];

  const filteredProjects = activeCategory === 'All' ? allProjects : allProjects.filter((p) => p.category.includes(activeCategory));
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

  {/* Certificates */}
  const certificates = [
  { title: 'Data Science', company: 'Dicoding Indonesia', category: 'Courses', image: '/images/certificates/dicoding-data.jpg' },

  { title: 'IT Support Intern', company: 'PT. Mandom Indonesia Tbk.', category: 'Works', image: '/images/certificates/kp.jpg' },
  { title: 'Laboratory Assistant of Database', company: 'Informatics Laboratory Assistant', category: 'Works', image: '/images/certificates/basdat.jpg' },
 
  { title: 'Head of Education Division', company: 'Himpunan Mahasiswa Informatika (HMIF) UNSOED | Informatics Student Association of Jenderal Soedirman University', category: 'Organizations', image: '/images/certificates/kadivedu.jpg' },
  { title: 'Staff of The Month October Edition', company: 'Himpunan Mahasiswa Informatika (HMIF) UNSOED | Informatics Student Association of Jenderal Soedirman University', category: 'Organizations', image: '/images/certificates/sotm.jpg' },
  { title: 'Staff of Education Division', company: 'Himpunan Mahasiswa Informatika (HMIF) UNSOED | Informatics Student Association of Jenderal Soedirman University', category: 'Organizations', image: '/images/certificates/staffedu.jpg' },

  { title: 'Group Companion Division Coordinator', company: 'Maskrab Makrab Informatika 2025 | Informatics Student Orientation & Bonding Camp 2025', category: 'Committees', image: '/images/certificates/koorpk.jpg' },
  { title: 'Public Relations Division Coordinator', company: 'Dies Natalis 16 Informatika | 16th Informatics Anniversary Event', category: 'Committees', image: '/images/certificates/diesnat.jpg' },
  { title: 'Steering Committee', company: 'Pengabdian Masyarakat : Informatika Berbagi & Informatika Mengajar 2024 | Community Service : Informatics Sharing & Teaching 2024', category: 'Committees', image: '/images/certificates/sc.jpg' },
  { title: 'Event Division Coordinator', company: 'Pemilihan Raya HMIF UNSOED 2024 | HMIF UNSOED General Election 2024', category: 'Committees', image: '/images/certificates/pemira.jpg' },
  { title: 'Food & Beverage Coordinator', company: 'Upgrading HMIF UNSOED 2025', category: 'Committees', image: '/images/certificates/upgrading.png' },
  { title: 'Staff of Event Division', company: 'Workshop : Exploring ReactJS', category: 'Committees', image: '/images/certificates/workshop.jpg' },
  { title: 'Staff of Event Division', company: 'Pengabdian Masyarakat : Informatika Mengajar 2023 | Community Service : Informatics Teaching 2023', category: 'Committees', image: '/images/certificates/pengmas.png' },
  { title: 'Staff of Event Division', company: 'Informatics Championship 2022', category: 'Committees', image: '/images/certificates/acaraic.jpg' },
  { title: 'Staff of Public Relations', company: 'Lustrum 3.0 Informatika | 15th Informatics Anniversary Event', category: 'Committees', image: '/images/certificates/lustrum.jpg' },
  { title: 'Secretary General', company: 'Informatics Championship 2023', category: 'Committees', image: '/images/certificates/sekreic.png' },
  { title: 'Staff of Group Companion Division', company: 'Maskrab Makrab Informatika 2024 | Informatics Student Orientation & Bonding Camp 2024', category: 'Committees', image: '/images/certificates/pkmm.jpg' },
  
  ];

  const handleCertificateCategory = (cat) => {
    setCertificateCategory(cat);
    setShowAllCertificates(false);
  };

  const filteredCertificates = certificateCategory === 'All'
    ? certificates
    : certificates.filter(c => c.category === certificateCategory);

  const visibleCertificates = showAllCertificates
    ? filteredCertificates
    : filteredCertificates.slice(0, 3);

  {/* Tech Stacks and Tools */}
 const techs = [
  { title: 'HTML5', category: 'Tech Stacks', image: '/images/tech/html.png' },
  { title: 'CSS3', category: 'Tech Stacks', image: '/images/tech/css.png' },
  { title: 'Bootstrap', category: 'Tech Stacks', image: '/images/tech/bootstrap.png' },
  { title: 'React', category: 'Tech Stacks', image: '/images/tech/react.png' },
  { title: 'Tailwind CSS', category: 'Tech Stacks', image: '/images/tech/tailwind.png' },
  { title: 'JavaScript', category: 'Tech Stacks', image: '/images/tech/js.png' },
  { title: 'PHP', category: 'Tech Stacks', image: '/images/tech/pmyadmin.png' },
  { title: 'Laravel', category: 'Tech Stacks', image: '/images/tech/laravel.png' },
  { title: 'CodeIgniter', category: 'Tech Stacks', image: '/images/tech/ci.png' },
  { title: 'Vue', category: 'Tech Stacks', image: '/images/tech/vue.png' },
  { title: 'Python', category: 'Tech Stacks', image: '/images/tech/python.png' },
  { title: 'MySQL', category: 'Tech Stacks', image: '/images/tech/mysql.png' },
  { title: 'SQLite', category: 'Tech Stacks', image: '/images/tech/sqlite.png' },
  { title: 'SQL Server', category: 'Tech Stacks', image: '/images/tech/sqlserver.png' },
  { title: 'Firebase', category: 'Tech Stacks', image: '/images/tech/firebase.png' },
  { title: 'Flutter', category: 'Tech Stacks', image: '/images/tech/flutter.png' },
  { title: 'Dart', category: 'Tech Stacks', image: '/images/tech/dart.png' },
  { title: 'Ionic', category: 'Tech Stacks', image: '/images/tech/ionic.png' },
  
  { title: 'Visual Studio Code', category: 'Tools', image: '/images/tech/vscode.png' },
  { title: 'Git', category: 'Tools', image: '/images/tech/git.png' },
  { title: 'Github', category: 'Tools', image: '/images/tech/github.png' },
  { title: 'Figma', category: 'Tools', image: '/images/tech/figma.png' },
  { title: 'Google Colab', category: 'Tools', image: '/images/tech/gc.png' },
  { title: 'RapidMiner', category: 'Tools', image: '/images/tech/rapidminer.png' },
  { title: 'Vite', category: 'Tools', image: '/images/tech/vite.png' },
  { title: 'Postman', category: 'Tools', image: '/images/tech/postman.png' },
  { title: 'Laragon', category: 'Tools', image: '/images/tech/laragon.png' },
  { title: 'XAMPP', category: 'Tools', image: '/images/tech/xampp.png' },
  { title: 'Cisco Packet Tracer', category: 'Tools', image: '/images/tech/cisco.png' }
  ];

  const filteredTechs = techs.filter(t => t.category === techCategory);
  const visibleTechs = showAllTechs ? filteredTechs : filteredTechs.slice(0, 5);

  return (
    <section>
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {['Projects', 'Certificates', 'Tech Stacks and Tools'].map((tab) => (
          <button
            key={tab}
            onClick={() => setPortoTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium ${portoTab === tab ? 'bg-accent text-white' : 'bg-primary text-deep'} shadow transition hover:shadow-lg`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      {portoTab === 'Projects' && (
        <div className="flex justify-center gap-4 flex-wrap mb-4">
          {['All', 'Web Development', 'UI/UX', 'Mobile App Development', 'Data Science | Machine Learning'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${activeCategory === cat ? 'bg-deep text-white' : 'bg-gray-100 text-deep'} transition hover:bg-primary hover:text-white`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Certificates */}
      {portoTab === 'Certificates' && (
        <div className="flex justify-center gap-4 flex-wrap mb-4">
          {['All', 'Courses', 'Works', 'Organizations', 'Committees'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCertificateCategory(cat)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${certificateCategory === cat ? 'bg-deep text-white' : 'bg-gray-100 text-deep'} transition hover:bg-primary hover:text-white`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Tech Stacks and Tools */}
      {portoTab === 'Tech Stacks and Tools' && (
        <div className="flex justify-center gap-4 flex-wrap mb-4">
          {['Tech Stacks', 'Tools'].map((cat) => (
            <button
              key={cat}
              onClick={() => setTechCategory(cat)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${techCategory === cat ? 'bg-deep text-white' : 'bg-gray-100 text-deep'} transition hover:bg-primary hover:text-white`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {portoTab === 'Projects' && (
          <>
            <motion.div key={activeCategory} variants={fadeIn} initial="hidden" animate="show" exit="hidden" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {visibleProjects.map((project) => (
                  <motion.div key={project.title} variants={fadeIn} initial="hidden" animate="show" exit="hidden" layout className="bg-white backdrop-blur-xl p-4 rounded-xl shadow-xl hover:shadow-[0_10px_25px_#A987A8] transition h-full flex flex-col justify-between">
                    <div>
                      <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-xl" />
                      <h3 className="font-bold mt-4 text-deep">{project.title}</h3>
                      {(project.type || project.role) && (
                        <p className="text-sm text-deep/60 mt-1 italic">{project.type}{project.type && project.role && ' | '}{project.role}</p>
                      )}
                      {project.techStack && (
                        <div className="flex justify-center mt-2">
                          <div className="flex flex-wrap gap-2 justify-center">
                            {project.techStack.map((tech, index) => (
                              <span key={index} className="bg-primary text-sm text-deep font-medium px-3 py-1 rounded-md shadow">{tech}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      <p className="text-sm text-deep/80 mb-4 mt-2">{project.description}</p>
                    </div>
                    {project.github && (
                      <div className="flex justify-between items-center mt-auto pt-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white bg-deep px-4 py-2 rounded-md hover:bg-primary transition">
                          <img src="/images/github.png" alt="GitHub" className="w-4 h-4" /> GitHub
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {filteredProjects.length > 3 && (
              <div className="flex justify-end mt-6">
                <button onClick={() => setShowAllProjects(!showAllProjects)} className="text-sm font-medium text-white bg-accent px-5 py-2 rounded-md hover:bg-primary transition">
                  {showAllProjects ? 'Show Less Projects' : 'Show More Projects'}
                </button>
              </div>
            )}
          </>
        )}

        {portoTab === 'Certificates' && (
          <>
            <motion.div
              key={certificateCategory}
              variants={fadeIn}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {visibleCertificates.map((item) => (
                  <motion.div
                    key={item.title + item.category + item.image}
                    variants={fadeIn}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    layout
                    className="bg-white backdrop-blur-xl p-4 rounded-xl shadow-xl hover:shadow-[0_10px_25px_#A987A8] transition h-full flex flex-col justify-between"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-contain mb-3"
                    />
                    <p className="font-semibold text-center text-deep">{item.title}</p>
                    {item.company && (
                      <p className="text-center italic text-sm text-deep/70 mt-1">{item.company}</p>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {filteredCertificates.length > 3 && (
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowAllCertificates(!showAllCertificates)}
                  className="text-sm font-medium text-white bg-accent px-5 py-2 rounded-md hover:bg-primary transition"
                >
                  {showAllCertificates ? 'Show Less Certificates' : 'Show More Certificates'}
                </button>
              </div>
            )}
          </>
        )}

        {portoTab === 'Tech Stacks and Tools' && (
          <>
            <motion.div key="techstack" variants={fadeIn} initial="hidden" animate="show" exit="hidden" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {visibleTechs.map((item) => (
                <motion.div key={item.title} variants={fadeIn} initial="hidden" animate="show" exit="hidden" layout className="bg-white backdrop-blur-xl p-4 rounded-xl shadow-xl hover:shadow-[0_10px_25px_#A987A8] transition h-full flex flex-col justify-between">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mx-auto mb-3" />
                  <p className="font-semibold text-center text-deep">{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
            {filteredTechs.length > 3 && (
              <div className="flex justify-end mt-6">
                <button onClick={() => setShowAllTechs(!showAllTechs)} className="text-sm font-medium text-white bg-accent px-5 py-2 rounded-md hover:bg-primary transition">
                  {showAllTechs ? 'Show Less Tech Stacks and Tools' : 'Show More Tech Stacks and Tools'}
                </button>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortoSection;