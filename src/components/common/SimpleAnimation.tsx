import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

// Simple animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface SimpleAnimationProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  delay?: number;
}

// Very simple animation component with no complex logic
export const SimpleAnimation: React.FC<SimpleAnimationProps> = ({
  children,
  className,
  variants = slideUp,
  delay = 0
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={cn(className)}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

// Simple stagger container
export const SimpleStagger: React.FC<SimpleAnimationProps> = ({
  children,
  className
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default SimpleAnimation; 