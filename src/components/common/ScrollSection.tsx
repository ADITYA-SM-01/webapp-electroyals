import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export type ScrollSectionVariant = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: ScrollSectionVariant;
  delay?: number;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
  }
};

const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className,
  variant = 'slideUp',
  delay = 0,
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants[variant]}
      transition={{ delay }}
      className={cn('py-16', className)}
    >
      {children}
    </motion.section>
  );
};

// Staggered children container
export const StaggeredContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered child item
export const StaggeredItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: ScrollSectionVariant;
}> = ({ children, className, variant = 'slideUp' }) => {
  return (
    <motion.div
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection; 