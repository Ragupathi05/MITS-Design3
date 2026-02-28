import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Shield, Star, TrendingUp, CheckCircle } from "lucide-react";

const badges = [
  { icon: Award, label: "NAAC A+", sub: "Accredited" },
  { icon: Shield, label: "UGC", sub: "Recognized" },
  { icon: CheckCircle, label: "AICTE", sub: "Approved" },
  { icon: Star, label: "NBA", sub: "Accredited" },
  { icon: TrendingUp, label: "NIRF", sub: "Ranked" },
];

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 10000, suffix: "+", label: "Students" },
  { value: 500, suffix: "+", label: "Faculty Members" },
  { value: 50, suffix: "+", label: "Programs Offered" },
];

function CountUpNumber({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, start]);
  return <>{count.toLocaleString()}{suffix}</>;
}

const TrustSection = () => {
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
    <section ref={ref} className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center">
                <badge.icon className="w-7 h-7 text-gold" />
              </div>
              <span className="font-heading font-bold text-navy text-sm">{badge.label}</span>
              <span className="text-xs text-muted-foreground">{badge.sub}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center p-6 bg-surface rounded-lg shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-royal">
                <CountUpNumber target={stat.value} suffix={stat.suffix} start={inView} />
              </div>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
