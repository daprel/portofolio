import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[60vh] p-5 flex flex-col items-center justify-center text-center"
    >
      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
      >
        Welcome, Guest!
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-secondary max-w-2xl"
      >
        Selamat datang di website portofolio Daprel yang sedang belajar bikin web!
      </motion.p>
    </motion.section>
  );
}
