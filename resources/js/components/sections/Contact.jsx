const ContactSection = () => {
  const contacts = [
    {
      icon: '/images/gmail.png',
      name: 'Email',
      url: 'mailto:anindyadiva99@gmail.com',
      buttonText: 'Email me',
    },
    {
      icon: '/images/instagram.png',
      name: 'Instagram',
      url: 'https://instagram.com/talithadivaa',
      buttonText: 'Follow on Instagram',
    },
        {
      icon: '/images/linkedin.png',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anindyadivatalitha',
      buttonText: 'Connect on LinkedIn',
    },
    {
      icon: '/images/github.png',
      name: 'GitHub',
      url: 'https://github.com/anindyadiva06',
      buttonText: 'Visit GitHub',
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contacts.map((contact, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-xl shadow-xl text-center text-deep font-semibold hover:shadow-[0_10px_25px_#A987A8]"
        >
          <div className="mb-3 flex justify-center">
            <img
              src={contact.icon}
              alt={contact.name}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-deep via-primary to-accent p-2"
            />
          </div>
          <p className="font-semibold">{contact.name}</p>
          <a
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-gradient-to-br from-accent to-primary text-white font-normal px-4 py-2 rounded-md hover:text-deep"
          >
            {contact.buttonText}
          </a>
        </div>
      ))}
    </section>
  );
};

export default ContactSection;
