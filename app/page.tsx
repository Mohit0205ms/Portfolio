import AboutMeSection from '@/components/AboutMeSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import MyProjectSection from '@/components/MyProjectSection';
import SkillSection from '@/components/SkillSection';
import ToggleButton from '@/components/shared/ToogleButton';
import Image from 'next/image';

export default function Home() {
  const starting =
    "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.";
  const middle =
    "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.";
  const ending =
    "When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.";
  return (
    <div className='min-h-screen bg-white'>
      <HeroSection />
      <SkillSection />
      <ExperienceSection />
      <AboutMeSection starting={starting} middle={middle} ending={ending} />
      <MyProjectSection/>
    </div>
  );
}
