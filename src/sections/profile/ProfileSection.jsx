import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Cpu, ShieldCheck } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";
import ProfileCard from "./ProfileCard";
import ExperienceTab from "./tabs/ExperienceTab";
import CertificationsTab from "./tabs/CertificationsTab";
import EducationTab from "./tabs/EducationTab";
import SkillsTab from "./tabs/SkillsTab";

const tabs = [
  { id: "experience", label: "Career Journey", icon: Briefcase, Content: ExperienceTab },
  { id: "certifications", label: "Certifications", icon: ShieldCheck, Content: CertificationsTab },
  { id: "education", label: "Education & Patents", icon: GraduationCap, Content: EducationTab },
  { id: "skills", label: "Core Competencies", icon: Cpu, Content: SkillsTab },
];

export default function ProfileSection() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const { Content } = tabs.find((tab) => tab.id === activeTabId);

  return (
    <section
      id="profile"
      className="py-14 md:py-16 px-6 md:px-12 bg-white text-slate-900 relative border-t border-slate-100"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          icon={Award}
          eyebrow="Professional Track Record"
          title="Background & Credentials"
          description="Executive overview of professional corporate internships, verified SAP certifications, and academic foundations supporting technical engineering projects."
          className="mb-10"
        />

        <ProfileCard />

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTabId(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTabId === id
                  ? "bg-primary text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Content />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
