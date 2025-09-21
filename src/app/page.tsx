import AboutSection from "@/components/layouts/about-section";
import ExperienceSection from "@/components/layouts/experience-section";
import FooterSection from "@/components/layouts/footer-section";
import HeroSection from "@/components/layouts/hero-section";
import ProjectSection from "@/components/layouts/project-section";
import SkillSection from "@/components/layouts/skill-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <FooterSection />
    </>
  );
}
