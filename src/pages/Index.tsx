import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProfessionalSummarySection } from '@/components/ProfessionalSummarySection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AwardsSection } from '@/components/AwardsSection';
import { ConferencesSection } from '@/components/ConferencesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProfessionalSummarySection />
        <SkillsSection />
        <ProjectsSection />
        <AwardsSection />
        <ConferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
