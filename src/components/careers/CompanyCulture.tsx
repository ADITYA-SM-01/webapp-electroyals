import React from 'react';
import { 
  Smile, 
  Award, 
  Heart, 
  Users,
  CheckCircle2
} from 'lucide-react';
import { motion } from "framer-motion";
import { SimpleAnimation, SimpleStagger, slideUp, slideLeft, slideRight, fadeIn } from "../common/SimpleAnimation";

const cultureValues = [
  {
    icon: <Smile className="h-8 w-8 text-yellow-500" />,
    title: "Positive Environment",
    description: "We foster a positive, supportive environment where team members can thrive and do their best work."
  },
  {
    icon: <Award className="h-8 w-8 text-blue-500" />,
    title: "Excellence",
    description: "We're committed to excellence in everything we do, consistently delivering high-quality work."
  },
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Passion",
    description: "We're passionate about what we do and deeply care about the impact of our work."
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and create an environment where collaboration thrives."
  }
];

const culturePoints = [
  "Collaborative and inclusive environment where every voice matters",
  "Continuous learning and professional development opportunities",
  "Work-life balance that values personal time and wellbeing",
  "Innovation-driven approach that encourages creative thinking",
  "Open communication and transparent leadership",
  "Recognition and rewards for outstanding contributions"
];

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

// Custom variants for the animations
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CompanyCulture = () => {
  return (
    <section className="py-16 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Space theme decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated stars */}
        {[...Array(15)].map((_, i) => (
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
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <SimpleAnimation variants={slideLeft} className="lg:w-1/2">
            <div className="bg-gradient-to-br from-electroyals-50/80 to-electroyals-100/90 dark:from-electroyals-900/80 dark:to-electroyals-800/90 
            backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl 
            hover:shadow-electroyals-300/20 dark:hover:shadow-electroyals-600/20 
            transition-all duration-300 relative overflow-hidden 
            border border-electroyals-200/50 dark:border-electroyals-700/50">
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-electroyals-200/30 dark:bg-electroyals-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-electroyals-300/20 dark:bg-electroyals-500/20 rounded-full blur-xl"></div>
              
              <div className="relative z-10 p-8">
                <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electroyals-500 to-electroyals-600 dark:from-electroyals-400 dark:to-electroyals-500">
                  Our Cosmic Culture
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We've built a vibrant, collaborative culture where innovation thrives, and every team member can grow personally and professionally.
                </p>
                
                <SimpleStagger className="space-y-4">
                  {culturePoints.map((point, index) => (
                    <div 
                      key={index} 
                      className="flex items-start"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="h-6 w-6 text-electroyals-500 dark:text-electroyals-400 mt-0.5 mr-3 flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </div>
                  ))}
                </SimpleStagger>
              </div>
            </div>
          </SimpleAnimation>
          
          <div className="lg:w-1/2">
            <SimpleAnimation variants={slideRight}>
              <div className="relative">
                {/* Main image */}
                <div className="bg-gradient-to-br from-electroyals-50/80 to-electroyals-100/90 dark:from-electroyals-900/80 dark:to-electroyals-800/90 
                  backdrop-blur-sm rounded-xl p-3 shadow-md hover:shadow-xl 
                  hover:shadow-electroyals-300/20 dark:hover:shadow-electroyals-600/20 
                  transition-all duration-300 relative overflow-hidden 
                  border border-electroyals-200/50 dark:border-electroyals-700/50"
                >
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Team collaboration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Smaller floating image 1 */}
                <SimpleAnimation 
                  variants={slideLeft}
                  delay={0.3}
                  className="absolute -bottom-8 -left-8 w-48 h-48 md:w-64 md:h-64 z-20"
                >
                  <div className="bg-gradient-to-br from-electroyals-50/80 to-electroyals-100/90 dark:from-electroyals-900/80 dark:to-electroyals-800/90 
                  backdrop-blur-sm rounded-xl p-2 shadow-lg 
                  border border-electroyals-200/50 dark:border-electroyals-700/50">
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" 
                        alt="Team meeting" 
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                  </div>
                </SimpleAnimation>
                
                {/* Smaller floating image 2 */}
                <SimpleAnimation 
                  variants={slideRight}
                  delay={0.6}
                  className="absolute -top-8 -right-8 w-40 h-40 md:w-56 md:h-56 z-20"
                >
                  <div className="bg-gradient-to-br from-electroyals-50/80 to-electroyals-100/90 dark:from-electroyals-900/80 dark:to-electroyals-800/90 
                  backdrop-blur-sm rounded-xl p-2 shadow-lg 
                  border border-electroyals-200/50 dark:border-electroyals-700/50">
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop" 
                        alt="Office space" 
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                  </div>
                </SimpleAnimation>
              </div>
            </SimpleAnimation>
          </div>
        </div>
        
        {/* Employee quotes */}
        <SimpleAnimation variants={fadeIn} delay={0.3}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Voices From Our Stellar Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hear what our team members have to say about working in our cosmic environment
              </p>
            </div>
          
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The culture here is unlike anywhere I've worked before. There's a genuine focus on both personal and professional growth.",
                  name: "Sarah J.",
                  role: "Software Engineer",
                  color: "blue"
                },
                {
                  quote: "I appreciate how collaborative our team is. Everyone is willing to help each other and share knowledge.",
                  name: "Michael T.",
                  role: "Product Designer",
                  color: "purple"
                },
                {
                  quote: "The work-life balance here is excellent, and there's real respect for personal time and wellbeing.",
                  name: "Alex R.",
                  role: "Marketing Specialist",
                  color: "indigo"
                }
              ].map((quote, index) => (
                <SimpleAnimation 
                  key={index}
                  variants={cardVariants}
                  delay={index * 0.1}
                  className={`bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-${quote.color}-100/50 dark:border-${quote.color}-900/50 relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${quote.color}-100/30 dark:bg-${quote.color}-900/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2`}></div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 relative z-10 italic">
                    "{quote.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-${quote.color}-100 to-${quote.color}-200 dark:from-${quote.color}-900/40 dark:to-${quote.color}-800/40 flex items-center justify-center text-${quote.color}-600 dark:text-${quote.color}-400 font-bold mr-3`}>
                      {quote.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {quote.name}
                      </h4>
                      <p className={`text-sm text-${quote.color}-600 dark:text-${quote.color}-400`}>
                        {quote.role}
                      </p>
                    </div>
                  </div>
                </SimpleAnimation>
              ))}
            </div>
          </div>
        </SimpleAnimation>
      </div>
    </section>
  );
};

export default CompanyCulture; 