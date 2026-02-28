import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <img
        src={heroCampus}
        alt="MITS Campus aerial view"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block bg-gold/90 text-accent-foreground px-4 py-1.5 rounded-sm text-sm font-semibold tracking-wide mb-6"
          >
            NAAC A+ Accredited Institution
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-surface leading-tight mb-4">
            Welcome to MITS –{" "}
            <span className="text-gradient-gold">Excellence</span> in Education
            and Innovation
          </h1>
          <p className="text-lg md:text-xl text-gold-light/80 mb-8 max-w-2xl leading-relaxed font-light">
            Empowering minds through world-class education, cutting-edge research, 
            and industry-ready programs since establishment. UGC recognized, AICTE approved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/admissions"
              className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-3.5 rounded-md transition-all hover:shadow-gold text-base"
            >
              Apply Now
            </Link>
            <Link
              to="/academics"
              className="border-2 border-gold/50 text-gold hover:bg-gold/10 font-semibold px-8 py-3.5 rounded-md transition-all text-base"
            >
              Explore Programs
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
