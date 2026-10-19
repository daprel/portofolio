import { HeartHandshake } from "lucide-react";
import CaseStudySection from "../../components/showcase/CaseStudySection";
import { communityService } from "../../data/communityService";

export default function CommunityServiceSection() {
  return (
    <CaseStudySection
      id="community"
      items={communityService}
      moreLabel="More Community Service"
      header={{
        icon: HeartHandshake,
        eyebrow: "Community Engagement",
        title: "Community Service",
        description: "University community service programs supporting MSMEs through halal certification readiness, digital marketing training, and knowledge-based promotion, alongside education outreach.",
        className: "mb-10",
      }}
    />
  );
}
