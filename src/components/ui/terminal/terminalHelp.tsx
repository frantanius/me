'use client';

import { useEffect } from 'react';
import TerminalAscii from '@/components/ui/terminal/terminalAscii';

let load = true;

const TerminalHelp = (): JSX.Element => {
  useEffect(() => {
    load = false;
  }, []);

  return (
    <div className="flex gap-8">
      {load && <TerminalAscii />}
      <div className="flex flex-col">
        <span className="text-accent-1">version 14.0.4</span>
        <span>--------------</span>
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
