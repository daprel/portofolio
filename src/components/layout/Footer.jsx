import { Mail, ExternalLink, GraduationCap, MapPin, ArrowUp } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo';
import { navLinks } from '../../data/navigation';
import { personalInfo } from '../../data/profile';
import { useSectionNavigation } from '../../hooks/useSectionNavigation';

const connectLinks = [
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
  { label: 'LinkedIn', href: personalInfo.linkedinUrl, icon: ExternalLink },
  { label: 'Google Scholar', href: personalInfo.scholarUrl, icon: GraduationCap },
];

function FooterHeading({ children }) {
  return (
    <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-soft mb-4">
      {children}
    </h3>
  );
}

export default function Footer() {
  const openLink = useSectionNavigation();

  const handleNavClick = (e, link) => {
    e.preventDefault();
    openLink(link);
  };

  return (
    <footer className="mt-auto bg-primary-dark text-white/70">
      <div className="container mx-auto max-w-6xl px-6 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-5">
          <BrandLogo variant="horizontalOnDark" className="h-14 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {personalInfo.tagline}.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/50">
            <MapPin className="w-3.5 h-3.5 text-accent-soft" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="lg:col-span-3" aria-label="Footer">
          <FooterHeading>Navigate</FooterHeading>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path ?? `#${link.id}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <div className="lg:col-span-4">
          <FooterHeading>Connect</FooterHeading>
          <ul className="space-y-2.5 text-sm">
            {connectLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4 text-accent-soft" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-white/50 break-all">{personalInfo.email}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <span>© {new Date().getFullYear()} {personalInfo.name} · Daprel. All rights reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
