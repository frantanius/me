'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { type ReactNode } from 'react';

type ClassName = string | undefined;

interface Props {
  children: ReactNode;
  root?: boolean;
  options?: Record<any, any>;
  autoRaf?: boolean;
  rafPriority?: number;
  className?: ClassName;
}

const LenisProvider = ({
  children,
  autoRaf,
  className,
  options,
  rafPriority,
  root,
}: Props): JSX.Element => {
  return (
    <ReactLenis
      root={root}
      options={options}
      autoRaf={autoRaf}
      rafPriority={rafPriority}
      className={className}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
