import React from "react";
import { SimpleAnimation } from "../common/SimpleAnimation";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with the ELECTROYALS was a game-changer for our business. Their software solutions helped us streamline operations and increase productivity by 30%.",
    author: "Sarah Johnson",
    position: "CTO, Global Technologies Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The e-commerce platform they built for us exceeded our expectations. Sales have increased by 45% since launch, and customer feedback has been overwhelmingly positive.",
    author: "David Chen",
    position: "CEO, StyleShop Brands",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Their team's expertise in UI/UX design transformed our app into an intuitive and engaging experience. Our user retention has improved significantly as a result.",
    author: "Amanda Rodriguez",
    position: "Product Manager, MediCare Systems",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
  }
];

// Custom animation variants for testimonials
const testimonialVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ClientTestimonials = () => {
  return (
    <section className="py-16 relative bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Space theme background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{ 
              opacity: [0.3, 0.8, 0.3], 
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4, 
              repeat: Infinity, 
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute bg-white dark:bg-blue-400 rounded-full w-1 h-1"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.3)"
            }}
          />
        ))}
      
        {/* Larger glowing orbs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-20 -right-20 w-60 h-60 bg-blue-300 dark:bg-blue-700/30 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300 dark:bg-purple-700/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SimpleAnimation 
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Voices Across the Galaxy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Interstellar testimonials from our satisfied clients
          </p>
        </SimpleAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SimpleAnimation 
              key={index}
              variants={testimonialVariants}
              className="backdrop-blur-sm bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-gray-900/90 rounded-2xl p-8 relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100/50 dark:border-blue-900/50"
              delay={index * 0.1}
            >
              {/* Quote mark */}
              <motion.div 
                initial={{ opacity: 0.5, y: 0 }}
                whileHover={{ opacity: 1, y: -5 }}
                transition={{ duration: 0.3 }}
                className="absolute top-6 right-6 text-blue-300 dark:text-blue-700"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 10C12.5 10 10 15 10 18.75C10 22.5 12.5 25 15 25C17.5 25 20 22.5 20 20C20 17.5 17.5 15 15 15C16.25 15 17.5 13.75 17.5 10ZM30 10C25 10 22.5 15 22.5 18.75C22.5 22.5 25 25 27.5 25C30 25 32.5 22.5 32.5 20C32.5 17.5 30 15 27.5 15C28.75 15 30 13.75 30 10Z" fill="currentColor"/>
                </svg>
              </motion.div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-blue-300 dark:ring-blue-700 ring-offset-2 ring-offset-white dark:ring-offset-gray-800"
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            </SimpleAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials; 