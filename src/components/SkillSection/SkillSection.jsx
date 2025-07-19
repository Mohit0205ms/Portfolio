import React from 'react';
import SkillCard from './SkillCard';
import { icons } from '../../assets';
import './SkillSection.css';

const skills = [
  { name: 'React.js', image: icons.react_logo },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Github', image: icons.github_icon },
  { name: 'Redux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
];

const SkillSection = () => {
  return (
    <section className="skillSectionContainer">
      <h1>SKILLS</h1>
      <div className="skillCardsGrid">
        {skills.map((skill, idx) => (
          <SkillCard key={idx} image={skill.image} name={skill.name} />
        ))}
      </div>
      <button className="sectionViewMoreButton">View More</button>
    </section>
  );
};

export default SkillSection; 