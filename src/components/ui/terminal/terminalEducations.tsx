import { v4 as uuidv4 } from 'uuid';

const TerminalEducations = (): JSX.Element => {
  const data = [
    {
      id: 1,
      attributes: {
        name: 'Gunadarma University',
        degree: "Bachelor's Degree",
        major: 'Computer Science',
        location: 'Jakarta, Indonesia',
        startDate: 'Jan 2009',
        endDate: 'Nov 2016',
      },
    },
  ];

  return (
    <ol className='mb-1 pl-4'>
      {data.map((education) => (
        <li key={uuidv4()} className="mb-1">
          <h1 data-testid="school-name">{education.attributes.name}</h1>
          <div className="flex flex-col pl-4">
            <span data-testid="majors">{education.attributes.major}</span>
            <span data-testid="date">
              {`${education.attributes.startDate} -  ${education.attributes.endDate}`}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default TerminalEducations;
