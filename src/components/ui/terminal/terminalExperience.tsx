import { v4 as uuidv4 } from 'uuid';

const TerminalExperience = (): JSX.Element => {
  let data = [
    {
      company: 'Brick Financial API',
      role: 'Senior Frontend Developer',
      jobType: 'Full-time',
      workType: 'Remote',
      location: 'Singapore',
      duration: 'June 2021 - August 2023',
    },
    {
      company: 'Upcomer eSports',
      role: 'React Developer',
      jobType: 'Freelance',
      workType: 'Remote',
      location: 'Los Angeles, United States',
      duration: 'January 2021 - April 2021',
    },
    {
      company: 'whiteGrey',
      role: 'Frontend Developer',
      jobType: 'Full-time',
      workType: 'Remote',
      location: 'Sydney, Australia',
      duration: 'July 2019 - December 2020',
    },
    {
      company: 'H.I.S. International Tours Inc.',
      role: 'Full Stack Engineer',
      jobType: 'Full-time',
      workType: 'On-site',
      location: 'Bali, Indonesia',
      duration: 'January 2016 - December 2018',
    },
    {
      company: 'Dexcode',
      role: 'Junior Frontend Developer',
      jobType: 'Full-time',
      workType: 'On-site',
      location: 'Jakarta, Indonesia',
      duration: 'January 2014 - December 2015',
    },
  ];

  return (
    <ol className="mb-1 pl-4">
      {data?.map((experience) => (
        <li className="mb-2" key={uuidv4()}>
          <h1>{experience.role}</h1>
          <div className="flex flex-col pl-4">
            <h2>
              <span>{`${experience.company} (${experience.jobType} . ${experience.workType})`}</span>
            </h2>
            <span>{experience.duration}</span>
            <span>{experience.location}</span>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default TerminalExperience;
