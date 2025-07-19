import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    position: 'Frontend Developer',
    description: 'Worked on scalable UI components for Google Search. Improved performance and accessibility.'
  },
  {
    company: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    position: 'Backend Developer',
    description: 'Built REST APIs for Microsoft Teams. Focused on security and reliability.'
  },
  {
    company: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    position: 'Full Stack Engineer',
    description: 'Developed features for Amazon Prime Video. Collaborated with cross-functional teams.'
  },
  {
    company: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    position: 'UI/UX Designer',
    description: 'Designed user flows and wireframes for Facebook Messenger. Enhanced user engagement.'
  },
  {
    company: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    position: 'Project Manager',
    description: 'Led a team to deliver iOS app updates on time. Coordinated between design and engineering.'
  },
  {
    company: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    position: 'DevOps Engineer',
    description: 'Automated deployment pipelines for Netflix Originals. Reduced downtime and improved monitoring.'
  },
  {
    company: 'Tesla',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    position: 'QA Tester',
    description: 'Tested software for Tesla Autopilot. Reported and tracked bugs, ensuring safety compliance.'
  },
  {
    company: 'Adobe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_Corporate_Logo.png',
    position: 'Mobile Developer',
    description: 'Built features for Adobe Creative Cloud mobile apps. Optimized for performance and usability.'
  },
];

const Experience = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = experiences[selectedIdx];

  return (
    <section className="experienceSectionContainer">
      <h1>EXPERIENCE</h1>
      <div className="experienceColumnsWrapper">
        <div className="experienceColumn experienceLeftColumn">
          {experiences.map((exp, idx) => (
            <div
              className={`experienceCompanyItem${selectedIdx === idx ? ' selected' : ''}`}
              key={exp.company}
              onClick={() => setSelectedIdx(idx)}
            >
              <span className="accentBar" style={{background: selectedIdx === idx ? 'rgb(124, 160, 251)' : 'transparent'}}></span>
              <img src={exp.logo} alt={exp.company + ' logo'} className="companyLogo" />
              <span className="companyNameText">{exp.company}</span>
            </div>
          ))}
        </div>
        <div className="experienceColumn experienceRightColumn experienceDetails cardEffect" key={selected.company}>
          <header className="experienceDetailsHeader">
            <div className="experienceDetailsHeaderTop">
              <img src={selected.logo} alt={selected.company + ' logo'} className="companyLogo detailsLogo" />
              <div>
                <h2 className="experienceCompanyName">{selected.company}</h2>
                <h3 className="experiencePosition">{selected.position}</h3>
              </div>
            </div>
            <hr className="experienceDivider" />
          </header>
          <section className="experienceDescriptionSection">
            <p className="experienceDescription">{selected.description}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Experience;
