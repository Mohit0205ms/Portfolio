import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSection.css';
import { projects as products } from '../../data/projects';

const ProductSection = ({title}) => {
  return (
    <section className="productSectionContainer">
      <h1 className="productSectionTitle">{title}</h1>
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