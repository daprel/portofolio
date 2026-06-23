import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const activities = [
  {
    id: "isilogic",
    title: "ISILOGIC 2026",
    category: "IoT & Hardware",
    role: "Team Lead",
    description:
      "Led the development of an IoT Smart Trash Can system. Managed the hardware-software integration, coordinated team tasks, and ensured the reliable transmission of sensor data to the cloud for real-time monitoring.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    images: [
      "https://picsum.photos/seed/isilogic1/800/600",
      "https://picsum.photos/seed/isilogic2/800/600",
      "https://picsum.photos/seed/isilogic3/800/600",
    ],
  },
  {
    id: "riksa",
    title: "Riksa Development",
    category: "GIS & Web App",
    role: "Junior Dev",
    description:
      "Worked on a Smart GIS waste monitoring platform. Focused on frontend data visualization, integrating Mapbox with spatial data services, and building interactive dashboards for waste management analysis.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    images: [
      "https://picsum.photos/seed/riksa1/800/600",
      "https://picsum.photos/seed/riksa2/800/600",
      "https://picsum.photos/seed/riksa3/800/600",
    ],
  },
  {
    id: "maspintar",
    title: "Maspintar Development",
    category: "Computer Vision & IoT",
    role: "Team Lead",
    description:
      "Spearheaded a Smart IoT and Computer Vision Trash Can project. Implemented object detection models to automatically categorize waste and developed the embedded systems to control the sorting mechanisms.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    images: [
      "https://picsum.photos/seed/maspintar1/800/600",
      "https://picsum.photos/seed/maspintar2/800/600",
      "https://picsum.photos/seed/maspintar3/800/600",
    ],
  },
];

const publications = [
  {
    id: 1,
    title:
      "Development of SMEs promotion media through SECI-based digital catalog in Bandung Regency",
    authors:
      "F Achmad, HD Anggana, AA Rumanti, MD Rial, AP Suryaneda, MA Sena, R Aditya",
    journal: "Jurnal Inkofar 9 (1)",
    index: "SINTA 3",
    year: 2025,
  },
  {
    id: 2,
    title:
      "Pengenalan dan Pelatihan Digital Marketing Pada Usaha Keripik Tempe Pesantren Arafah, Cililin, Kab. Bandung Barat",
    authors:
      "S Aryani, E Chumaidiyah, B Proptono, O Yovanda, RN Kamal, MD Rial",
    journal:
      "The Proceeding Of Community Service And Engagement (Cosecant) Seminar 4 (1)",
    index: "Unindexed",
    year: 2024,
  },
  {
    id: 3,
    title:
      "Eksplorasi Persepsi Pengguna terhadap Tempat Sampah di Institusi Pendidikan Tinggi Menggunakan Sentiment Analysis dan Text Mining",
    authors: "AP Suryaneda, MD Rial, MA Sena, F Achmad",
    journal: "Technologia: Jurnal Ilmiah 16 (2), 329-336",
    index: "SINTA 3",
    year: 2025,
  },
  {
    id: 4,
    title:
      "Peningkatan Kapabilitas UMKM Mr. Mangkok Ricebowl melalui Pelatihan dan Pedampingan Sertifikasi Halal Berbasis Dokumen SJPH",
    authors: "E Chumaidiyah, S Aryani, L Abdurrahman, MF Zharfan, MD Rial",
    journal:
      "The Proceeding of Community Service and Engagement (COSECANT) Seminar 5 (2)",
    index: "Unindexed",
    year: 2025,
  },
];

const hkis = [
  {
    id: 1,
    title: "Sistem Asesmen Mandiri Kesiapan Adopsi E-Business UMKM",
    number: "001186169",
    date: "7 April 2026",
    type: "Program Komputer",
  },
  {
    id: 2,
    title: "SMART BOTTLE SORTER Alat Pemisah Sampah Botol Plastik Otomatis",
    number: "001230732",
    date: "13 Mei 2026",
    type: "Program Komputer",
  },
  {
    id: 3,
    title: "MASPINTAR - Manajemen Sampah Kemasan Plastik Terintegrasi",
    number: "001230725",
    date: "13 Mei 2026",
    type: "Program Komputer",
  },
];

export default function ProjectHighlights() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-primary text-white min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Project Highlights
          </motion.h1>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
            A deeper dive into my key roles and contributions across various
            technical projects.
          </p>
        </header>

        <div className="flex flex-col gap-24">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="card-glass p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              {/* Video Section (Left) */}
              <div className="lg:col-span-7 xl:col-span-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black group relative h-full flex items-center">
                <video
                  src={activity.videoUrl}
                  controls
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto aspect-video object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                ></video>
                <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Video Preview
                </div>
              </div>

              {/* Photos Column Section (Middle) */}
              <div className="lg:col-span-2 xl:col-span-1 flex flex-row lg:flex-col gap-4 justify-center">
                {activity.images.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-24 h-24 lg:w-full lg:h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-md cursor-pointer group"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${activity.title} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white w-6 h-6" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Info Section (Right) */}
              <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-start">
                <div className="inline-block bg-white/20 text-white font-bold px-4 py-1.5 rounded-lg text-sm mb-4 w-max backdrop-blur-sm">
                  {activity.category}
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">
                  {activity.title}
                </h2>

                <div className="inline-block mb-6 text-white font-bold bg-white/10 px-4 py-2 rounded-xl shadow-sm border border-white/20 w-max backdrop-blur-sm">
                  {activity.role}
                </div>

                <p className="text-white/80 text-base leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications Section */}
        <div className="mt-32">
          <header className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Scientific Publications
            </h2>
            <div className="w-16 h-1.5 bg-accent rounded-full"></div>
          </header>

          <div className="flex flex-col gap-6">
            {publications.map((pub) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="card-glass p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-1">{pub.authors}</p>
                    <p className="text-white/60 text-sm italic">
                      {pub.journal}
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 min-w-[100px]">
                    <div className="text-white font-bold text-lg">
                      {pub.year}
                    </div>
                    {pub.index && (
                      <div
                        className={`font-semibold px-3 py-1 rounded-full text-xs ${
                          pub.index.includes("SINTA")
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-white/10 text-white/60 border border-white/20"
                        }`}
                      >
                        {pub.index}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* HKI Section */}
        <div className="mt-20">
          <header className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Hak Kekayaan Intelektual (HKI)
            </h2>
            <div className="w-16 h-1.5 bg-accent rounded-full"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hkis.map((hki) => (
              <motion.div
                key={hki.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="card-glass p-6 flex flex-col h-full"
              >
                <div className="mb-4">
                  <span className="inline-block bg-white/20 text-white font-semibold px-3 py-1 rounded-full text-xs mb-3 backdrop-blur-sm">
                    {hki.type}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {hki.title}
                  </h3>
                </div>
                <div className="mt-auto pt-4 border-t border-white/20">
                  <p className="text-white/70 text-sm mb-1">Nomor: <span className="font-semibold text-white">{hki.number}</span></p>
                  <p className="text-white/70 text-sm">Tanggal: <span className="font-semibold text-white">{hki.date}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
