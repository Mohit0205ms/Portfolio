'use client';

import ExperienceCard from './shared/ExperienceCard';
import ToggleButton from './shared/ToogleButton';
import AnimatedSection from './shared/AnimatedSection';
import { urlFor } from '@/lib/sanity';
import { useState } from 'react';

interface ExperienceData {
  _id: string;
  position: string;
  organization: string;
  from: string;
  to: string;
  location: string;
  description: any[];
  image?: {
    asset: {
      _ref: string;
    };
  };
}

interface EducationData {
  _id: string;
  name: string;
  institute: string;
  from: string;
  to: string;
  location: string;
  marks: string;
  description: any[];
}

interface ExperienceSectionProps {
  experiences: ExperienceData[];
  education: EducationData[];
}

const ExperienceSection = ({ experiences, education }: ExperienceSectionProps) => {
  const [activeTab, setActiveTab] = useState('work');

  // Helper function to convert Sanity rich text to plain text
  const convertRichTextToString = (blocks: any[]): string => {
    if (!blocks || !Array.isArray(blocks)) return '';

    return blocks
      .map(block => {
        if (block._type === 'block' && block.children) {
          return block.children
            .map((child: any) => child.text || '')
            .join('');
        }
        return '';
      })
      .join('\n\n');
  };

  // Transform experience data to match ExperienceCard props
  const transformedExperiences = experiences.map((exp, index) => ({
    id: exp._id,
    name: exp.organization,
    position: exp.position,
    from: exp.from,
    to: exp.to,
    location: exp.location,
    description: convertRichTextToString(exp.description),
    icon: exp.image ? urlFor(exp.image).url() : '',
    isAlternate: index % 2 === 1,
  }));

  // Transform education data to match ExperienceCard props
  const transformedEducation = education.map((edu, index) => ({
    id: edu._id,
    name: edu.institute,
    position: `${edu.name} (${edu.marks})`,
    from: edu.from,
    to: edu.to,
    location: edu.location,
    description: convertRichTextToString(edu.description),
    icon: '',
    isAlternate: index % 2 === 1,
  }));

  // Get current data based on active tab
  const currentData = activeTab === 'work' ? transformedExperiences : transformedEducation;
  const sectionTitle = activeTab === 'work' ? 'Experience' : 'Education';

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="experience" className="py-6 px-4 sm:px-6 lg:px-8 bg-black mt-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-center mt-6 text-3xl md:text-4xl text-white mb-6">
            My <span className="font-extrabold">{sectionTitle}</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ToggleButton onChange={handleTabChange} />
        </AnimatedSection>
        <div className="max-w-4xl mx-auto space-y-6">
          {currentData.map((item, index) => (
            <AnimatedSection key={item.id} delay={0.15 + index * 0.1}>
              <ExperienceCard
                icon={item.icon}
                position={item.position}
                from={item.from}
                to={item.to}
                name={item.name}
                location={item.location}
                isAlternate={item.isAlternate}
                description={item.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
