import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const allEvents = [
  { id: "national-tech-symposium-2026", title: "National Technical Symposium 2026", date: "March 15, 2026", time: "9:00 AM", category: "Event", location: "Main Auditorium", desc: "Annual tech fest featuring workshops, hackathons, and expert talks from industry leaders.", featured: true },
  { id: "ai-ml-conference-2026", title: "International Conference on AI & ML", date: "April 5, 2026", time: "10:00 AM", category: "Conference", location: "Seminar Hall A", desc: "Global researchers present cutting-edge AI and ML research papers and findings.", featured: true },
  { id: "alumni-meet-2026", title: "Alumni Meet 2026", date: "February 28, 2026", time: "5:00 PM", category: "Alumni", location: "Convention Center", desc: "Annual gathering of MITS alumni for networking, mentorship, and celebrations." },
  { id: "industry-connect-2026", title: "Industry Connect Program", date: "March 20, 2026", time: "11:00 AM", category: "Industry", location: "Block A Auditorium", desc: "Top companies share insights on industry trends and career opportunities." },
  { id: "resonance-2026", title: "Cultural Fest - Resonance", date: "April 12, 2026", time: "4:00 PM", category: "Cultural", location: "Open Air Theatre", desc: "A vibrant celebration of art, music, dance, and creativity across three days." },
  { id: "research-paper-awards-2026", title: "Research Paper Awards", date: "May 1, 2026", time: "2:00 PM", category: "Research", location: "R&D Block", desc: "Recognizing outstanding research contributions by faculty and students." },
  { id: "placement-drive-spring-2026", title: "Spring Placement Drive 2026", date: "March 25, 2026", time: "9:00 AM", category: "Placements", location: "Placement Cell", desc: "Major recruitment drive with 50+ companies visiting the campus." },
  { id: "sports-fest-2026", title: "Annual Sports Meet - Athlos", date: "April 20, 2026", time: "7:00 AM", category: "Cultural", location: "Sports Complex", desc: "Inter-department sports competition featuring 15+ events." },
  { id: "guest-lecture-robotics", title: "Guest Lecture on Robotics & IoT", date: "March 10, 2026", time: "3:00 PM", category: "Event", location: "Seminar Hall B", desc: "Expert lecture on emerging trends in robotics and Internet of Things." },
];

const categories = ["All", "Event", "Conference", "Alumni", "Industry", "Cultural", "Research", "Placements"];

const NewsEvents = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allEvents.filter((e) => {
    const matchesCategory = activeCategory === "All" || e.category === activeCategory;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) || e.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = allEvents.filter((e) => e.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" /> Latest Updates
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface mb-4">
              News & <span className="text-gradient-gold">Events</span>
            </h1>
            <p className="text-gold-light/70 text-lg">
              Stay updated with the latest happenings, events, and achievements at MITS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Featured Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all"
              >
                <div className="gradient-navy p-6">
                  <span className="text-xs font-semibold text-navy bg-gold px-3 py-1 rounded-full">{event.category}</span>
                  <h3 className="font-heading font-bold text-xl text-surface mt-4">{event.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">{event.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {event.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {event.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {event.location}</span>
                  </div>
                  <Link to={`/news-events/${event.id}`} className="text-sm font-semibold text-royal hover:text-royal-light inline-flex items-center gap-1 transition-colors">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events with Filter */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground">All Events</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 w-full md:w-64"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-gold"
                    : "bg-surface border border-border text-muted-foreground hover:border-gold hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-surface rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-gold/30 transition-all group"
                >
                  <span className="text-xs font-semibold text-royal bg-royal/10 px-3 py-1 rounded-full">{event.category}</span>
                  <h3 className="font-heading font-semibold text-lg text-foreground mt-4 mb-2 group-hover:text-royal transition-colors">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{event.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {event.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                  </div>
                  <Link to={`/news-events/${event.id}`} className="text-sm font-semibold text-royal hover:text-royal-light inline-flex items-center gap-1 transition-colors">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default NewsEvents;
