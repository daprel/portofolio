import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageLightbox from "../ui/ImageLightbox";
import FeaturedShowcase from "./FeaturedShowcase";
import ExpandableGrid from "./ExpandableGrid";
import SubsectionHeading from "./SubsectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import ActivityBadge from "./ActivityBadge";
import CategoryBadge from "./CategoryBadge";
import DoiLink from "./DoiLink";

// Section for project-shaped items (projects, internships, community service): featured items as large
// showcases, the rest as cards that open a case-study modal.
export default function CaseStudySection({ id, header, items, moreLabel }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const featured = items.filter((item) => item.featured);
  const others = items.filter((item) => !item.featured);

  return (
    <section id={id} className="py-14 md:py-16 px-6 md:px-12 bg-white relative border-t border-slate-100">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader {...header} />

        <div className="flex flex-col gap-8">
          {featured.map((item) => (
            <FeaturedShowcase
              key={item.id}
              images={item.images}
              onZoom={setZoomedImage}
              pills={
                <>
                  <ActivityBadge activity={item.activity} />
                  <CategoryBadge category={item.category} />
                </>
              }
              title={item.title}
              location={item.location}
              badge={item.badge}
              summary={item.summary}
              problem={item.problem}
              solution={item.solution}
              impact={item.impact}
              deliverables={item.deliverables}
              tags={item.tags}
              footer={<DoiLink doi={item.doi} className="mb-4" />}
            />
          ))}
        </div>

        {others.length > 0 && (
          <>
            {featured.length > 0 && <SubsectionHeading>{moreLabel}</SubsectionHeading>}
            <ExpandableGrid
              items={others}
              renderItem={(item) => (
                <ProjectCard
                  key={item.id}
                  project={item}
                  onOpen={() => setSelectedItem(item)}
                  onZoom={setZoomedImage}
                />
              )}
            />
          </>
        )}
      </div>

      <ProjectDetailModal
        project={selectedItem}
        onClose={() => setSelectedItem(null)}
        onZoom={setZoomedImage}
      />

      <ImageLightbox src={zoomedImage} onClose={() => setZoomedImage(null)} />
    </section>
  );
}
