import { motion } from 'framer-motion';
import { Mail, Phone, Link, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      value: "daffarial18@gmail.com",
      action: "mailto:daffarial18@gmail.com",
      buttonText: "Send Email"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      label: "WhatsApp",
      value: "+62 838 2511 0547",
      action: "https://wa.me/6283825110547",
      buttonText: "Message WA"
    },
    {
      icon: <Link className="w-8 h-8" />,
      label: "LinkedIn",
      value: "linkedin.com/in/daffarial",
      action: "https://linkedin.com/in/daffarial/",
      buttonText: "Visit Profile"
    }
  ];

  return (
    <section id="contact" className="py-20 px-5 bg-primary text-white">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-wider"
          >
            Let's Connect!
          </motion.h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-glass p-8 rounded-3xl text-center flex flex-col items-center group"
            >
              <div className="p-4 bg-accent rounded-full mb-6 group-hover:scale-110 transition-transform shadow-lg">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white/90">{contact.label}</h3>
              <p className="text-white/70 mb-8">{contact.value}</p>
              
              <a 
                href={contact.action}
                target="_blank"
                rel="noreferrer"
                className="mt-auto w-full btn btn-glass-white"
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
