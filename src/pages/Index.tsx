import GSAPNavigation from '@/components/GSAPNavigation';
import HeroSection from '@/components/HeroSection';
import GSAPAboutSection from '@/components/GSAPAboutSection';
import GSAPSkillsSection from '@/components/GSAPSkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import GSAPPortfolioSection from '@/components/GSAPPortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GSAPNavigation />
      <main>
        <HeroSection />
        <GSAPAboutSection />
        <GSAPSkillsSection />
        <ExperienceSection />
        <GSAPPortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
