import React from "react";
import { 
  Lightbulb, 
  Users, 
  Code, 
  Rocket,
  LineChart
} from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Discovery",
    description: "We begin by understanding your business, goals, and challenges through in-depth discussions and research."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Planning",
    description: "We develop a detailed strategy and project plan tailored to your specific needs and objectives."
  },
  {
    icon: <Code className="h-8 w-8 text-indigo-500" />,
    title: "Development",
    description: "Our expert team brings your solution to life using modern technologies and best practices."
  },
  {
    icon: <LineChart className="h-8 w-8 text-green-500" />,
    title: "Testing & QA",
    description: "Rigorous testing ensures that your solution is reliable, secure, and performs optimally."
  },
  {
    icon: <Rocket className="h-8 w-8 text-purple-500" />,
    title: "Deployment",
    description: "We launch your solution with a smooth transition, ensuring minimal disruption to your operations."
  }
];

const ServiceProcess = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Service Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We follow a structured approach to ensure consistent, high-quality results for every project
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative z-10 bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess; 