import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gold rounded-full" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-surface mb-4">
            Start Your Journey at{" "}
            <span className="text-gradient-gold">MITS</span>
          </h2>
          <p className="text-gold-light/70 max-w-2xl mx-auto mb-10 text-lg">
            Take the first step towards a transformative education. Join a community of 
            innovators, researchers, and future leaders.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-10 py-4 rounded-md transition-all hover:shadow-gold text-lg"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
