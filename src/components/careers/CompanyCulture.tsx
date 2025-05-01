import React from 'react';
import { 
  Smile, 
  Award, 
  Heart, 
  Users
} from 'lucide-react';

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

const CompanyCulture = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Company Culture
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              At ELECTROYALS, we believe that a positive, supportive culture is essential to our success. 
              We've built a workplace where innovation thrives, where diverse perspectives are valued, 
              and where team members are empowered to do their best work.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cultureValues.map((value, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl"></div>
            
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Team meeting" 
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Team celebration" 
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Office environment" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Employee quotes */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-serif">
              "
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "The culture here is unlike anywhere I've worked before. There's a genuine focus on both personal and professional growth."
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">Sarah J.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
          </div>
          
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-serif">
              "
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "I appreciate how collaborative our team is. Everyone is willing to help each other and share knowledge."
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">Michael R.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
          </div>
          
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-serif">
              "
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "The leadership team truly cares about our wellbeing and creating an environment where we can do our best work."
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">Emily T.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture; 