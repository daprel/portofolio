import HeroSection from '../sections/hero/HeroSection';
import ProjectsSection from '../sections/projects/ProjectsSection';
import InternshipsSection from '../sections/internships/InternshipsSection';
import ResearchSection from '../sections/research/ResearchSection';
import CommunityServiceSection from '../sections/community/CommunityServiceSection';
import ToolsSection from '../sections/tools/ToolsSection';
import ProfileSection from '../sections/profile/ProfileSection';
import ContactSection from '../sections/contact/ContactSection';

// Single-page landing; section ids must match `navLinks` in data/navigation.js.
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <InternshipsSection />
      <ResearchSection />
      <CommunityServiceSection />
      <ToolsSection />
      <ProfileSection />
      <ContactSection />
    </>
  );
}
