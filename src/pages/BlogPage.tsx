
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BlogList from '../components/blog/BlogList';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog | FuturoFlow</title>
        <meta name="description" content="Expert financial advice, tips, and insights to help you make better financial decisions and reach your goals." />
      </Helmet>
      <Navbar />
      <main className="pt-20"> {/* Add padding to account for fixed navbar */}
        <BlogList />
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
