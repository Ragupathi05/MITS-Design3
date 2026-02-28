import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Download, ArrowRight, Sparkles } from "lucide-react";

const dates = [
  { label: "Application Deadline", date: "April 30, 2026" },
  { label: "Entrance Exam", date: "May 15, 2026" },
  { label: "Results Announced", date: "June 1, 2026" },
  { label: "Classes Commence", date: "July 15, 2026" },
];

const AdmissionsSection = () => {
  return (
    <section className="py-20 gradient-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Admissions Open 2026
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface mb-4">
              Begin Your Journey to{" "}
              <span className="text-gradient-gold">Academic Excellence</span>
            </h2>
            <p className="text-gold-light/70 mb-8 leading-relaxed">
              Join thousands of students who have transformed their careers at MITS. 
              Scholarships available for meritorious students. Apply now for the upcoming academic session.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/admissions"
                className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-3.5 rounded-md transition-all hover:shadow-gold flex items-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#"
                className="border border-gold/40 text-gold hover:bg-gold/10 font-semibold px-6 py-3.5 rounded-md transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Prospectus
              </a>
            </div>

            <div className="bg-navy-light/50 rounded-lg p-4 border border-gold/10">
              <p className="text-gold text-sm font-medium mb-1">Scholarships Available</p>
              <p className="text-gold-light/60 text-xs">Up to 100% scholarships for top rankers in national entrance exams.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-surface rounded-xl p-8 shadow-xl">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-royal" />
                Important Dates
              </h3>
              <div className="space-y-4">
                {dates.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="text-sm text-foreground font-medium">{item.label}</span>
                    <span className="text-sm text-royal font-semibold">{item.date}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-cream rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Eligibility:</strong> 10+2 with minimum 60% in PCM for B.Tech programs. 
                  Valid entrance exam scores accepted.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
