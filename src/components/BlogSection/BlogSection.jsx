import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './BlogSection.css';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    title: 'How to Build a Portfolio with React',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description: 'A step-by-step guide to building a modern, responsive portfolio using React.js and best practices.'
  },
  {
    title: 'Understanding JavaScript Closures',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    description: 'Closures are a fundamental concept in JavaScript. Learn what they are and how to use them effectively.'
  },
  {
    title: 'CSS Grid vs Flexbox',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'A comparison of CSS Grid and Flexbox for modern web layouts, with practical examples.'
  },
  {
    title: 'Getting Started with Node.js',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'An introduction to Node.js, its ecosystem, and how to build your first server-side application.'
  },
];

const BlogSection = () => {
  const navigate = useNavigate();
  return (
    <section className="blogSectionContainer">
      <h1 className="blogSectionTitle">BLOGS</h1>
      <div className="blogCardsGrid">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} image={blog.image} title={blog.title} description={blog.description} />
        ))}
      </div>
      <button className="sectionViewMoreButton" onClick={() => navigate('/blogs')}>View More</button>
    </section>
  );
};

export default BlogSection; 