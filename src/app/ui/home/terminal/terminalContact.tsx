const TerminalContact = (): JSX.Element => {
  const contacts = [
    {
      name: 'GitHub',
      link: 'https://github.com/frantanius/me',
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/frantanius',
    },
    {
      name: 'Email',
      link: `mailto:frantaniussinulingga@gmail.com`,
    },
  ];

  return (
    <ol className="mb-1 pl-4">
      {contacts.map((contact) => (
        <li key={contact.name}>
          <a
            href={contact.link}
            target="_blank"
            className="hover:text-accent-1"
          >
            {contact.name}
          </a>
        </li>
      ))}
    </ol>
  );
};

export default TerminalContact;
