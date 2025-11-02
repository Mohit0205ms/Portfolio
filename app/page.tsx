import AboutMeSection from '@/components/AboutMeSection';
import ContactMeSection from '@/components/ContactMeSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import MyProjectSection from '@/components/MyProjectSection';
import SkillSection from '@/components/SkillSection';
import { getPortfolioData } from '@/lib/sanity';

function HomeContent({ skills, experience, education, projects, aboutMe, socialLinks }: { skills: any[]; experience: any[]; education: any[]; projects: any[]; aboutMe: any; socialLinks: any[] }) {
  return (
    <div className='min-h-screen bg-white'>
      <HeroSection socialLinks={socialLinks} />
      <SkillSection skills={skills} />
      <ExperienceSection experiences={experience} education={education} />
      <AboutMeSection aboutMe={aboutMe} />
      <MyProjectSection projects={projects} />
      <ContactMeSection
        description="I'm always open to discussing product design work or partnership opportunities. Whether you have a project in mind or just want to chat about design and development, feel free to reach out."
        email="hello@mohitsingh.dev"
        phoneNumber="+91 98765 43210"
        socialLinks={socialLinks}
      />
    </div>
  );
}

export default async function Home() {
  const data = await getPortfolioData();
  const skills = data.skills;
  const experience = data.experience;
  const education = data.education;
  const projects = data.projects;
  const aboutMe = data.aboutMe;
  const socialLinks = data.socialLinks;
  console.log("experience: ", socialLinks);
  return <HomeContent skills={skills} experience={experience} education={education} projects={projects} aboutMe={aboutMe} socialLinks={socialLinks} />;
}
