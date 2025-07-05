const HomeSection = () => (
  <section className="flex flex-col md:flex-row items-center gap-10">
    {/* Foto di kiri */}
    <div className="flex-1 flex justify-center">
      <div className="relative w-80 h-80 group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-deep blur-2xl opacity-80 animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
        <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-deep via-primary to-secondary shadow-[0_15px_30px_#A987A8] group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-in-out">
          <img
            src="/images/diva-ungu.jpg"
            alt="Foto Diva"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>

    {/* Teks di kanan */}
    <div className="flex-1 space-y-4">
      <h3 className="text-2xl md:text-4xl font-bold text-accent"> Hi there, I'm </h3>
      <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-deep to-primary leading-[1.4] pb-1">
        Anindya Diva Talitha
      </h2>
      <h2 className="text-2xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-deep to-primary leading-tight m-0">
        Web Developer | UI/UX Designer | Data Enthusiast
      </h2>
      <h4 className="text-xl md:text-xl font-normal italic text-accent">
        Bachelor's Degree in Informatics Engineering | Undergraduate Student at Jenderal Soedirman University
      </h4>

       {/* Lokasi + Flag */}
      <div className="flex items-center gap-2 mt-1">
        <img src="/images/indonesia.png" alt="Indonesia Flag" className="w-5 h-5" />
        <p className="text-base text-accent-700">Bekasi, West Java, Indonesia</p>
      </div>

      <p className="text-base text-accent-700">
        I’m an Informatics student passionate about web development, UI/UX and data science. During my studies, I’ve built and designed visually engaging websites and contributed to research in the field of data. Let’s connect and explore innovative solutions together!
      </p>

      {/* Socials */}
      <div className="flex gap-3 mb-2">
        <a
          href="mailto:anindyadiva99@gmail.com"
          className="bg-accent text-white p-2 rounded-full hover:bg-secondary transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/gmail.png" alt="Gmail" className="w-5 h-5" />
        </a>
        <a
          href="https://instagram.com/talithadivaa"
          className="bg-accent text-white p-2 rounded-full hover:bg-secondary transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/anindyadivatalitha"
          className="bg-accent text-white p-2 rounded-full hover:bg-secondary transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/anindyadiva06"
          className="bg-accent text-white p-2 rounded-full hover:bg-secondary transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github.png" alt="GitHub" className="w-5 h-5" />
        </a>
      </div>

      {/* Button CV */}
      <div className="mt-4">
        <a
          href="/files/CV - Anindya Diva Talitha.pdf"
          download
          className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition inline-flex items-center gap-2"
        >
          <img src="/images/resume.png" alt="Download" className="w-5 h-5" />
          Let's Collaborate – View My CV
        </a>
      </div>
    </div>
  </section>
);

export default HomeSection;
