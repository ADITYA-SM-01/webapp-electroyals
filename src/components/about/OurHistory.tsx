import React from "react";

const milestones = [
  {
    year: "2015",
    title: "Foundation",
    description: "Our company was founded with a vision to deliver innovative solutions for businesses."
  },
  {
    year: "2017",
    title: "Growth & Expansion",
    description: "Expanded our team and opened our first office in San Francisco."
  },
  {
    year: "2019",
    title: "International Reach",
    description: "Started working with international clients and expanded our service offerings."
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: "Received multiple industry awards for our excellence in service delivery."
  },
  {
    year: "2023",
    title: "Innovation Leadership",
    description: "Launched new innovative services and strengthened our position as industry leaders."
  }
];

const OurHistory = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            From humble beginnings to industry leadership, explore the key milestones in our company's history.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900/30 -translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  {/* Year marker */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold z-10">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} mb-8 md:mb-0`}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                      <div className="md:hidden text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for timeline alignment */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory; 