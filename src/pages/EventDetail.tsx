import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowLeft, Share2 } from "lucide-react";
import { newsEvents } from "@/data/newsEvents";

const EventDetail = () => {
  const { id } = useParams();
  const event = id ? newsEvents.find((item) => item.id === id) : null;

  if (!event) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Event Not Found</h1>
          <Link to="/news-events" className="text-royal hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="gradient-navy py-16">
        <div className="container mx-auto px-4">
          <Link to="/news-events" className="inline-flex items-center gap-1 text-gold-light/70 hover:text-gold text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-semibold text-navy bg-gold px-3 py-1 rounded-full">{event.category}</span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-surface mt-4 mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gold-light/70">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {event.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {event.time}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="bg-cream rounded-xl overflow-hidden shadow-sm border border-border mb-8">
              <img
                src={`${import.meta.env.BASE_URL}${event.image}`}
                alt={event.title}
                className="w-full h-auto object-contain object-center"
              />
            </div>
            <div className="bg-surface rounded-xl p-8 shadow-sm border border-border mb-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">About This Event</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{event.content}</p>
              <div className="flex gap-3">
                <button className="bg-navy text-gold font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-navy-light transition-colors">
                  Register Now
                </button>
                <button className="border border-border text-foreground px-4 py-2.5 rounded-lg text-sm hover:bg-cream transition-colors inline-flex items-center gap-1.5">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>

            <div className="bg-cream rounded-xl p-6 border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Event Details</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Date:</span> <span className="font-medium text-foreground ml-1">{event.date}</span></div>
                <div><span className="text-muted-foreground">Time:</span> <span className="font-medium text-foreground ml-1">{event.time}</span></div>
                <div><span className="text-muted-foreground">Venue:</span> <span className="font-medium text-foreground ml-1">{event.location}</span></div>
                <div><span className="text-muted-foreground">Category:</span> <span className="font-medium text-foreground ml-1">{event.category}</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
