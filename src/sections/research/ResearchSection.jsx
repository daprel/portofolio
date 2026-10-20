import { BookOpen } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";
import FeaturedShowcase from "../../components/showcase/FeaturedShowcase";
import ExpandableGrid from "../../components/showcase/ExpandableGrid";
import SubsectionHeading from "../../components/showcase/SubsectionHeading";
import ActivityBadge from "../../components/showcase/ActivityBadge";
import CategoryBadge from "../../components/showcase/CategoryBadge";
import { publications, intellectualProperty } from "../../data/credentials";
import PublicationCard from "./PublicationCard";
import IprCard from "./IprCard";
import DoiLink from "../../components/showcase/DoiLink";

const featuredPublications = publications.filter((pub) => pub.featured);
const otherPublications = publications.filter((pub) => !pub.featured);
const featuredIprs = intellectualProperty.filter((ipr) => ipr.featured);
const otherIprs = intellectualProperty.filter((ipr) => !ipr.featured);

export default function ResearchSection() {
  return (
    <section id="research" className="py-14 md:py-16 px-6 md:px-12 bg-white relative border-t border-slate-100">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader
          icon={BookOpen}
          eyebrow="Research & Intellectual Property"
          title="Publications & Registered IP"
          description="Peer-reviewed international conference papers and national journal articles, alongside computer programs registered with the Directorate General of Intellectual Property (DGIP) Indonesia."
          className="mb-10"
        />

        {/* Publications */}
        <SubsectionHeading className="mb-6">Publications</SubsectionHeading>
        <div className="flex flex-col gap-8">
          {featuredPublications.map((pub) => (
            <FeaturedShowcase
              key={pub.id}
              pills={
                <>
                  <ActivityBadge activity="research" />
                  <CategoryBadge category={pub.type} />
                  <CategoryBadge category={pub.indexed} />
                </>
              }
              title={pub.title}
              location={pub.location}
              badge={pub.conference}
              summary={pub.summary}
              problem={pub.problem}
              solution={pub.solution}
              impact={pub.impact}
              deliverables={pub.deliverables}
              tags={pub.tags}
              collapseOutcome
              footer={<DoiLink doi={pub.doi} className="mb-4" />}
            />
          ))}
        </div>

        {otherPublications.length > 0 && (
          <>
            <SubsectionHeading>More Publications</SubsectionHeading>
            <ExpandableGrid
              items={otherPublications}
              columns="md:grid-cols-2"
              renderItem={(pub) => <PublicationCard key={pub.id} publication={pub} />}
            />
          </>
        )}

        {/* Intellectual property */}
        <SubsectionHeading className="mt-16 mb-6">Intellectual Property (HKI)</SubsectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredIprs.map((ipr) => (
            <FeaturedShowcase
              key={ipr.number}
              pills={<CategoryBadge category={ipr.type} />}
              title={ipr.title}
              badge={`No. ${ipr.number}`}
              summary={`Filing date: ${ipr.date}.`}
              footer={
                ipr.relatedProject && (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-bold text-accent">Developed in: </span>
                    {ipr.relatedProject}
                  </p>
                )
              }
            />
          ))}
        </div>

        {otherIprs.length > 0 && (
          <>
            <SubsectionHeading>More Registered IP</SubsectionHeading>
            <ExpandableGrid
              items={otherIprs}
              renderItem={(ipr) => <IprCard key={ipr.number} ipr={ipr} />}
            />
          </>
        )}
      </div>
    </section>
  );
}
