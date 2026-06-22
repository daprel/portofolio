import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-5 pt-20">
      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold text-primary mb-6"
      >
        Welcome to My Space
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed"
      >
        Selamat datang di website portofolio Daprel. Telusuri profil, pengalaman, dan karya-karya saya di bawah ini!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 animate-bounce text-primary"
      >
        <a href="#profile" className="flex flex-col items-center gap-2">
          <span className="font-semibold uppercase tracking-widest text-sm">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </motion.div>
    </section>
  );
}
