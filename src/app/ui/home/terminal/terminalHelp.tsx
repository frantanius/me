'use client';

import { useEffect } from 'react';
import TerminalAscii from '@/app/ui/home/terminal/terminalAscii';
import { TbBrandNextjs } from 'react-icons/tb';

let load = true;

const TerminalHelp = (): JSX.Element => {
  useEffect(() => {
    load = false;
  }, []);

  return (
    <div className="flex gap-8">
      <TerminalAscii isInitial={load} />
      <div className="flex flex-col">
        <span className="flex items-center gap-1 text-accent-1 text-customGreen">
          <TbBrandNextjs />
          version 14.0.4
        </span>
        <span>-----------------</span>
        <span className="text-accent-1 text-customGreen">usage:</span>
        <span className="pl-4">fe [option]</span>
        <div className="mt-2">
          <span className="text-accent-1 text-customGreen">all options:</span>
          <ul className="pl-4">
            <li>summary</li>
            <li>skills</li>
            <li>experience</li>
            <li>educations</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="mt-2">
          <span className="text-accent-1 text-customGreen">
            other commands:
          </span>
          <ul className="pl-4">
            <li>clear</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TerminalHelp;
