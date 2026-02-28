import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, FlaskConical, Building2, Clock, Users, Award, ArrowRight } from "lucide-react";

const btechPrograms = [
  { name: "Computer Science & Engineering", seats: 180, duration: "4 Years" },
  { name: "Electronics & Communication Engineering", seats: 120, duration: "4 Years" },
  { name: "Electrical & Electronics Engineering", seats: 60, duration: "4 Years" },
  { name: "Mechanical Engineering", seats: 120, duration: "4 Years" },
  { name: "Civil Engineering", seats: 60, duration: "4 Years" },
  { name: "Information Technology", seats: 60, duration: "4 Years" },
  { name: "Artificial Intelligence & ML", seats: 60, duration: "4 Years" },
  { name: "Data Science", seats: 60, duration: "4 Years" },
];

const mtechPrograms = [
  { name: "Computer Science & Engineering", seats: 24, duration: "2 Years" },
  { name: "VLSI & Embedded Systems", seats: 18, duration: "2 Years" },
  { name: "Structural Engineering", seats: 18, duration: "2 Years" },
  { name: "Power Electronics", seats: 18, duration: "2 Years" },
  { name: "Thermal Engineering", seats: 18, duration: "2 Years" },
];

const otherPrograms = [
  { name: "MBA", seats: 60, duration: "2 Years", type: "Management" },
  { name: "MCA", seats: 60, duration: "2 Years", type: "Computer Applications" },
  { name: "PhD Programs", seats: 50, duration: "3-5 Years", type: "Research" },
];

const features = [
  { icon: BookOpen, title: "Outcome-Based Education", desc: "Curriculum aligned with NBA and international standards for measurable learning outcomes." },
  { icon: Building2, title: "Industry Partnerships", desc: "Collaborations with TCS, Infosys, Microsoft, and 50+ companies for real-world exposure." },
  { icon: FlaskConical, title: "Research Integration", desc: "Undergraduate and postgraduate students actively participate in funded research projects." },
  { icon: Award, title: "Accredited Programs", desc: "Multiple programs accredited by NBA ensuring quality and global recognition." },
];

const Academics = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" /> 50+ Programs Offered
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface mb-4">
              Academic <span className="text-gradient-gold">Programs</span>
            </h1>
            <p className="text-gold-light/70 text-lg">
              Comprehensive programs designed to nurture intellectual curiosity, 
              technical competence, and professional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Our Approach</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Academic <span className="text-royal">Excellence</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B.Tech Programs */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-royal rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-surface" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground">B.Tech Programs</h2>
              <p className="text-sm text-muted-foreground">4-Year Undergraduate Engineering Programs</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {btechPrograms.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-surface rounded-xl p-5 shadow-sm hover:shadow-md transition-all border-l-4 border-royal"
              >
                <h4 className="font-semibold text-foreground text-sm mb-3">{prog.name}</h4>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {prog.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {prog.seats} seats</span>
                </div>
                <Link to={`/departments/${prog.name.toLowerCase().replace(/[^a-z]/g, '-').replace(/-+/g, '-')}`} className="text-xs text-royal font-medium mt-3 inline-flex items-center gap-1 hover:text-royal-light transition-colors">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* M.Tech Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground">M.Tech Programs</h2>
              <p className="text-sm text-muted-foreground">2-Year Postgraduate Engineering Programs</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mtechPrograms.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-surface rounded-xl p-5 shadow-sm hover:shadow-md transition-all border-l-4 border-gold"
              >
                <h4 className="font-semibold text-foreground text-sm mb-3">{prog.name}</h4>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {prog.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {prog.seats} seats</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground">Other Programs</h2>
              <p className="text-sm text-muted-foreground">Management, Computer Applications & Research</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherPrograms.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold text-royal bg-royal/10 px-3 py-1 rounded-full">{prog.type}</span>
                <h4 className="font-heading font-semibold text-foreground text-lg mt-4 mb-2">{prog.name}</h4>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {prog.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {prog.seats} seats</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-surface mb-4">Ready to <span className="text-gradient-gold">Apply?</span></h2>
          <p className="text-gold-light/70 mb-8 max-w-xl mx-auto">Explore our departments in detail or start your application today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-3.5 rounded-md transition-all hover:shadow-gold">
              Apply Now
            </Link>
            <Link to="/departments" className="border border-gold/40 text-gold hover:bg-gold/10 font-semibold px-8 py-3.5 rounded-md transition-all">
              View Departments
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
