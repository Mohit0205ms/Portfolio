import React from 'react';
import './SkillCard.css';

const SkillCard = ({ image, name }) => {
  return (
    <div className="skillCardContainer">
      <div className="skillCardImageContainer">
        <img src={image} alt={name} className="skillCardImage" />
      </div>
      <div className="skillCardNameContainer">
        <span className="skillCardName">{name}</span>
      </div>
    </div>
  );
};

export default SkillCard; 