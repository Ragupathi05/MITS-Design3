import { motion } from "framer-motion";
import { GraduationCap, BookOpen, FlaskConical, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: GraduationCap,
    title: "Undergraduate",
    desc: "B.Tech programs in CSE, ECE, EEE, ME, Civil, and more with industry-aligned curricula.",
    color: "bg-royal",
    highlight: "text-royal",
  },
  {
    icon: BookOpen,
    title: "Postgraduate",
    desc: "M.Tech and MBA programs designed for advanced specialization and leadership.",
    color: "bg-navy",
    highlight: "text-navy",
  },
  {
    icon: FlaskConical,
    title: "PhD & Research",
    desc: "Doctoral programs fostering groundbreaking research across multiple disciplines.",
    color: "bg-gold-dark",
    highlight: "text-gold-dark",
  },
  {
    icon: Building2,
    title: "Industry Collaboration",
    desc: "Partnerships with top companies for internships, projects, and skill development.",
    color: "bg-royal",
    highlight: "text-royal",
  },
];

const AcademicsSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Academics</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Programs That <span className="text-royal">Inspire Excellence</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            Discover future-ready academic pathways built with strong fundamentals, practical exposure,
            and industry integration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-surface rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-border overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/80 to-royal/80" />
              <div className={`w-14 h-14 ${prog.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <prog.icon className="w-7 h-7 text-surface" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-royal transition-colors">
                {prog.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{prog.desc}</p>
              <p className={`text-xs font-semibold uppercase tracking-wider ${prog.highlight}`}>
                Learn More
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-gold font-semibold px-7 py-3 rounded-md transition-all text-sm hover:shadow-lg"
          >
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
