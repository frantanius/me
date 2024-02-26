'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ITextGenerateEffect {
  words: string;
  duration: number;
  delay: number;
  className?: string;
}

export const TextGenerateEffect = ({
  words,
  className,
  duration = 2,
  delay = 0.2,
}: ITextGenerateEffect): JSX.Element => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split('');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: duration,
        delay: stagger(delay),
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <div className={cn(className)}>{renderWords()}</div>;
};
