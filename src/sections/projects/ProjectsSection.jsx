import { Sparkles } from "lucide-react";
import CaseStudySection from "../../components/showcase/CaseStudySection";
import { projects } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <CaseStudySection
      id="portfolio"
      items={projects}
      moreLabel="More Projects"
      header={{
        icon: Sparkles,
        eyebrow: "Featured Case Studies",
        title: "Engineering Projects & Deliverables",
        description: "Highlighted engineering builds across spatial decision support systems and applied IoT automation, followed by additional competition projects.",
        className: "mb-10",
      }}
    />
  );
}
