import SkillCard from "./shared/SkillCard";

const SkillSection = () => {
  return (
    <section id="skills" className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl text-black mb-12">My <span className="font-extrabold">Skills</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 justify-center">
          <SkillCard name="Git & Github"/>
          <SkillCard name="React Native" isAlternate/>
          <SkillCard name="Express"/>
          <SkillCard name="Node.js" isAlternate/>
          <SkillCard name="Express"/>
          <SkillCard name="Node.js" isAlternate/>
          <SkillCard name="Express"/>
          <SkillCard name="Node.js" isAlternate/>
          <SkillCard name="Express"/>
          <SkillCard name="Node.js" isAlternate/>
        </div>
      </div>
    </section>
  )
}

export default SkillSection;
