import { motion } from 'framer-motion';
import { Mail, ExternalLink, GraduationCap, MapPin } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import { personalInfo } from '../../data/profile';

const contacts = [
  {
    icon: Mail,
    label: "Official Email",
    value: personalInfo.email,
    action: `mailto:${personalInfo.email}`,
    buttonText: "Send Email",
    highlight: true
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/daffarial",
    action: personalInfo.linkedinUrl,
    buttonText: "Visit Profile",
    highlight: false
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    value: personalInfo.name,
    action: personalInfo.scholarUrl,
    buttonText: "View Publications",
    highlight: false
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 md:py-16 px-6 md:px-12 bg-white text-slate-900 relative border-t border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Communication & Inquiries"
          title="Let's Connect & Collaborate"
          description="Open for career opportunities, strategic procurement operations, supply chain consulting, and research partnerships."
        >
          <div className="mt-3.5 inline-flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>{personalInfo.location}</span>
          </div>
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map(({ icon: Icon, ...contact }, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-white p-6 rounded-2xl text-center flex flex-col items-center border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div className="p-3 bg-slate-100 text-primary rounded-xl mb-4 group-hover:scale-105 transition-transform border border-slate-200">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold mb-0.5 text-slate-900">{contact.label}</h3>
              <p className="text-slate-500 text-xs mb-5 break-all">{contact.value}</p>

              <a
                href={contact.action}
                target="_blank"
                rel="noreferrer"
                className={`mt-auto w-full text-xs font-bold py-2 px-3.5 rounded-xl transition-all ${
                  contact.highlight
                    ? "bg-primary hover:bg-primary-dark text-white shadow-xs"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200"
                }`}
              >
                {contact.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
