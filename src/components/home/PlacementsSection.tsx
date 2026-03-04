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
  { name: "TCS", logo: `${import.meta.env.BASE_URL}recruiters/tcs.png` },
  { name: "Infosys", logo: `${import.meta.env.BASE_URL}recruiters/infosys.png` },
  { name: "Wipro", logo: `${import.meta.env.BASE_URL}recruiters/wipro.png` },
  { name: "Cognizant", logo: `${import.meta.env.BASE_URL}recruiters/congnizant.png` },
  { name: "HCL", logo: `${import.meta.env.BASE_URL}recruiters/hcltech.png` },
  { name: "Capgemini", logo: `${import.meta.env.BASE_URL}recruiters/capgemini.png` },
  { name: "Deloitte", logo: `${import.meta.env.BASE_URL}recruiters/Deloitte.png` },
  { name: "Accenture", logo: `${import.meta.env.BASE_URL}recruiters/accenture.png` },
  { name: "Amazon", logo: `${import.meta.env.BASE_URL}recruiters/amazon.png` },
  { name: "Microsoft", logo: `${import.meta.env.BASE_URL}recruiters/microsoft.png` },
  { name: "Google", logo: `${import.meta.env.BASE_URL}recruiters/google.webp` },
  { name: "IBM", logo: `${import.meta.env.BASE_URL}recruiters/IBM.png` },
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

  const marqueeRecruiters = [...recruiters, ...recruiters];

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
          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 26, ease: "linear", repeat: Infinity }}
            >
              {marqueeRecruiters.map((r, index) => (
                <div
                  key={`${r.name}-${index}`}
                  className="group px-5 py-4 bg-cream rounded-xl border border-border hover:shadow-md transition-all flex items-center justify-center min-w-[180px] h-[76px]"
                >
                  <img
                    src={r.logo}
                    alt={`${r.name} logo`}
                    className="max-h-10 max-w-[130px] w-auto object-contain transition-all"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
