
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';

const blogs = [
  {
    id: 1,
    title: '10 Smart Ways to Reduce Your Monthly Expenses',
    description: 'Learn practical strategies to trim your budget without sacrificing lifestyle, helping you save more efficiently.',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Jun 12, 2023',
    readTime: '5 min read',
    author: 'Sarah Johnson',
    authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    category: 'Budgeting'
  },
  {
    id: 2,
    title: "Understanding Investment Risk: A Beginner's Guide",
    description: 'An introduction to different types of investment risk and how to build a portfolio aligned with your risk tolerance.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'May 28, 2023',
    readTime: '8 min read',
    author: 'Michael Chen',
    authorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    category: 'Investing'
  },
  {
    id: 3,
    title: 'How AI is Transforming Personal Finance Management',
    description: 'Explore how artificial intelligence is revolutionizing budget tracking, investing, and financial planning.',
    image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Apr 15, 2023',
    readTime: '6 min read',
    author: 'Alicia Rodriguez',
    authorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    category: 'Technology'
  },
  {
    id: 4,
    title: 'Building an Emergency Fund: Why and How',
    description: 'The importance of having financial safety nets and actionable steps to build your emergency fund from scratch.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Mar 02, 2023',
    readTime: '4 min read',
    author: 'David Wilson',
    authorImg: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    category: 'Saving'
  },
  {
    id: 5,
    title: 'Tax-Saving Strategies You Might Be Overlooking',
    description: 'Discover lesser-known tax deductions and credits that could potentially save you thousands each year.',
    image: 'https://images.unsplash.com/photo-1586486855514-8c935fad7a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Feb 18, 2023',
    readTime: '7 min read',
    author: 'Jennifer Lee',
    authorImg: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    category: 'Taxes'
  },
  {
    id: 6,
    title: 'The Psychology of Money: Understanding Your Financial Behaviors',
    description: 'How your mindset and emotions influence spending habits and financial decisions, with tips to improve your money mindset.',
    image: 'https://images.unsplash.com/photo-1593672755342-741142ec5ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Jan 05, 2023',
    readTime: '9 min read',
    author: 'Robert Taylor',
    authorImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    category: 'Psychology'
  },
];

const BlogList = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Finance <span className="gradient-text">Insights</span> & Tips
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Expert advice and in-depth articles to help you make smarter financial decisions.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 justify-center">
          <Button variant="outline" className="rounded-full" size="sm">All Topics</Button>
          <Button variant="outline" className="rounded-full bg-finance-50 text-finance-700 border-finance-200 dark:bg-finance-900/20 dark:text-finance-400 dark:border-finance-800" size="sm">Budgeting</Button>
          <Button variant="outline" className="rounded-full" size="sm">Investing</Button>
          <Button variant="outline" className="rounded-full" size="sm">Saving</Button>
          <Button variant="outline" className="rounded-full" size="sm">Taxes</Button>
          <Button variant="outline" className="rounded-full" size="sm">Technology</Button>
          <Button variant="outline" className="rounded-full" size="sm">Psychology</Button>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-xs font-medium text-finance-700 dark:text-finance-400">
                    {blog.category}
                  </span>
                </div>
              </div>
              <CardContent className="pt-5">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  <Link to={`/blog/${blog.id}`} className="hover:text-finance-600 transition-colors">
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                  {blog.description}
                </p>
              </CardContent>
              <CardFooter className="border-t border-gray-100 dark:border-gray-800 pt-4 flex items-center">
                <img 
                  src={blog.authorImg} 
                  alt={blog.author} 
                  className="w-8 h-8 rounded-full mr-3 object-cover"
                />
                <span className="text-sm font-medium">{blog.author}</span>
                <div className="ml-auto">
                  <Link to={`/blog/${blog.id}`}>
                    <Button variant="ghost" size="sm" className="text-finance-600 dark:text-finance-400 hover:text-finance-700 dark:hover:text-finance-300">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="bg-finance-50 text-finance-700 border-finance-200 dark:bg-finance-900/20 dark:text-finance-400 dark:border-finance-800">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
