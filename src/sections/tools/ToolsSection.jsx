import { Cpu } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import { coreTools } from '../../data/tools';
import ToolCard from './ToolCard';
import CollaborativeTools from './CollaborativeTools';

export default function ToolsSection() {
  return (
    <section id="tools" className="py-14 md:py-16 px-6 md:px-12 bg-white text-slate-900 relative border-t border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          icon={Cpu}
          eyebrow="Technical Stack & Software"
          title="Software & Tool Ecosystem"
          description="Specialized engineering software, enterprise ERP systems, industrial simulation tools, and analytical suites actively utilized for operational problem-solving."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {coreTools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} />
          ))}
        </div>

        <CollaborativeTools />
      </div>
    </section>
  );
}
