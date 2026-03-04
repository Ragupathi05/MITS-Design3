import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Tech CSE, Batch of 2024",
    text: "MITS provided me with exceptional exposure to both academics and industry. The placement cell ensured I landed my dream job at a leading tech company.",
  },
  {
    name: "Rahul Reddy",
    role: "M.Tech ECE, Batch of 2023",
    text: "The research facilities and faculty mentorship at MITS are outstanding. My thesis work was published in two international journals, thanks to the support I received.",
  },
  {
    name: "Ananya Krishnan",
    role: "MBA, Batch of 2025",
    text: "The industry-connected curriculum and guest lectures from top executives gave me a real-world perspective that set me apart in interviews.",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Voices of <span className="text-royal">Our Alumni</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-md text-center"
          >
            <div className="flex items-center justify-center gap-1 mb-6 text-gold">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 mx-auto mb-5 flex items-center justify-center">
              <Quote className="w-8 h-8 text-gold/50" />
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic font-medium">
              "{testimonials[current].text}"
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-navy text-gold flex items-center justify-center font-heading font-bold text-sm">
                {getInitials(testimonials[current].name)}
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-lg">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-navy hover:text-gold transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? "bg-gold scale-125" : "bg-border"
                }`}
              />
            ))}
            <button
              onClick={() => setCurrent((current + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-navy hover:text-gold transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3">
            {current + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
