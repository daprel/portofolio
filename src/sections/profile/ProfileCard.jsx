import { ExternalLink } from "lucide-react";
import SectionLink from "../../components/ui/SectionLink";
import { personalInfo } from "../../data/profile";
import { asset } from "../../utils/asset";

export default function ProfileCard() {
  return (
    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl mb-10 flex flex-col md:flex-row items-center gap-7 border border-slate-200 shadow-2xs">
      <div className="flex-shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md p-0.5 bg-slate-100">
          <img
            src={asset('images/profile/profile-photo.jpg')}
            alt={personalInfo.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <div className="inline-block bg-white text-primary text-xs font-bold px-3 py-1 rounded-md mb-2 border border-slate-200 shadow-2xs">
          GPA {personalInfo.gpa} • B.Eng. in Industrial Engineering
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1.5">
          {personalInfo.name}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 max-w-2xl text-justify md:text-left">
          Industrial Engineering graduate from Telkom University with
          practical Procure-to-Pay (P2P) experience in Central Business
          Services (CBS) at Sinarmas Agribusiness & Food, including
          strategic sourcing in Coupa and Quotation Comparison Form (QCF)
          preparation for asset disposal. Officially SAP-certified in
          Procurement (SCM500) and Sales Order Management (SCM600), backed
          by experience developing Excel and Python models for supply chain
          optimization.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="btn bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs py-2 px-4 font-semibold shadow-2xs"
          >
            <ExternalLink className="w-3.5 h-3.5 text-primary" />
            <span>View LinkedIn Profile</span>
          </a>

          <SectionLink
            to="contact"
            className="btn bg-primary hover:bg-primary-dark text-white text-xs py-2 px-5 font-bold shadow-2xs"
          >
            <span>Get In Touch</span>
          </SectionLink>
        </div>
      </div>
    </div>
  );
}
