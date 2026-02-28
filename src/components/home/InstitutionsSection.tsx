import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Globe, Briefcase, BookOpen } from "lucide-react";

const institutions = [
  {
    name: "MITS Deemed to be University",
    features: [
      { icon: FlaskIcon, text: "Research-driven programs" },
      { icon: Globe, text: "Global collaborations" },
      { icon: GraduationCap, text: "Doctoral & postdoctoral programs" },
    ],
    desc: "A center of excellence for advanced research, international partnerships, and holistic academic development recognized by UGC.",
    accent: "border-royal",
    btnClass: "bg-royal hover:bg-royal-light text-surface",
  },
  {
    name: "MITS Autonomous Institute",
    features: [
      { icon: Briefcase, text: "Industry-oriented curriculum" },
      { icon: BookOpen, text: "Flexible academic framework" },
      { icon: GraduationCap, text: "Strong placement record" },
    ],
    desc: "An AICTE approved autonomous institution offering cutting-edge engineering and management programs with exceptional placement support.",
    accent: "border-gold",
    btnClass: "bg-gold hover:bg-gold-dark text-accent-foreground",
  },
];

function FlaskIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>;
}

const InstitutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Our Institutions</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Two Wings, <span className="text-royal">One Vision</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            MITS operates through two distinguished institutional wings, each maintaining its unique identity while sharing a common commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {institutions.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
              className={`bg-surface rounded-xl p-8 border-t-4 ${inst.accent} shadow-md transition-all`}
            >
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{inst.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{inst.desc}</p>
              <div className="space-y-3 mb-8">
                {inst.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <f.icon className="w-5 h-5 text-royal shrink-0" />
                    <span className="text-sm text-foreground">{f.text}</span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className={`inline-flex items-center gap-2 ${inst.btnClass} font-semibold px-6 py-2.5 rounded-md transition-all text-sm`}
              >
                Visit Portal <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;
