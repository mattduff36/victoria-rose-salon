'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type DivProps = BaseProps & Omit<HTMLMotionProps<'div'>, 'children'>;
type AnchorProps = BaseProps & Omit<HTMLMotionProps<'a'>, 'children'> & { href: string };

type AnimatedSectionProps = DivProps | AnchorProps;

const AnimatedSection = (props: AnimatedSectionProps) => {
  const { children, ...rest } = props;
  const isAnchor = 'href' in rest;
  const Component = isAnchor ? motion.a : motion.div;
  
  return (
    <Component {...(rest as any)}>
      {children}
    </Component>
  );
};

export default AnimatedSection; 