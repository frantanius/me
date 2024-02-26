import { v4 as uuidv4 } from 'uuid';

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
    <ol className='mb-1 pl-4'>
      {contacts.map((contact) => (
        <li key={uuidv4()}>
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
