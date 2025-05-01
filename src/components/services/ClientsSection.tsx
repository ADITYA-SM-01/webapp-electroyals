import React from "react";

const clients = [
  {
    name: "Tech Innovators Inc.",
    logo: "https://placehold.co/200x80/e2e8f0/64748b?text=Tech+Innovators&font=montserrat"
  },
  {
    name: "Global Finance Group",
    logo: "https://placehold.co/200x80/e2e8f0/64748b?text=Global+Finance&font=montserrat"
  },
  {
    name: "Retail Solutions",
    logo: "https://placehold.co/200x80/e2e8f0/64748b?text=Retail+Solutions&font=montserrat"
  },
  {
    name: "Healthcare Systems",
    logo: "https://placehold.co/200x80/e2e8f0/64748b?text=Healthcare+Systems&font=montserrat"
  },
  {
    name: "Education Partners",
    logo: "https://placehold.co/200x80/e2e8f0/64748b?text=Education+Partners&font=montserrat"
  },
  {
    name: "Manufacturing Experts",
    logo: "https://placehold.co/200x80/e2e8f0/64748b?text=Manufacturing+Experts&font=montserrat"
  },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We've had the privilege of working with amazing clients across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-12"
              />
            </div>
          ))}
        </div>
        
        <div className="max-w-xl mx-auto text-center mt-16">
          <blockquote className="text-xl italic text-gray-600 dark:text-gray-300">
            "Working with the ELECTROYALS has been a transformative experience for our business. Their expertise, attention to detail, and commitment to excellence have made them an invaluable partner in our growth journey."
          </blockquote>
          <div className="mt-4">
            <p className="font-semibold text-gray-900 dark:text-white">John Anderson</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">CEO, Tech Innovators Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection; 