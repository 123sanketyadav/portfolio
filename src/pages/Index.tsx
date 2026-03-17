import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrainingSection from "@/components/TrainingSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen relative">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <TrainingSection />
    <CertificationsSection />
    <AchievementsSection />
    <EducationSection />
    <ContactSection />
    <footer className="border-t border-foreground/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <p className="font-mono text-xs text-foreground/30">
          © 2026 Sanket Yadav
        </p>
        <p className="font-mono text-xs text-foreground/20">
          Built with precision
        </p>
      </div>
    </footer>
  </div>
);

export default Index;
