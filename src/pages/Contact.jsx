import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const basePath = import.meta.env.BASE_URL;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Nama, email, dan pesan wajib diisi.');
      return;
    }
    setOutput(`Halo! ${formData.name} dengan email ${formData.email}\n\nPesan Anda:\n${formData.message}\n\n(pesan kamu baru nyampe sini karena webnya belum jadi <3)`);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] p-8 md:p-12 bg-secondary text-white rounded-3xl shadow-2xl my-8 max-w-6xl mx-auto"
    >
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-wider">Message Me!</h2>
        <div className="w-24 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-inner"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block mb-2 font-bold text-white/90">Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/20 focus:border-white focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-white/90">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/20 focus:border-white focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-white/90">Message</label>
              <textarea 
                rows="4"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/20 focus:border-white focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="mt-2 p-3 bg-primary hover:bg-accent text-white font-bold rounded-xl shadow-lg transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 p-6 rounded-2xl border border-white/20 flex flex-col"
        >
          <label className="block mb-2 font-bold text-white/90">Output</label>
          <textarea 
            readOnly
            value={output}
            placeholder="This is the output of the message <3"
            className="w-full h-full p-4 rounded-xl bg-black/20 border border-white/10 text-white/80 resize-none outline-none font-mono text-sm"
          ></textarea>
        </motion.div>

        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center p-6"
        >
          <img 
            src={`${basePath}img/logo_daprel_transparent.png`} 
            alt="foto logo daprel"
            className="max-h-[250px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
