import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, BookOpen, Globe, Shield } from "lucide-react";
import campusBuilding from "@/assets/campus-building.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";

const milestones = [
  { year: "1998", text: "MITS founded with a vision for academic excellence" },
  { year: "2005", text: "Granted autonomous status by UGC" },
  { year: "2010", text: "NBA accreditation for multiple programs" },
  { year: "2015", text: "Deemed to be University status conferred" },
  { year: "2020", text: "NAAC A+ accreditation achieved" },
  { year: "2024", text: "NIRF ranking among top institutions in India" },
];

const leadership = [
  { name: "Dr. R. Sudharsanan", role: "Chancellor", desc: "Visionary leader with 30+ years in higher education administration." },
  { name: "Dr. K. Venkateswara Rao", role: "Vice Chancellor", desc: "Distinguished academician and researcher in Computer Science." },
  { name: "Dr. P. Lakshmi Prasad", role: "Registrar", desc: "Expert in academic governance and institutional development." },
  { name: "Dr. S. Meenakshi", role: "Dean – Academics", desc: "Pioneering educator focused on curriculum innovation." },
];

const values = [
  { icon: Target, title: "Excellence", desc: "Pursuing the highest standards in education and research." },
  { icon: Heart, title: "Integrity", desc: "Upholding ethical principles in all endeavors." },
  { icon: Users, title: "Inclusivity", desc: "Fostering a diverse and welcoming learning environment." },
  { icon: Globe, title: "Innovation", desc: "Driving creative solutions for real-world challenges." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={campusAerial} alt="MITS Campus" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface mb-3">
              About <span className="text-gradient-gold">MITS</span>
            </h1>
            <p className="text-gold-light/80 text-lg max-w-xl">
              A legacy of academic excellence, innovation, and nation-building since 1998.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Our Story</p>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                A Premier Institution in <span className="text-royal">Andhra Pradesh</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Madanapalle Institute of Technology & Science (MITS) was established in 1998 with a commitment 
                to provide quality technical education. Located in the serene town of Madanapalle, Andhra Pradesh, 
                the institution has grown into a comprehensive center of learning offering undergraduate, 
                postgraduate, and doctoral programs across engineering, technology, management, and sciences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With NAAC A+ accreditation, UGC recognition, AICTE approval, and NBA accreditation for multiple 
                programs, MITS stands as one of the top-tier institutions in South India. Our 50+ acre campus 
                houses state-of-the-art laboratories, a central library with 100,000+ volumes, modern hostels, 
                and world-class sports facilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MITS is committed to holistic development — combining rigorous academics with research, 
                innovation, industry partnerships, and extracurricular activities to shape well-rounded 
                professionals and responsible citizens.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={campusBuilding} alt="MITS Academic Block" className="rounded-xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface rounded-xl p-8 border-t-4 border-royal shadow-md"
            >
              <div className="w-14 h-14 bg-royal rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-surface" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized institution of academic excellence that produces competent professionals, 
                innovative researchers, and ethical leaders who contribute to the advancement of society and technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-surface rounded-xl p-8 border-t-4 border-gold shadow-md"
            >
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To impart quality education through innovative teaching methodologies, foster cutting-edge research, 
                build strong industry partnerships, and develop socially responsible professionals equipped for 
                global challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">What We Stand For</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Core <span className="text-royal">Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Our Journey</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Key <span className="text-royal">Milestones</span></h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:text-${i % 2 === 0 ? "right" : "left"}`}
              >
                <div className="hidden md:block flex-1">
                  {i % 2 === 0 && (
                    <div className="md:pr-8">
                      <p className="text-sm text-muted-foreground">{m.text}</p>
                    </div>
                  )}
                  {i % 2 !== 0 && (
                    <div className="md:pl-8">
                      <p className="text-sm text-muted-foreground">{m.text}</p>
                    </div>
                  )}
                </div>
                <div className="relative z-10 w-16 h-16 bg-navy rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-gold font-heading font-bold text-xs">{m.year}</span>
                </div>
                <div className="flex-1 md:hidden">
                  <p className="text-sm text-muted-foreground">{m.text}</p>
                </div>
                <div className="hidden md:block flex-1">
                  {i % 2 !== 0 && <div />}
                  {i % 2 === 0 && <div />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Leadership</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Our <span className="text-royal">Leadership Team</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-all"
              >
                <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-royal" />
                </div>
                <h4 className="font-heading font-semibold text-foreground">{person.name}</h4>
                <p className="text-sm text-gold-dark font-medium mb-2">{person.role}</p>
                <p className="text-xs text-muted-foreground">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm tracking-wider uppercase mb-2">Recognition</p>
          <h2 className="text-3xl font-heading font-bold text-surface mb-10">Accreditations & <span className="text-gradient-gold">Approvals</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, label: "NAAC A+", sub: "National Assessment" },
              { icon: Shield, label: "UGC", sub: "University Grants Commission" },
              { icon: BookOpen, label: "AICTE", sub: "All India Council" },
              { icon: Award, label: "NBA", sub: "National Board" },
              { icon: Globe, label: "NIRF", sub: "National Ranking" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-light/50 rounded-xl p-5 border border-gold/10"
              >
                <item.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-surface font-heading font-semibold text-sm">{item.label}</p>
                <p className="text-gold-light/50 text-[10px]">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
