const TerminalSkills = (): JSX.Element => {
  const skills = [
    { 'version-control': ['Git', 'Github', 'Gitlab', 'Bitbucket'] },
    { 'package-managers': ['pnpm'] },
    { 'module bundlers': ['Webpack'] },
    { 'formatting-tools': ['ESLint', 'Prettier'] },
    { 'testing-frameworks': ['Cypress'] },
    { 'css-preprocessors': ['SASS'] },
    {
      'css-frameworks': [
        'Bootstrap',
        'Material UI',
        'Tailwind CSS',
        'Chakra UI',
        'Styled Components',
      ],
    },
    {
      'javascript-frameworks-or-libraries': [
        'React.js',
        'React Native',
        'Redux/Redux Toolkit',
        'React Query',
        'Next.js',
        'Framer Motion',
      ],
    },
    { 'programming-language': ['javascript', 'typescript'] },

    /*
      I have foundational knowledge in these area,
      with ongoing efforts to deepen my understanding and practical application.
      While I'm not yet proficient.
    */
    { database: ['MySQL', 'MongoDB'] },
    { 'server-side': ['PHP', 'Laravel', 'Node.js'] },
    { infrastructure: ['AWS S3', 'AWS Amplify'] },
    { other: ['Firebase'] },
  ];

  return (
    <ul className="mb-1 pl-4 list-none">
      {skills.map((category: any, index) => {
        const skillCategory = Object.keys(category)[0];
        const skillNames = category[skillCategory];
        return (
          <li key={index} className="mb-2">
            <strong>
              {skillCategory.replaceAll('-', ' ').toUpperCase()}:{' '}
            </strong>
            <ul className="list-none flex flex-col pl-0">
              {skillNames.map((skill: any, skillIndex: any) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default TerminalSkills;
