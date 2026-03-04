import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { newsEvents } from "@/data/newsEvents";

const categories = ["All", ...Array.from(new Set(newsEvents.map((item) => item.category)))];

const NewsEvents = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = newsEvents.filter((e) => {
    const matchesCategory = activeCategory === "All" || e.category === activeCategory;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) || e.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = newsEvents.filter((e) => e.featured);

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
                className="bg-surface rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${event.image}`}
                    alt={event.title}
                    className="w-full h-auto object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-royal bg-royal/10 px-3 py-1 rounded-full">{event.category}</span>
                  <h3 className="font-heading font-bold text-xl text-foreground mt-4 mb-3 group-hover:text-royal transition-colors">{event.title}</h3>
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
                  className="bg-surface rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${event.image}`}
                      alt={event.title}
                      className="w-full h-auto object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
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
                  </div>
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
