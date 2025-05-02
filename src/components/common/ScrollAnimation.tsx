import React, { useEffect, useState } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

// Animation variants with exit animations for bidirectional scroll effects
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.6 } }
};

export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.6 } }
};

export const slideDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } }
};

export const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.6 } }
};

export const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.6 } }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, scale: 1.1, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  delay?: number;
  viewport?: {
    once?: boolean;
    amount?: number | "some" | "all";
    margin?: string;
  };
  duration?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className,
  variants = slideUp,
  delay = 0,
  viewport = { once: true, amount: 0.2 },
  duration = 0.6
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={cn(className)}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};

// A more stable version of bidirectional animation that doesn't cause page rendering issues
export const BidirectionalAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className,
  variants = slideUp,
  delay = 0,
  viewport = { once: false, amount: 0.2 },
  duration = 0.6
}) => {
  const [ref, inView] = useInView({
    ...viewport,
    threshold: typeof viewport.amount === 'number' ? viewport.amount : 0.2
  });
  
  // Instead of trying to detect scroll direction, which can be problematic,
  // we'll simply use inView state to determine animation
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={cn(className)}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};

// Simplified version of the stagger container
export const StaggerContainer: React.FC<ScrollAnimationProps> = ({
  children,
  className,
  viewport = { once: true, amount: 0.1 }
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 