import React from 'react';
import './BlogCard.css';

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="blogCardContainer">
      <div className="blogCardImageContainer">
        <img src={image} alt={title} className="blogCardImage" />
      </div>
      <div className="blogCardContent">
        <span className="blogCardTitle">{title}</span>
        <p className="blogCardDescription">{description}</p>
      </div>
      <button className="sectionViewMoreButton blogCardReadMore">Read More</button>
    </div>
  );
};

export default BlogCard; 