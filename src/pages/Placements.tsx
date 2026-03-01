import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Building, Briefcase, BarChart3 } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 42, suffix: " LPA", label: "Highest Package", decimal: false },
  { icon: Award, value: 8.5, suffix: " LPA", label: "Average Package", decimal: true },
  { icon: Users, value: 95, suffix: "%", label: "Placement Rate", decimal: false },
  { icon: Building, value: 300, suffix: "+", label: "Recruiting Companies", decimal: false },
  { icon: Briefcase, value: 1500, suffix: "+", label: "Offers Made (2025)", decimal: false },
  { icon: BarChart3, value: 85, suffix: "%", label: "Core Placements", decimal: false },
];

const topRecruiters = [
  { name: "TCS", category: "IT", color: "#1A1A6C" },
  { name: "Infosys", category: "IT", color: "#007CC3" },
  { name: "Wipro", category: "IT", color: "#3D1A78" },
  { name: "Cognizant", category: "IT", color: "#1A4F8B" },
  { name: "HCL Technologies", category: "IT", color: "#0073B1" },
  { name: "Capgemini", category: "IT", color: "#0070AD" },
  { name: "Deloitte", category: "Consulting", color: "#86BC25" },
  { name: "Accenture", category: "Consulting", color: "#A100FF" },
  { name: "Amazon", category: "Product", color: "#FF9900" },
  { name: "Microsoft", category: "Product", color: "#00A4EF" },
  { name: "Google", category: "Product", color: "#4285F4" },
  { name: "IBM", category: "IT", color: "#054ADA" },
  { name: "L&T", category: "Core", color: "#003366" },
  { name: "Bosch", category: "Core", color: "#E20015" },
  { name: "Schneider Electric", category: "Core", color: "#3DCD58" },
  { name: "Mahindra", category: "Core", color: "#E32726" },
  { name: "Zoho", category: "Product", color: "#D72B2B" },
  { name: "Freshworks", category: "Product", color: "#F36F21" },
  { name: "JP Morgan", category: "Finance", color: "#003A70" },
  { name: "Goldman Sachs", category: "Finance", color: "#6F9FD8" },
];

const deptPlacements = [
  { dept: "Computer Science & Engineering", rate: "98%", avg: "9.2 LPA", highest: "42 LPA" },
  { dept: "Electronics & Communication", rate: "94%", avg: "7.8 LPA", highest: "28 LPA" },
  { dept: "Mechanical Engineering", rate: "90%", avg: "6.5 LPA", highest: "18 LPA" },
  { dept: "Electrical Engineering", rate: "92%", avg: "7.2 LPA", highest: "22 LPA" },
  { dept: "Civil Engineering", rate: "88%", avg: "5.8 LPA", highest: "15 LPA" },
  { dept: "Information Technology", rate: "96%", avg: "8.8 LPA", highest: "35 LPA" },
];

function CountUpNumber({ target, suffix, start, decimal }: { target: number; suffix: string; start: boolean; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(decimal ? Math.round(progress * target * 10) / 10 : Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, start, decimal]);
  return <>{count}{suffix}</>;
}

const Placements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" /> 95% Placement Rate
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface mb-4">
              Placement <span className="text-gradient-gold">Excellence</span>
            </h1>
            <p className="text-gold-light/70 text-lg">
              Our dedicated placement cell ensures every student gets the best career opportunities
              with top companies across India and abroad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={ref} className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.08 }}
                className="text-center bg-surface rounded-xl p-5 shadow-sm"
              >
                <stat.icon className="w-7 h-7 text-gold mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-navy">
                  <CountUpNumber target={stat.value} suffix={stat.suffix} start={inView} decimal={stat.decimal} />
                </div>
                <p className="text-[11px] text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department-wise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Department-wise</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Placement <span className="text-royal">Statistics</span></h2>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-gold text-sm">
                  <th className="text-left p-4 rounded-tl-lg font-semibold">Department</th>
                  <th className="text-center p-4 font-semibold">Placement %</th>
                  <th className="text-center p-4 font-semibold">Avg Package</th>
                  <th className="text-center p-4 rounded-tr-lg font-semibold">Highest</th>
                </tr>
              </thead>
              <tbody>
                {deptPlacements.map((d, i) => (
                  <motion.tr
                    key={d.dept}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border hover:bg-cream transition-colors"
                  >
                    <td className="p-4 text-sm font-medium text-foreground">{d.dept}</td>
                    <td className="p-4 text-sm text-center text-royal font-semibold">{d.rate}</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">{d.avg}</td>
                    <td className="p-4 text-sm text-center font-semibold text-gold-dark">{d.highest}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Our Partners</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Top <span className="text-royal">Recruiters</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {topRecruiters.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 px-5 py-3 bg-surface rounded-xl shadow-sm border border-border hover:border-gold hover:shadow-md transition-all min-w-[160px]"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-surface font-heading font-bold text-xs shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground block leading-tight">{r.name}</span>
                  <span className="text-[10px] text-muted-foreground">{r.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-foreground">Placement <span className="text-royal">Process</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Pre-Placement Training", desc: "Aptitude, soft skills, coding, and mock interviews." },
              { step: "02", title: "Company Registration", desc: "Companies register and share job descriptions." },
              { step: "03", title: "Campus Drives", desc: "Written tests, group discussions, and interviews." },
              { step: "04", title: "Offer & Onboarding", desc: "Students receive offers and join their dream companies." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-heading font-bold text-xl">{item.step}</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
