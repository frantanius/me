import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const LucideIcon = ({ name, ...props }: IconProps) => {
  const Icon = dynamic(dynamicIconImports[name]);

  return <Icon {...props} />;
};

export default LucideIcon;
