'use client';

import { useEffect, memo } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

const TerminalAscii = (): JSX.Element => {
  const ascii = `
                    :=+#%@@@@@@%#*=:
                  .=#@@@@@@@@@@@@@@@@@@#=.
                -#@@@@@@@@@@@@@@@@@@@@@@@@#-
              :%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%-
             *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*
            #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#
           *@@@@@@@@@@   .#@@@@@@@@*..#@@@@@@@@@#
          :@@@@@@@@@@@     -@@@@@@@*::%@@@@@@@@@@-
          #@@@@@@@@@@@  -#.  *@@@@@#==%@@@@@@@@@@#
          @@@@@@@@@@@@  -@@=  :%@@@%++%@@@@@@@@@@@
          @@@@@@@@@@@@  -@@@%.  +@@@##@@@@@@@@@@@@
          #@@@@@@@@@@@  -@@@@@+  :%@@@@@@@@@@@@@@#
          -@@@@@@@@@@@  -@@@@@@%:  +@@@@@@@@@@@@@-
           *@@@@@@@@@@  -@@@@@@@@+..-%@@@@@@@@@@#
            #@@@@@@@@@@@@@@@@@@@@@@=--*@@@@@@@@%
             *@@@@@@@@@@@@@@@@@@@@@@%++*@@@@@@*
              -%@@@@@@@@@@@@@@@@@@@@@@###%@@%-
                -%@@@@@@@@@@@@@@@@@@@@@@%@%-
                  .+#@@@@@@@@@@@@@@@@@@%+:
                      :=*#%@@@@@@%#*=:`;

  const [scope, animate] = useAnimate();
  let wordsArray = ascii.split('');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 0,
        delay: stagger(0.01),
      },
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => (
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

  return <pre className="hidden text-xs sm:block">{renderWords()}</pre>;
};

export default memo(TerminalAscii);
