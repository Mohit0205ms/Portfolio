'use client';

import AboutMeSection from '@/components/AboutMeSection';
import ContactMeSection from '@/components/ContactMeSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import MyProjectSection from '@/components/MyProjectSection';
import SkillSection from '@/components/SkillSection';
import { usePortfolioData } from '@/contexts/PortfolioDataContext';

function HomeContent() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return <div className='min-h-screen bg-white flex items-center justify-center'>Loading...</div>;
  }

  if (error) {
    return <div className='min-h-screen bg-white flex items-center justify-center'>Error: {error}</div>;
  }

  if (!data) {
    return <div className='min-h-screen bg-white flex items-center justify-center'>No data available</div>;
  }

  const { skills, experience, education, projects, aboutMe, socialLinks, home } = data;

  return (
    <div className='min-h-screen bg-white'>
      <HeroSection socialLinks={socialLinks} home={home} />
      <SkillSection skills={skills} useViewport={true} />
      <ExperienceSection experiences={experience} education={education} useViewport={true} />
      <AboutMeSection aboutMe={aboutMe} />
      <MyProjectSection projects={projects} useViewport={true} />
      <ContactMeSection
        description="I'm always open to discussing product design work or partnership opportunities. Whether you have a project in mind or just want to chat about design and development, feel free to reach out."
        email="mohitsingh0205ms@gmail.com"
        phoneNumber="+91 8288931619"
        socialLinks={socialLinks}
      />
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
