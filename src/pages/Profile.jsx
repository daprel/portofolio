import { motion } from 'framer-motion';

export default function Profile() {
  const basePath = import.meta.env.BASE_URL;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="profile" className="py-20 px-5 bg-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-wider"
          >
            Personal Profile
          </motion.h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* SUMMARY SECTION */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="basis-1/3 flex justify-center items-center"
          >
            <div className="p-2 bg-white/10 rounded-full">
              <img
                src={`${basePath}img/foto_profile.jpeg`}
                alt="foto profil daffa"
                className="max-h-[300px] w-[300px] rounded-full object-cover shadow-xl border-4 border-white/20"
              />
            </div>
          </motion.div>

          <div className="basis-2/3 p-4">
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-white drop-shadow-md"
            >
              Muhamad Daffa Rial
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-white/90 mb-6 text-justify"
            >
              Final-year Industrial Engineering student at Telkom University with a strong interest in system and software analysis. Experienced in requirement elicitation, business process analysis, and developing Software Requirements Specifications (SRS) based on IEEE 830-1998 standards. Skilled in system modeling using UML and BPMN, with a foundational understanding of databases and web development. Supported by analytical experience in information systems and supply chain projects, I am able to translate business needs into clear, structured, and actionable technical specifications. Highly motivated to learn, adaptable, and comfortable working in cross-functional and multidisciplinary environments.
            </motion.p>
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent bg-white inline-block px-4 py-2 rounded-lg shadow-md">Working Experience</h3>
          <div className="space-y-6">

            {/* Experience 1 */}
            <motion.div variants={item} className="bg-white/10 p-6 rounded-2xl border border-white/20 flex flex-col md:flex-row gap-6">
              <div className="md:w-32 flex-shrink-0 flex items-start justify-center">
                {/* DUMMY LOGO PLACEHOLDER */}
                <img
                  src={`${basePath}img/logo_ptpn.png`}
                  alt="Logo PTPN"
                  className="w-24 h-24 object-contain bg-white rounded-xl p-2 shadow-md"
                />

              </div>
              <div>
                <h4 className="text-xl font-bold">Supply Chain Intern</h4>
                <p className="text-accent font-semibold mb-2 bg-white inline-block px-2 py-0.5 rounded text-sm">PT Perkebunan Nusantara I Regional 2, Bandung (Jun 2025 - Aug 2025)</p>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>Completed four feasibility analysis projects for investments in facilities, equipment, and other resources to support production and supply chain processes.</li>
                  <li>Conducted supply chain analysis from a safety stock perspective for over 50 product SKUs. Successfully identified the root cause of overstocking of slow-moving SKUs.</li>
                  <li>General knowledge and understanding of upstream and downstream FMCG industry especially in tea commodities.</li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div variants={item} className="bg-white/10 p-6 rounded-2xl border border-white/20 flex flex-col md:flex-row gap-6">
              <div className="md:w-32 flex-shrink-0 flex items-start justify-center">
                <img
                  src={`${basePath}img/logo_ptpn.png`}
                  alt="Logo PTPN"
                  className="w-24 h-24 object-contain bg-white rounded-xl p-2 shadow-md"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">Marketing Crew Freelancer</h4>
                <p className="text-accent font-semibold mb-2 bg-white inline-block px-2 py-0.5 rounded text-sm">PT Perkebunan Nusantara I Regional 2, Jakarta (Jun 2025 - Aug 2025)</p>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>Participated in four tea commodity marketing events as a product marketing persuasion crew and server.</li>
                  <li>Become a talent for shooting product marketing content videos.</li>
                  <li>In-depth knowledge of tea products.</li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 3 */}
            <motion.div variants={item} className="bg-white/10 p-6 rounded-2xl border border-white/20 flex flex-col md:flex-row gap-6">
              <div className="md:w-32 flex-shrink-0 flex items-start justify-center">
                <img
                  src={`${basePath}img/logo_telu.png`}
                  alt="Logo Tel-U"
                  className="w-24 h-24 object-contain bg-white rounded-xl p-2 shadow-md"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">Laboratory Assistant</h4>
                <p className="text-accent font-semibold mb-2 bg-white inline-block px-2 py-0.5 rounded text-sm">Laboratorium Gambar Teknik Telkom University, Bandung (Aug 2023 - Jul 2025)</p>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>Conducting teaching and assessment for the use of CAD software to more than 500 engineering students spread across more than 3 study programs.</li>
                  <li>In-depth knowledge of engineering drawings and CAD software.</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* EDUCATION & LEADERSHIP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
            <h3 className="text-2xl font-bold mb-6 text-accent bg-white inline-block px-4 py-2 rounded-lg shadow-md">Education</h3>
            <motion.div variants={item} className="bg-white/10 p-6 rounded-2xl border border-white/20 flex gap-4">
              <img
                src={`${basePath}img/logo_telu.png`}
                alt="Logo Tel-U"
                className="w-16 h-16 object-contain bg-white rounded-lg p-1 shadow-md"
              />
              <div>
                <h4 className="text-xl font-bold">Telkom University, Bandung</h4>
                <p className="text-white/90 italic mb-2">Bachelor of Engineering, Industrial Engineering (Aug 2022 - Present)</p>
                <p className="font-semibold text-white">Current GPA 3.88 of 4.00</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
            <h3 className="text-2xl font-bold mb-6 text-accent bg-white inline-block px-4 py-2 rounded-lg shadow-md">Leadership Activities</h3>

            <motion.div variants={item} className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-4">
              <h4 className="text-lg font-bold">Head of Computer and Maintenance</h4>
              <p className="text-sm text-white/80 italic mb-2">Laboratorium Gambar Teknik Telkom University (Oct 2024 - Jul 2025)</p>
              <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
                <li>Coordinating the team in maintaining computer assets, installing software, troubleshooting IT support.</li>
                <li>Monitor team performance, track progress toward timelines.</li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <h4 className="text-lg font-bold">Team Lead</h4>
              <p className="text-sm text-white/80 italic mb-2">Waste Warriors Team for ISILOGIC 2024 (Jan - Mar 2025)</p>
              <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
                <li>Responsible for coordinating the team and assigning tasks.</li>
                <li>Ensure the team stays on target within timeline and budget.</li>
              </ul>
            </motion.div>

          </motion.div>
        </div>

        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
            <h3 className="text-2xl font-bold mb-6 text-accent bg-white inline-block px-4 py-2 rounded-lg shadow-md">Achievements</h3>
            <ul className="space-y-4">
              <motion.li variants={item} className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="font-bold">1st Best Product in Capstone Design</span> - School of Industrial Engineering Tel-U (Jan 2026)<br />
                <span className="text-sm text-white/80">Developed IoT trash can and GIS dashboard with computer vision to classify plastic bottle trash for EPR reporting.</span>
              </motion.li>
              <motion.li variants={item} className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="font-bold">2nd place in Karsa Cipta Category</span> - ISILOGIC 2024 (Mar 2025)<br />
                <span className="text-sm text-white/80">Developed a trash bin that has an IoT system to monitor capacity based on the type of trash.</span>
              </motion.li>
              <motion.li variants={item} className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="font-bold">3rd place in Riset Sosial Humaniora Category</span> - ISILOGIC 2024 (Mar 2025)<br />
                <span className="text-sm text-white/80">Conducting research on student sentiment towards waste management performance at Telkom University.</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
            <h3 className="text-2xl font-bold mb-6 text-accent bg-white inline-block px-4 py-2 rounded-lg shadow-md">Certifications</h3>
            <ul className="space-y-4">
              <motion.li variants={item} className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="font-bold">SAP01 (SAP Fundamental)</span><br />
                <span className="text-sm text-white/80">Edugate Indonesia</span>
              </motion.li>
              <motion.li variants={item} className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="font-bold">SAP SCM500 (Business Processes in Procurement)</span><br />
                <span className="text-sm text-white/80">Edugate Indonesia</span>
              </motion.li>
              <motion.li variants={item} className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="font-bold">ECCT® (English Communicative Competence Test)</span><br />
                <span className="text-sm text-white/80">Score 4/4 (Feb 2025)</span>
              </motion.li>
              <motion.li variants={item} className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="font-bold">English Proficiency Test (EPrT®)</span><br />
                <span className="text-sm text-white/80">Score 537/677 equivalent to B1 CEFR (Apr 2026)</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* SKILLS */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
          <h3 className="text-2xl font-bold mb-6 text-accent bg-white inline-block px-4 py-2 rounded-lg shadow-md">Languages & Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Bahasa Indonesia (Native), English (Professional Working Proficiency).",
              "Ms. Excel (Advance excel for supply chain planning and analysis using solver's).",
              "Work App Ecosystem (Ms. Teams, Google Workspace, Notion, etc).",
              "Data Analysis (Advance Excel, Python for Data Analysis).",
              "Web-Development Basic (SRS formulation, UML, BPMN, Laravel 12).",
              "ERP technology, logistics and supply chain, manufacturing industry."
            ].map((skill, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="min-w-[24px] h-6 rounded-full bg-accent flex items-center justify-center font-bold text-sm mt-0.5">
                  {i + 1}
                </div>
                <span className="text-sm text-white/90 leading-tight">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
