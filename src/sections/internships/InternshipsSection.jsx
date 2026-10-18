import { Briefcase } from "lucide-react";
import CaseStudySection from "../../components/showcase/CaseStudySection";
import { internships } from "../../data/internships";

export default function InternshipsSection() {
  return (
    <CaseStudySection
      id="internships"
      items={internships}
      moreLabel="More Internships"
      header={{
        icon: Briefcase,
        eyebrow: "Industry Experience",
        title: "Internship Case Studies",
        description: "Corporate supply chain and procurement engagements, from quantitative inventory modeling to end-to-end strategic sourcing in SAP and Coupa.",
        className: "mb-10",
      }}
    />
  );
}
