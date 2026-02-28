import { motion } from "framer-motion";
import { GraduationCap, BookOpen, FlaskConical, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: GraduationCap,
    title: "Undergraduate",
    desc: "B.Tech programs in CSE, ECE, EEE, ME, Civil, and more with industry-aligned curricula.",
    color: "bg-royal",
  },
  {
    icon: BookOpen,
    title: "Postgraduate",
    desc: "M.Tech and MBA programs designed for advanced specialization and leadership.",
    color: "bg-navy",
  },
  {
    icon: FlaskConical,
    title: "PhD & Research",
    desc: "Doctoral programs fostering groundbreaking research across multiple disciplines.",
    color: "bg-gold-dark",
  },
  {
    icon: Building2,
    title: "Industry Collaboration",
    desc: "Partnerships with top companies for internships, projects, and skill development.",
    color: "bg-royal",
  },
];

const AcademicsSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Academics</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Programs That <span className="text-royal">Inspire Excellence</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className={`w-14 h-14 ${prog.color} rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <prog.icon className="w-7 h-7 text-surface" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{prog.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{prog.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/academics"
            className="inline-flex bg-navy hover:bg-navy-light text-gold font-semibold px-6 py-3 rounded-md transition-all text-sm"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
