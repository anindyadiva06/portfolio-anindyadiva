import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const data = {
  works: [
    {
      title: 'Laboratory Asisstant',
      image: '/images/jarkom.jpg',
      description: [
        'Taught and mentored 40+ second-year students in computer networking fundamentals using Cisco Packet Tracer, strengthening both their theoretical knowledge and hands-on skills', 
        'Designed and developed examination materials to effectively assess students’ technical proficiency and analytical problem-solving abilities', 
        'Assessed assignments and final exams with a focus on objectivity and clarity, contributing to measurable improvements in academic performance and preparedness for advanced networking coursework'
      ],
      role: 'Laboratory Asisstant of Computer Network | Feb 2025 - Jun 2025',
      icon: '/images/asprak-icon.png',
    },
    {
      title: 'PT. Mandom Indonesia Tbk.',
      image: '/images/kp.jpg',
      description: [
        'Developed 2 new features for the internal IT Helpdesk website and 1 feature for the Brand Ambassador Management system using CodeIgniter 3 and SQL Server, streamlining internal workflows and improving user efficiency', 
        'Completed 30+ laptop installations, ensuring devices were fully configured and ready for seamless use by company employees', 
        'Resolved hardware issues by installing hard drives and batteries on 30+ laptops, extending device usability and reducing downtime across departments'
      ],
      role: 'IT Support Intern | Jul 2024 - Aug 2024',
      icon: '/images/mandom-icon.png',
    },
    {
      title: 'Laboratory Asisstant',
      image: '/images/basdat.jpg',
      description: [
        'Taught and mentored 40 first-semester students in database fundamentals using MySQL, XAMPP, and Command Prompt, fostering strong foundational skills', 
        "Designed and administered challenging test questions and practical assignments to evaluate students' conceptual understanding and real-world application", 
        'Delivered objective and constructive evaluations, contributing to measurable improvements in student performance and classroom engagement'
      ],
      role: 'Laboratory Asisstant of Database | Aug 2023 - Dec 2023',
      icon: '/images/asprak-icon.png',
    },
  ],
  organizations: [
    {
      title: 'Himpunan Mahasiswa Informatika (HMIF) UNSOED',
      image: '/images/bhashasena.jpg',
      description: [
        'Led an 8-member Education Division, successfully overseeing the planning and execution of 4 internal programs aligned with organizational goals', 
        'Recognized as Division of the Month for the April edition among 8 divisions for outstanding performance and initiative', 
        'Organized 24 Informatics Study Club sessions in 1 semester, consistently attended by 35+ students to support academic development',
        'Conducted 3 academic briefings (MBKM internship, thesis, and final project), providing guidance and improving academic readiness for 45+ students'
      ],
      role: 'Head of Education Division | Mar 2024 - Jan 2025',
      icon: '/images/hmif-icon.png',
    },
    {
      title: 'Himpunan Mahasiswa Informatika (HMIF) UNSOED',
      image: '/images/edu.jpg',
      description: 
      ['Served as the Event Coordinator of the Informatics Study Club, a collaborative academic program conducted 21 times in 1 semester and attended by 40+ students',
        'Selected as Staff of the Month October Edition, recognized for outstanding contribution and leadership among 56 team members', 
        'Led the planning and execution of study sessions focused on exam preparation through subject-specific reviews and practical exercises', 
        'Developed detailed event rundowns to ensure each session was structured, effective, and engaging'
      ],
      role: 'Staff of Education Division | Mar 2023 - Jan 2024',
      icon: '/images/hmif-icon.png',
    },
  ],
  committees: [
    {
      title: 'Maskrab Makrab Informatika 2025',
      image: '/images/pk.jpg',
      description: [
        'Led a team of 20 staff members in the Group Companion Division during Maskrab Makrab Informatics 2024/2025, enhancing leadership coordination and peer support efficiency', 
        'Strategically organized 11 cross-major orientation groups involving 2 academic programs, fostering early collaboration and inter-program connection among 100+ new students', 
        'Mentored and supported first-year Informatics students throughout the onboarding process, significantly improving their engagement, confidence, and sense of belonging in the academic environment'
      ],
      role: 'Group Companion Division Coordinator | Aug 2024 - Feb 2025',
      icon: '/images/mm-icon.png',
    },
    {
      title: 'Dies Natalis 16 Informatika',
      image: '/images/diesnat.jpg',
      description: [
        'Coordinated a 10-member Public Relations team for the 16th Dies Natalis event, ensuring seamless and impactful external communication', 
        'Managed guest relations and engaged directly with 100+ invitees, delivering a professional and welcoming event experience', 
        'Led the development and distribution of 15+ social media captions and 20+ broadcast messages, significantly boosting event visibility and audience engagement', 
        'Maintained active communication with key stakeholders to align messaging, strengthen partnerships, and ensure event success'
      ],
      role: 'Public Relation Division Coordinator | Nov 2024 - Nov 2024',
      icon: '/images/diesnat-icon.png',
    },
     {
      title: 'Pengabdian Masyarakat : Informatika Berbagi & Informatika Mengajar',
      image: '/images/berbagi.jpg',
      description: [
        'Provided strategic guidance for the execution of community service programs, including 1 Informatika Berbagi event at a local orphanage in Purbalingga and 2 Informatika Mengajar sessions at elementary schools in Purwokerto and Purbalingga', 
        'Identified challenges during program execution and took prompt, solution-oriented actions to maintain smooth operations and ensure successful outcomes', 
        "Delivered thorough evaluations and actionable feedback to ensure continuous improvement, program sustainability, and alignment with organizational goals"
      ],
      role: 'Steering Committee | Jun 2024 - Sep 2024',
      icon: '/images/hmif-icon.png',
    },
    {
      title: 'Workshop : Exploring ReactJS',
      image: '/images/workshop.jpg',
      description: [
        'Designed and structured concepts and rundowns for 4 learning sessions, attended by 30+ participants', 
        "Facilitated hands-on workshops that enhanced participants’ understanding and practical skills in ReactJS development", 
        'Increased participant engagement and confidence in building component-based web applications using ReactJS'
      ],
      role: 'Staff of Event Division | Aug 2024 - Sep 2024',
      icon: '/images/hmif-icon.png',
    },
    {
      title: 'Lustrum 3.0 Informatika',
      image: '/images/lustrum.jpg',
      description: [
        'Acted as a liaison for 100+ guests by distributing official invitations and relevant event information', 
        'Created 15+ social media captions and 20+ broadcast messages to boost event visibility and audience engagement', 
        'Coordinated with internal and external stakeholders to maintain consistent communication and ensure smooth event execution'
      ],
      role: 'Staff of Public Relations | Oct 2023 - Nov 2023',
      icon: '/images/lustrum-icon.png',
    },
    {
      title: 'Pengabdian Masyarakat : Informatika Mengajar',
      image: '/images/pengmas.jpg',
      description: [
        'Delivered basic Microsoft Office training to students in 3 elementary schools across Purbalingga and Purwokerto', 
        'Led the planning and execution of 3 activity series as part of the Event Division, ensuring structured and engaging learning experiences', 
        'Created detailed event rundowns, coordinated cross-division responsibilities, and served as Master of Ceremony to facilitate smooth program delivery and participant engagement'
      ],
      role: 'Staff of Event Division | Aug 2023 - Sep 2023',
      icon: '/images/hmif-icon.png',
    }
  ],
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const getData = () => {
    const all =
      activeTab === 'All'
        ? [...data.works, ...data.organizations, ...data.committees]
        : data[activeTab.toLowerCase()] || [];
    return showAll ? all : all.slice(0, 3);
  };

  const allLength =
    activeTab === 'All'
      ? data.works.length + data.organizations.length + data.committees.length
      : (data[activeTab.toLowerCase()] || []).length;

  return (
    <section>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {['All', 'Works', 'Organizations', 'Committees'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === tab ? 'bg-accent text-white' : 'bg-primary text-deep'
            } shadow transition hover:shadow-lg`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + showAll}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-wrap justify-center gap-8 items-stretch"
        >
          {getData().map((item, idx) => (
            <motion.div
              key={item.title + idx}
              variants={fadeIn}
              initial="hidden"
              animate="show"
              exit="hidden"
              layout
              className="relative w-[22rem] min-h-[20rem] max-h-[32rem] rounded-2xl overflow-hidden transition duration-300 hover:shadow-[0_10px_25px_#693B69] flex flex-col justify-between items-stretch"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/55 z-0"></div>

              <div className="relative z-10 p-6 space-y-3 text-white max-w-md break-words flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 max-w-[20rem]">
                      <img
                        src={item.icon || '/images/icon.png'}
                        alt="icon"
                        className="w-12 h-12 sm:w-14 sm:h-14"
                      />
                      <h2 className="text-base sm:text-lg md:text-xl font-semibold break-words text-center">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  {item.role && (
                    <p className="text-sm font-bold text-white text-center">{item.role}</p>
                  )}
                </div>
                <ul className="list-disc list-inside text-sm text-left overflow-y-auto max-h-[10rem]">
                  {Array.isArray(item.description)
                    ? item.description.map((point, i) => <li key={i}>{point}</li>)
                    : <li>{item.description}</li>}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {allLength > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-sm font-medium text-white bg-accent rounded-md hover:bg-primary transition"
          >
            {showAll ? 'Show Less Experiences' : 'Show More Experiences'}
          </button>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
