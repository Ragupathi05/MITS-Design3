import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
            className="bg-surface rounded-xl p-8 md:p-12 shadow-md text-center"
          >
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />
            <p className="text-lg text-foreground leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="font-heading font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-3 mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
