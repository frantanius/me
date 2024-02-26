'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { v4 as uuidv4 } from 'uuid';
import LenisProvider from '@/lib/react-lenis';
import { transition } from '@/constants/framer-motion';
import { useScroll, type MotionStyle, motion } from 'framer-motion';
import useTerminalStore from '@/stores/terminal-store';
import TerminalPrompt from './terminalPrompt';

interface TerminalProps {
  className?: string;
  style?: MotionStyle;
}

const Terminal = ({ className = '', style }: TerminalProps): JSX.Element => {
  const { theme } = useTheme();
  const prompts = useTerminalStore((state) => state.prompts);

  const [prevLength, setPrevLength] = useState<number>(prompts.length);

  const terminalRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLInputElement>(null);

  const isLight = theme === 'light';

  const { scrollYProgress } = useScroll({
    target: terminalRef,
    offset: ['0', '1'],
  });

  scrollYProgress.on('change', (val) => {
    if (val === 1) {
      promptRef.current?.blur();
    }
  });

  useEffect(() => {
    if (prompts.length <= prevLength) {
      setPrevLength(prompts.length);
      return;
    }
    if (prompts.length > prevLength) {
      setPrevLength(prompts.length - 1);
      promptRef.current?.focus();
    }
  }, [prevLength, prompts.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { ...transition, delay: 0.4 } }}
      style={style}
      ref={terminalRef}
      onClick={() => promptRef.current?.focus()}
      className={`${className} h-[32rem] w-full overflow-hidden rounded-lg border border-white ${isLight ? 'bg-primary' : ''} bg-opacity-50 font-mono text-sm text-gray-300 backdrop-blur-lg backdrop-filter`}
      data-testid="terminal"
    >
      <div className="sticky flex gap-2 p-3">
        <div
          className="aspect-square w-3 rounded-full bg-red-500"
          data-testid="terminal-button-red"
        />
        <div
          className="aspect-square w-3 rounded-full bg-yellow-500"
          data-testid="terminal-button-yellow"
        />
        <div
          className="aspect-square w-3 rounded-full bg-green-500"
          data-testid="terminal-button-green"
        />
      </div>
      <LenisProvider className="h-[calc(100%-36px)] w-full overflow-y-auto px-4 pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary-400">
        <div className="overscroll-contain">
          {prompts.map(({ children, inputValue, isActive }, index) => (
            <TerminalPrompt
              key={uuidv4()}
              inputValue={inputValue}
              isActive={isActive}
              index={index}
              ref={promptRef}
            >
              {children}
            </TerminalPrompt>
          ))}
        </div>
      </LenisProvider>
    </motion.div>
  );
};

export default Terminal;
