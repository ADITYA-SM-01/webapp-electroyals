import React from "react";
import { Heart, Target, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: <Heart className="h-10 w-10 text-red-500" />,
    title: "Passion",
    description: "We are passionate about what we do and committed to delivering exceptional results for our clients."
  },
  {
    icon: <Target className="h-10 w-10 text-blue-500" />,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake, paying meticulous attention to detail."
  },
  {
    icon: <Users className="h-10 w-10 text-green-500" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and collaboration to create innovative solutions."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-purple-500" />,
    title: "Innovation",
    description: "We embrace creativity and continuously seek new ways to solve complex challenges."
  }
];

const OurValues = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            These principles guide everything we do and define who we are as a team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues; 