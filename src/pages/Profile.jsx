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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] p-8 md:p-12 bg-primary text-white rounded-3xl shadow-2xl my-8 max-w-6xl mx-auto"
    >
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-center tracking-wider">Personal Profile</h2>
        <div className="w-24 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
      </header>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
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
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-4 text-white drop-shadow-md"
          >
            Muhamad Daffa Rial
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-white/90 mb-6"
          >
            I am an Industrial Engineering student at Telkom University with hands-on experience in production support and data-driven decision making.
          </motion.p>
          
          <div className="font-bold text-xl mb-4 text-white/80">Skill Set:</div>
          <motion.ol 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {[
              "Microsoft 365 Ecosystem",
              "Google Workspace Ecosystem",
              "Python (NumPy, Pandas, scikit-learn)",
              "CAD (Inventor, AutoCAD)",
              "Perencanaan Produksi (MRP dengan chase atau level strategy)",
              "Model Optimasi Rantai Pasok (Hard Operational Research)"
            ].map((skill, i) => (
              <motion.li 
                key={i} 
                variants={item}
                className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <span>{skill}</span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </motion.section>
  );
}
