'use client';

// import Navbar from "@/components/layouts/navbar";
import AboutSection from "@/components/layouts/about-section";
import ExperienceSection from "@/components/layouts/experience-section";
import FooterSection from "@/components/layouts/footer-section";
import HeroSection from "@/components/layouts/hero-section";
import ProjectSection from "@/components/layouts/project-section";
import SkillSection from "@/components/layouts/skill-section";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
}
