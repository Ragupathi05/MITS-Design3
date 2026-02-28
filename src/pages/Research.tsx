import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Microscope, FileText, Building2, Lightbulb, Users, BookOpen, Award, Globe, ArrowRight } from "lucide-react";

const researchAreas = [
  { title: "Artificial Intelligence & Machine Learning", desc: "Deep learning, NLP, computer vision, and intelligent systems research with industry collaboration.", publications: 85, projects: 12 },
  { title: "Internet of Things & Embedded Systems", desc: "Smart devices, sensor networks, edge computing, and industrial IoT applications.", publications: 62, projects: 8 },
  { title: "Renewable Energy Systems", desc: "Solar energy, wind power optimization, battery storage, and sustainable energy solutions.", publications: 45, projects: 6 },
  { title: "Advanced Materials & Nanotechnology", desc: "Nanomaterials synthesis, characterization, and application in electronics and biomedicine.", publications: 38, projects: 5 },
  { title: "Data Science & Big Data Analytics", desc: "Large-scale data processing, predictive analytics, and data-driven decision systems.", publications: 55, projects: 9 },
  { title: "Structural Engineering & Smart Infrastructure", desc: "Earthquake-resistant design, green buildings, and infrastructure monitoring systems.", publications: 30, projects: 4 },
];

const stats = [
  { icon: FileText, value: "500+", label: "Research Publications" },
  { icon: Microscope, value: "120+", label: "Ongoing Projects" },
  { icon: Building2, value: "15+", label: "Research Labs" },
  { icon: Lightbulb, value: "25+", label: "Patents Filed" },
  { icon: Award, value: "₹12 Cr+", label: "Research Funding" },
  { icon: Globe, value: "30+", label: "International Collaborations" },
];

const labs = [
  "Advanced Computing Lab", "VLSI Design Center", "IoT Innovation Lab",
  "Renewable Energy Research Center", "Materials Testing Lab", "Robotics & Automation Lab",
  "AI & Data Science Lab", "Communication Systems Lab", "Environmental Engineering Lab",
];

const Research = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Microscope className="w-4 h-4" /> Pioneering Research
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface mb-4">
              Research & <span className="text-gradient-gold">Innovation</span>
            </h1>
            <p className="text-gold-light/70 text-lg">
              Advancing knowledge, solving real-world problems, and fostering innovation 
              through interdisciplinary research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center bg-surface rounded-xl p-5 shadow-sm"
              >
                <stat.icon className="w-7 h-7 text-gold mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-navy">{stat.value}</div>
                <p className="text-[11px] text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Focus Areas</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Research <span className="text-royal">Domains</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-l-4 border-royal"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{area.desc}</p>
                <div className="flex gap-4 text-xs">
                  <span className="bg-royal/10 text-royal px-3 py-1 rounded-full font-medium">{area.publications} Publications</span>
                  <span className="bg-gold/10 text-gold-dark px-3 py-1 rounded-full font-medium">{area.projects} Projects</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Infrastructure</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Research <span className="text-royal">Laboratories</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {labs.map((lab, i) => (
              <motion.div
                key={lab}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface rounded-lg p-5 shadow-sm flex items-center gap-3 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm font-medium text-foreground">{lab}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration & Funding */}
      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-surface mb-4">Funded by <span className="text-gradient-gold">Leading Bodies</span></h2>
          <p className="text-gold-light/70 mb-10 max-w-2xl mx-auto">
            Our research is supported by grants from DST, CSIR, AICTE, UGC, DRDO, and various industry partners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["DST", "CSIR", "AICTE", "UGC", "DRDO", "DBT", "SERB"].map((body) => (
              <div key={body} className="px-6 py-3 bg-navy-light/50 rounded-lg text-gold font-semibold text-sm border border-gold/10">
                {body}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
