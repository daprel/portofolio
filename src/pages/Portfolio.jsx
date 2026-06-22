import { motion } from 'framer-motion';

export default function Portfolio() {
  const basePath = import.meta.env.BASE_URL;

  const projects = [
    {
      title: "Production Intern",
      img: `${basePath}img/foto_web (3).png`
    },
    {
      title: "Data Analytics Project",
      img: `${basePath}img/foto_web (1).png`
    },
    {
      title: "Supply Chain Project",
      img: `${basePath}img/foto_web (2).png`
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[80vh] p-8 max-w-6xl mx-auto"
    >
      <header className="mb-12">
        <h2 className="text-4xl font-extrabold text-center text-primary">Portfolio</h2>
        <div className="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full"></div>
      </header>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer border border-black/5"
          >
            <div className="h-[250px] overflow-hidden p-6 bg-primary/5 flex items-center justify-center">
              <img 
                src={project.img} 
                alt={project.title}
                className="max-h-full rounded-xl object-contain group-hover:scale-105 transition-transform duration-500 shadow-md"
              />
            </div>
            <div className="p-6 bg-white text-center">
              <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6 text-primary">Explore More</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/daffarial/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-[#0a66c2] text-white font-bold rounded-xl shadow-lg hover:bg-[#084e96] transition-colors"
          >
            LinkedIn
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.canva.com/design/DAGl3xuNePo/7iO0Ru9roDNSci_KKuZccQ/edit"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-accent transition-colors"
          >
            Other Portfolio
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
