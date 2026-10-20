import { motion } from 'framer-motion';
import { Briefcase, Sparkles, ChevronRight } from 'lucide-react';
import SectionLink from '../../components/ui/SectionLink';
import BrandLogo from '../../components/ui/BrandLogo';
import { asset } from '../../utils/asset';
import KeyStats from './KeyStats';
import PortraitBackdrop from './PortraitBackdrop';

const NAME_LINES = [
  { text: 'Muhamad', color: 'text-slate-900' },
  { text: 'Daffa', color: 'text-primary-light my-1 sm:my-2' },
  { text: 'Rial', color: 'text-slate-900' },
];

const CREDIBILITY_LABELS = [
  'Telkom University Graduate (GPA 3.89)',
  'SAP Certified (SCM500 & SCM600)',
  'Procurement Intern at SMART Tbk',
  'Experienced in Inventory Analysis',
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white text-slate-900 pt-24 pb-12 px-4 sm:px-6 md:px-12 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Faded brand watermark */}
      <BrandLogo
        variant="icon"
        decorative
        className="absolute -left-24 top-24 h-[560px] w-auto opacity-[0.035] pointer-events-none"
      />

      <div className="container mx-auto max-w-6xl flex-1 flex flex-col justify-center">

        {/* Top: stacked name + portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-2 md:pt-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-7 flex flex-col justify-center text-left z-10 pb-4 md:pb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-5 w-max max-w-full">
              <span>Industrial Engineer • Supply Chain Enthusiast</span>
            </div>

            <h1 className="font-display font-black tracking-tight leading-[0.93] text-left select-none">
              {NAME_LINES.map(({ text, color }) => (
                <span key={text} className={`block text-5xl sm:text-7xl md:text-8xl lg:text-[104px] ${color}`}>
                  {text}
                </span>
              ))}
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-5 text-xs sm:text-sm font-semibold text-slate-700">
              {CREDIBILITY_LABELS.map((label) => (
                <span key={label} className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-5 flex justify-center md:justify-end items-end relative z-10"
          >
            {/* Negative bottom margin tucks the portrait behind the overlapping card */}
            <div className="relative max-w-[290px] sm:max-w-[370px] md:max-w-[420px] w-full flex items-end justify-center mb-[-12px] sm:mb-[-20px] md:mb-[-26px]">
              <PortraitBackdrop />
              <img
                src={asset('images/profile/formal-portrait.png')}
                alt="Muhamad Daffa Rial"
                className="relative z-10 w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom: wide card overlapping the portrait */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative z-20 w-full bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          <div className="flex gap-1.5 mb-3">
            <span className="w-3.5 h-3.5 bg-primary rounded-[3px]"></span>
            <span className="w-3.5 h-3.5 bg-accent rounded-[3px]"></span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold text-slate-900 leading-snug md:leading-tight tracking-tight max-w-4xl">
            Analyzing complex problems, optimizing supply chain and procurement workflows, and addressing systemic industrial challenges through data precision and technology.
          </p>

          <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl">
            Experienced across end-to-end Procure-to-Pay (P2P) strategic sourcing & Quotation Comparison Form (QCF) in Coupa and SAP at Sinarmas CBS, quantitative inventory modeling with Excel Solver at PTPN I, and engineering smart spatial WebGIS (RIKSA) & IoT automation for EPR compliance.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mt-6">
            <SectionLink
              to="portfolio"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-accent-soft group-hover:rotate-12 transition-transform" />
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </SectionLink>

            <SectionLink
              to="profile"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-accent" />
              <span>Career Track & CV</span>
            </SectionLink>
          </div>

          <KeyStats />
        </motion.div>

      </div>
    </section>
  );
}
