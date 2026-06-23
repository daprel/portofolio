import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExternalLink, LayoutTemplate, Sparkles } from "lucide-react";

const basePath = import.meta.env.BASE_URL;

const projects = [
  {
    id: "ptpn",
    title: "Supply Chain & Marketing Intern",
    category: "PT Perkebunan Nusantara I",
    images: [
      `${basePath}img/ptpn_intern/ptpn_intern (1).jpg`,
      `${basePath}img/ptpn_intern/ptpn_intern (2).jpg`,
      `${basePath}img/ptpn_intern/ptpn_intern (3).jpg`,
    ],
    className: "md:col-span-2 md:row-span-2 h-[300px] md:h-auto",
  },
  {
    id: "capstone",
    title: "IoT Computer Vision Trash Can & GIS",
    category: "Capstone Design",
    images: [
      `${basePath}img/capstone_design_epr/capstone_design_epr (1).jpg`,
      `${basePath}img/capstone_design_epr/capstone_design_epr (2).jpg`,
      `${basePath}img/capstone_design_epr/capstone_design_epr (3).jpg`,
    ],
    className: "md:col-span-1 md:row-span-1 h-[300px]",
  },
  {
    id: "isilogic",
    title: "Karsa Cipta & Riset Sosial",
    category: "ISILOGIC 2026",
    images: [`${basePath}img/isilogic_2026/isilogic_2026.jpg`],
    className: "md:col-span-1 md:row-span-1 h-[300px]",
  },
  {
    id: "gtx",
    title: "GTX GMF Viscom",
    category: "Company Visit",
    images: [
      `${basePath}img/gtx/gtx_gmf_viscom(1).jpg`,
      `${basePath}img/gtx/gtx_gmf_viscom(2).jpg`,
    ],
    className: "md:col-span-2 md:row-span-1 h-[300px]",
  },
  {
    id: "icoeins",
    title: "Presenter",
    category: "ICOEINS 2026",
    images: [`${basePath}img/icoeins_2026/icoeins_2026_presenter.jpg`],
    className: "md:col-span-1 md:row-span-1 h-[300px]",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const ProjectCard = ({ project }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % project.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      variants={itemVariants}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 ${project.className}`}
    >
      {/* Images Carousel */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <AnimatePresence initial={false}>
          <motion.img
            key={imgIndex}
            src={project.images[imgIndex]}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
          />
        </AnimatePresence>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-block bg-white/95 backdrop-blur-md text-primary font-bold px-3 py-1.5 rounded-lg text-[10px] md:text-xs mb-3 tracking-widest uppercase shadow-lg border border-white/20">
            {project.category}
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
            {project.title}
          </h3>

          {project.images.length > 1 && (
            <div className="flex gap-1.5 mt-4">
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === imgIndex ? "w-6 bg-accent" : "w-2 bg-white/40"}`}
                ></div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-24 px-5 bg-[#f8f9fa]">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight"
          >
            Showcase & Highlights
          </motion.h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            A curated collection of my professional internships, academic
            projects, and competition achievements.
          </p>
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">
            Discover More of My Work
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/daffarial/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-glass-primary"
            >
              <ExternalLink size={20} />
              Connect on LinkedIn
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate("/highlights");
                window.scrollTo(0, 0);
              }}
              className="btn btn-glass-primary"
            >
              <LayoutTemplate size={20} />
              View Full Portfolio
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
