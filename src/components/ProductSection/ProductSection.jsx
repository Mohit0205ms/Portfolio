import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSection.css';

const products = [
  {
    name: 'React Portfolio Template',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description: 'A beautiful, customizable React portfolio template for developers and designers.',
    skills: ['React', 'CSS', 'Responsive', 'Portfolio']
  },
  {
    name: 'Task Manager App',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    description: 'Organize your tasks efficiently with this modern, responsive task manager app.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    name: 'Weather Dashboard',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'A sleek weather dashboard built with React and OpenWeatherMap API.',
    skills: ['React', 'API', 'OpenWeatherMap', 'CSS']
  },
  {
    name: 'Expense Tracker',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Track your expenses and manage your budget with ease.',
    skills: ['React', 'Redux', 'Chart.js', 'Bootstrap']
  },
];

const ProductSection = () => {
  return (
    <section className="productSectionContainer">
      <h1 className="productSectionTitle">PRODUCTS</h1>
      <div className="productCardsGrid">
        {products.map((product, idx) => (
          <ProductCard key={idx} image={product.image} name={product.name} description={product.description} skills={product.skills} />
        ))}
      </div>
      <button className="sectionViewMoreButton">View More</button>
    </section>
  );
};

export default ProductSection; 