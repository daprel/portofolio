import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Fullscreen image preview. Renders nothing while `src` is null; click anywhere to close.
export default function ImageLightbox({ src, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 cursor-zoom-out"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-5xl max-h-[90vh]"
          >
            <img
              src={src}
              alt="Enlarged Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 bg-black/60 rounded-full text-white hover:bg-black transition cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
