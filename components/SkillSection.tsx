'use client';
import SkillCard from "./shared/SkillCard";
import AnimatedSection from "./shared/AnimatedSection";
import ViewAllButton from "./shared/ViewAllButton";
import { urlFor } from "@/lib/sanity";
import { useRouter } from 'next/navigation';

const SkillSection = ({ skills, showViewAll = true, useViewport = false }: {skills: any, showViewAll?: boolean, useViewport?: boolean}) => {
  const router = useRouter();
  return (
    <section id="skills" className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection useViewport={useViewport}>
          <h2 className="text-center text-3xl md:text-4xl text-black mb-12">My <span className="font-extrabold">Skills</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 justify-center">
          {skills?.slice(0, showViewAll ? 15 : skills.length).map((skill: any, index: number) => {
            try {
              const iconUrl = skill.image ? urlFor(skill.image).url() : '';
              const skillId = skill._id || skill.name || `skill-${index}`;
              return (
                <AnimatedSection key={skillId} delay={index * 0.05} useViewport={useViewport}>
                  <SkillCard name={skill.name || 'Unknown Skill'} icon={iconUrl} isAlternate={index % 2 === 1} />
                </AnimatedSection>
              );
            } catch (error) {
              console.error('Error rendering skill:', skill, error);
              return null;
            }
          })}
        </div>

        {/* View All Button */}
        {showViewAll && skills && skills.length > 8 && (
          <div className="text-center mt-12">
            <ViewAllButton
              onClick={() => router.push('/skills')}
              isDarkBackground={false}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default SkillSection;
