import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, description, skills = [] }) => {
  return (
    <div className="productCardContainer">
      <div className="productCardImageContainer">
        <img src={image} alt={name} className="productCardImage" />
      </div>
      <div className="productCardContent">
        <span className="productCardName">{name}</span>
        <p className="productCardDescription">{description}</p>
        {skills.length > 0 && (
          <div className="productCardSkills">
            {skills.map((skill, idx) => (
              <span className="productCardSkillBadge" key={idx}>{skill}</span>
            ))}
          </div>
        )}
      </div>
      <div className="productCardButtonGroup">
        <button className="productCardButton download">Download</button>
        <button className="productCardButton learnMore">Learn More</button>
      </div>
    </div>
  );
};

export default ProductCard; 