import { motion } from "framer-motion";
import { Microscope, FileText, Building2, Lightbulb } from "lucide-react";

const items = [
  { icon: Microscope, value: "120+", label: "Ongoing Projects", desc: "Active research projects across departments" },
  { icon: FileText, value: "500+", label: "Publications", desc: "Papers in national & international journals" },
  { icon: Building2, value: "15+", label: "Research Labs", desc: "State-of-the-art research laboratories" },
  { icon: Lightbulb, value: "5", label: "Innovation Centers", desc: "Dedicated centers for innovation & incubation" },
];

const ResearchSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Research & Innovation</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Driving <span className="text-royal">Innovation Forward</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-royal transition-colors">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <div className="text-2xl font-heading font-bold text-navy mb-1">{item.value}</div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
