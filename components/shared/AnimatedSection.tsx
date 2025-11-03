'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  useViewport?: boolean; // New prop to control animation trigger
}

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  useViewport = false // Default to immediate animation
}: AnimatedSectionProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  const motionProps = useViewport
    ? {
        initial: getInitialPosition(),
        whileInView: getFinalPosition(),
        viewport: { once: true, amount: 0.3 },
        transition: {
          duration: 0.4,
          delay: delay,
          ease: 'easeOut'
        }
      }
    : {
        initial: getInitialPosition(),
        animate: getFinalPosition(),
        transition: {
          duration: 0.4,
          delay: delay,
          ease: 'easeOut'
        }
      };

  return (
    <motion.div {...motionProps} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
