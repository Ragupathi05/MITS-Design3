import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Building } from "lucide-react";

const placementStats = [
  { icon: TrendingUp, value: 42, suffix: " LPA", label: "Highest Package" },
  { icon: Award, value: 8.5, suffix: " LPA", label: "Average Package", decimal: true },
  { icon: Users, value: 95, suffix: "%", label: "Placement Rate" },
  { icon: Building, value: 300, suffix: "+", label: "Recruiting Companies" },
];

const recruiters = [
  { name: "TCS", color: "#1A1A6C" },
  { name: "Infosys", color: "#007CC3" },
  { name: "Wipro", color: "#3D1A78" },
  { name: "Cognizant", color: "#1A4F8B" },
  { name: "HCL", color: "#0073B1" },
  { name: "Capgemini", color: "#0070AD" },
  { name: "Deloitte", color: "#86BC25" },
  { name: "Accenture", color: "#A100FF" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Google", color: "#4285F4" },
  { name: "IBM", color: "#054ADA" },
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

const PlacementsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Placements</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Career Success <span className="text-royal">Starts Here</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {placementStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-surface rounded-xl p-6 shadow-sm"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-3xl font-heading font-bold text-navy">
                <CountUpNumber target={stat.value} suffix={stat.suffix} start={inView} decimal={stat.decimal} />
              </div>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-surface rounded-xl p-8 shadow-sm">
          <h3 className="font-heading font-semibold text-lg text-foreground text-center mb-6">Top Recruiters</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {recruiters.map((r) => (
              <div
                key={r.name}
                className="group relative px-6 py-4 bg-cream rounded-xl border border-border hover:shadow-md transition-all flex items-center gap-3 min-w-[140px] justify-center"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-surface font-heading font-bold text-sm shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-navy">{r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
