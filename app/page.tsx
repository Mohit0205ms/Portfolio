import HeroSection from "@/components/HeroSection";
import SkillSection from "@/components/SkillSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection/>
      <SkillSection/>
    </div>
  );
}
