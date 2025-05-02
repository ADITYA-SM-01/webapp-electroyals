import React from "react";
import { BarChart2, Code, Lightbulb, MessageSquare, PenTool, UserPlus } from "lucide-react";
import SectionLoading from "../ui/SectionLoading";

const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-400" />,
    title: "Software Development",
    description: "We build custom software solutions tailored to your business needs using modern technologies and best practices. Our development process ensures scalable, maintainable, and secure applications that drive your business forward.",
    features: [
      "Custom web and mobile applications",
      "Enterprise software solutions",
      "API development and integration",
      "Legacy system modernization",
      "Cloud-native applications"
    ]
  },
  {
    icon: <PenTool className="h-10 w-10 text-indigo-400" />,
    title: "UI/UX Design",
    description: "Our design team creates beautiful, intuitive interfaces that enhance user experience and drive engagement. We focus on user-centered design principles to deliver interfaces that are both visually appealing and highly functional.",
    features: [
      "User research and persona development",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing"
    ]
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-purple-400" />,
    title: "Strategic Consulting",
    description: "Our consulting services provide expert guidance to help your business grow and navigate complex challenges. We work closely with you to develop strategies that leverage technology to achieve your business objectives.",
    features: [
      "Digital transformation strategy",
      "Technology roadmapping",
      "Process optimization",
      "IT strategy and planning",
      "Innovation workshops"
    ]
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-teal-400" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our data analytics services. We help you collect, analyze, and visualize data to make informed business decisions and identify new opportunities for growth.",
    features: [
      "Data warehouse design and implementation",
      "Business intelligence solutions",
      "Predictive analytics",
      "Data visualization dashboards",
      "Big data processing"
    ]
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-blue-400" />,
    title: "Digital Marketing",
    description: "Our digital marketing strategies help you reach and convert your ideal customers. We combine creativity with data-driven approaches to deliver campaigns that generate measurable results.",
    features: [
      "Search engine optimization (SEO)",
      "Content marketing strategies",
      "Social media marketing",
      "Email marketing campaigns",
      "Marketing analytics and reporting"
    ]
  },
  {
    icon: <UserPlus className="h-10 w-10 text-indigo-400" />,
    title: "Team Augmentation",
    description: "Scale your team with skilled professionals to meet your project needs. Our team augmentation services provide you with the right talent at the right time, helping you accelerate development and meet deadlines.",
    features: [
      "Skilled developers and designers",
      "Project managers and business analysts",
      "DevOps and quality assurance specialists",
      "Flexible engagement models",
      "Seamless integration with your team"
    ]
  }
];

const ServicesList = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <SectionLoading key={index} customDelay={600 + index * 300}>
              <div 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-flex items-center justify-center p-4 mb-6 bg-gray-900/70 backdrop-blur-md rounded-xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-1 rounded-2xl shadow-lg">
                    <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-8 border border-indigo-900/20">
                      <div className="h-64 bg-gray-800/70 rounded-lg mb-6 flex items-center justify-center">
                        <div className="text-6xl text-gray-600">
                          {service.icon}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-800/70 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-800/70 rounded-full"></div>
                        <div className="h-4 bg-gray-800/70 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-900/30 rounded-full blur-xl -z-10"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-900/30 rounded-full blur-xl -z-10"></div>
                </div>
              </div>
            </SectionLoading>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList; 