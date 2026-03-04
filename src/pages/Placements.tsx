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
  { name: "TCS", category: "IT", logo: `${import.meta.env.BASE_URL}recruiters/tcs.png` },
  { name: "Infosys", category: "IT", logo: `${import.meta.env.BASE_URL}recruiters/infosys.png` },
  { name: "Wipro", category: "IT", logo: `${import.meta.env.BASE_URL}recruiters/wipro.png` },
  { name: "Cognizant", category: "IT", logo: `${import.meta.env.BASE_URL}recruiters/congnizant.png` },
  { name: "HCL Technologies", category: "IT", logo: `${import.meta.env.BASE_URL}recruiters/hcltech.png` },
  { name: "Capgemini", category: "IT", logo: `${import.meta.env.BASE_URL}recruiters/capgemini.png` },
  { name: "Deloitte", category: "Consulting", logo: `${import.meta.env.BASE_URL}recruiters/Deloitte.png` },
  { name: "Accenture", category: "Consulting", logo: `${import.meta.env.BASE_URL}recruiters/accenture.png` },
  { name: "Amazon", category: "Product", logo: `${import.meta.env.BASE_URL}recruiters/amazon.png` },
  { name: "Microsoft", category: "Product", logo: `${import.meta.env.BASE_URL}recruiters/microsoft.png` },
  { name: "Google", category: "Product", logo: `${import.meta.env.BASE_URL}recruiters/google.webp` },
  { name: "IBM", category: "IT", logo: `${import.meta.env.BASE_URL}recruiters/IBM.png` },
  { name: "L&T", category: "Core", logo: `${import.meta.env.BASE_URL}recruiters/L&T.png` },
  { name: "Bosch", category: "Core", logo: `${import.meta.env.BASE_URL}recruiters/bosch.png` },
  { name: "Schneider Electric", category: "Core", logo: "https://cdn.simpleicons.org/schneiderelectric" },
  { name: "Mahindra", category: "Core", logo: `${import.meta.env.BASE_URL}recruiters/mahindra.png` },
  { name: "Zoho", category: "Product", logo: `${import.meta.env.BASE_URL}recruiters/zoho.png` },
  { name: "Freshworks", category: "Product", logo: "https://cdn.simpleicons.org/freshworks" },
  { name: "JP Morgan", category: "Finance", logo: "https://cdn.simpleicons.org/jpmorganchase" },
  { name: "Goldman Sachs", category: "Finance", logo: "https://cdn.simpleicons.org/goldmansachs" },
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

  const recruitersLeft = [...topRecruiters, ...topRecruiters];
  const recruitersRight = [...topRecruiters.slice().reverse(), ...topRecruiters.slice().reverse()];

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
          <div className="space-y-4 max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              >
                {recruitersLeft.map((r, index) => (
                  <div
                    key={`${r.name}-left-${index}`}
                    className="group px-5 py-4 bg-surface rounded-xl shadow-sm border border-border hover:border-gold hover:shadow-md transition-all min-w-[190px] h-[80px] flex items-center justify-center"
                  >
                    <img
                      src={r.logo}
                      alt={`${r.name} logo`}
                      className="max-h-10 max-w-[140px] w-auto object-contain transition-all"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4 w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 34, ease: "linear", repeat: Infinity }}
              >
                {recruitersRight.map((r, index) => (
                  <div
                    key={`${r.name}-right-${index}`}
                    className="group px-5 py-4 bg-surface rounded-xl shadow-sm border border-border hover:border-gold hover:shadow-md transition-all min-w-[190px] h-[80px] flex items-center justify-center"
                  >
                    <img
                      src={r.logo}
                      alt={`${r.name} logo`}
                      className="max-h-10 max-w-[140px] w-auto object-contain transition-all"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
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
