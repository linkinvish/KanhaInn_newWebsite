import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[600px] h-[90vh] overflow-hidden">
      {/* Background Image Grid */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div className="relative overflow-hidden">
          <img
            src="/images/hero-1.jpg"
            alt="Kanha Inn Exterior"
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/images/hero-2.jpg"
            alt="Kanha Inn Reception"
            className="w-full h-full object-cover animate-ken-burns"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/images/hero-3.jpg"
            alt="Kanha Inn Room"
            className="w-full h-full object-cover animate-ken-burns"
            style={{ animationDelay: "4s" }}
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/images/hero-4.jpg"
            alt="Kanha Inn Deluxe Room"
            className="w-full h-full object-cover animate-ken-burns"
            style={{ animationDelay: "6s" }}
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm text-white/90 tracking-widest uppercase mb-4"
          >
            Lucknow &bull; Sultanpur Road
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Premium comfort,{" "}
            <span className="text-amber-400">budget price</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/85 mb-8 max-w-2xl mx-auto"
          >
            Homely hospitality &bull; Spotless rooms &bull; Peaceful location near
            Gomti Nagar & Hazratganj
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            <a
              href="tel:+918801046444"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4" />
              Call +91 88010 46444
            </a>
            <a
              href="https://wa.me/918801046444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-brand hover:bg-green-brand-hover text-white font-semibold rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm text-white/70"
          >
            Direct booking = best price. No commissions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
