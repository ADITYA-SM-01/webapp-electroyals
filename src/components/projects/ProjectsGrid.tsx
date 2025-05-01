import React from "react";

const projects = [
  {
    title: "Enterprise Software Overhaul",
    client: "Global Technologies Inc.",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    description: "Complete redesign and modernization of enterprise resource planning system."
  },
  {
    title: "E-commerce Platform",
    client: "StyleShop Brands",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    description: "Custom e-commerce solution with integrated inventory management and analytics."
  },
  {
    title: "Mobile Banking Application",
    client: "First National Bank",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    description: "Secure, user-friendly mobile banking app with advanced transaction features."
  },
  {
    title: "Healthcare Dashboard",
    client: "MediCare Systems",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    description: "Intuitive analytics dashboard for healthcare providers to monitor patient care metrics."
  },
  {
    title: "Supply Chain Management System",
    client: "Logistics Pro",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1566232392379-cacf2aa4efa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    description: "End-to-end supply chain management solution with real-time tracking and reporting."
  },
  {
    title: "Corporate Rebranding",
    client: "Fusion Industries",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    description: "Complete corporate identity redesign including logo, website, and marketing materials."
  }
];

const ProjectsGrid = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
            All Projects
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 text-sm font-medium transition-colors">
            Software Development
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 text-sm font-medium transition-colors">
            Web Development
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 text-sm font-medium transition-colors">
            UI/UX Design
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 text-sm font-medium transition-colors">
            App Development
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.client}
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4">
                  <button className="text-blue-600 dark:text-blue-400 font-medium text-sm inline-flex items-center">
                    View Project Details
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid; 