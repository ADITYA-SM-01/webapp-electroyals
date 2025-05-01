import React from "react";

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

const ClientTestimonials = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-blue-200 dark:text-blue-900">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 10C12.5 10 10 15 10 18.75C10 22.5 12.5 25 15 25C17.5 25 20 22.5 20 20C20 17.5 17.5 15 15 15C16.25 15 17.5 13.75 17.5 10ZM30 10C25 10 22.5 15 22.5 18.75C22.5 22.5 25 25 27.5 25C30 25 32.5 22.5 32.5 20C32.5 17.5 30 15 27.5 15C28.75 15 30 13.75 30 10Z" fill="currentColor"/>
                </svg>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials; 