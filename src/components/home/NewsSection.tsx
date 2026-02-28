import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  { title: "National Technical Symposium 2026", date: "March 15, 2026", category: "Event", desc: "Annual tech fest featuring workshops, hackathons, and expert talks." },
  { title: "International Conference on AI & ML", date: "April 5, 2026", category: "Conference", desc: "Global researchers present cutting-edge AI and ML research." },
  { title: "Alumni Meet 2026", date: "February 28, 2026", category: "Alumni", desc: "Annual gathering of MITS alumni for networking and mentorship." },
  { title: "Industry Connect Program", date: "March 20, 2026", category: "Industry", desc: "Top companies share insights on industry trends and opportunities." },
  { title: "Cultural Fest - Resonance", date: "April 12, 2026", category: "Cultural", desc: "A vibrant celebration of art, music, dance, and creativity." },
  { title: "Research Paper Awards", date: "May 1, 2026", category: "Research", desc: "Recognizing outstanding research contributions by faculty and students." },
];

const NewsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(events.length / perPage);
  const visible = events.slice(page * perPage, (page + 1) * perPage);

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">News & Events</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Stay <span className="text-royal">Updated</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-navy hover:text-gold transition-all disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-navy hover:text-gold transition-all disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="p-6">
                <span className="text-xs font-semibold text-royal bg-royal/10 px-3 py-1 rounded-full">
                  {event.category}
                </span>
                <h3 className="font-heading font-semibold text-lg text-foreground mt-4 mb-2 group-hover:text-royal transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{event.desc}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
