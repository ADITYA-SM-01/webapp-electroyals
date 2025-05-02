import React from "react";
import SectionLoading from "../ui/SectionLoading";

const executives = [
  {
    name: 'Jane Doe',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: '15+ years experience in business strategy and leadership. Jane founded the company with a vision to deliver exceptional solutions through technology and innovation.'
  },
  {
    name: 'John Smith',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Expert in software architecture and emerging technologies with previous experience at leading tech companies. John leads our technical strategy and innovation.'
  }
];

const teamMembers = [
  {
    name: 'Emily Chen',
    position: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Award-winning designer with a passion for user-centered design.'
  },
  {
    name: 'Michael Johnson',
    position: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Full-stack developer with expertise in multiple frameworks and languages.'
  },
  {
    name: 'Sarah Williams',
    position: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Certified project manager with a track record of delivering complex projects on time and within budget.'
  },
  {
    name: 'Robert Garcia',
    position: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Specializes in user research and creating data-driven design strategies.'
  },
  {
    name: 'Jennifer Lee',
    position: 'Back-End Developer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Database expert with experience building scalable and secure systems.'
  },
  {
    name: 'David Wilson',
    position: 'Marketing Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Digital marketing expert focused on growth strategies and brand development.'
  }
];

const TeamMembers = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Leadership Team
        </h2>
        
        <SectionLoading customDelay={600}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {executives.map((member, index) => (
              <div 
                key={index}
                className="flex flex-col lg:flex-row gap-6 bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-indigo-900/30"
              >
                <div className="w-32 h-32 mx-auto lg:mx-0 flex-shrink-0 overflow-hidden rounded-full border-4 border-blue-900/40">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mt-4 lg:mt-0">{member.name}</h3>
                  <p className="text-blue-400 font-medium text-lg mb-3">{member.position}</p>
                  <p className="text-gray-300">{member.bio}</p>
                  <div className="flex gap-3 mt-4">
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionLoading>
        
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Team Members
        </h2>
        
        <SectionLoading customDelay={1000}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 border border-indigo-900/20"
              >
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-900/30">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-blue-400 font-medium text-sm mb-3">{member.position}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
                <div className="flex justify-center gap-3 mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </SectionLoading>
      </div>
    </section>
  );
};

export default TeamMembers; 