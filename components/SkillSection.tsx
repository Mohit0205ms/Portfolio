import SkillCard from "./shared/SkillCard";
import AnimatedSection from "./shared/AnimatedSection";
import { urlFor } from "@/lib/sanity";

const SkillSection = ({ skills }: {skills: any}) => {
  return (
    <section id="skills" className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-center text-3xl md:text-4xl text-black mb-12">My <span className="font-extrabold">Skills</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 justify-center">
          {skills?.map((skill: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <SkillCard name={skill.name} icon={urlFor(skill.image).url()} isAlternate={index % 2 === 1} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSection;
