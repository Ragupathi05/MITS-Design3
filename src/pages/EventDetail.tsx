import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowLeft, Share2 } from "lucide-react";

const eventsData: Record<string, { title: string; date: string; time: string; category: string; location: string; desc: string; content: string }> = {
  "national-tech-symposium-2026": {
    title: "National Technical Symposium 2026", date: "March 15, 2026", time: "9:00 AM – 5:00 PM", category: "Event", location: "Main Auditorium, MITS Campus",
    desc: "Annual tech fest featuring workshops, hackathons, and expert talks from industry leaders.",
    content: "The National Technical Symposium is MITS's flagship annual event that brings together students, faculty, and industry experts for a day of innovation and learning. This year's edition features keynote sessions from leading tech executives, hands-on workshops on AI/ML, cloud computing, and cybersecurity, a 24-hour hackathon with prizes worth ₹5 lakhs, poster presentations, and coding competitions. Over 2,000 participants from 50+ colleges are expected to attend.",
  },
  "ai-ml-conference-2026": {
    title: "International Conference on AI & ML", date: "April 5, 2026", time: "10:00 AM – 6:00 PM", category: "Conference", location: "Seminar Hall A, R&D Block",
    desc: "Global researchers present cutting-edge AI and ML research papers and findings.",
    content: "ICAIML 2026 is an internationally recognized conference organized by the Department of Computer Science & Engineering. Researchers from across the globe will present papers on deep learning, natural language processing, computer vision, and reinforcement learning. The conference features 3 keynote speakers from MIT, Stanford, and IIT Madras, along with 60+ paper presentations and a panel discussion on the future of AI in education.",
  },
  "alumni-meet-2026": {
    title: "Alumni Meet 2026", date: "February 28, 2026", time: "5:00 PM – 10:00 PM", category: "Alumni", location: "Convention Center",
    desc: "Annual gathering of MITS alumni for networking, mentorship, and celebrations.",
    content: "The annual Alumni Meet brings together graduates from all batches for an evening of nostalgia, networking, and mentorship. This year's event includes a campus tour showcasing new infrastructure, panel discussions with distinguished alumni, a cultural program, and a gala dinner. Alumni will also interact with current students through mentorship sessions and career guidance workshops.",
  },
  "industry-connect-2026": {
    title: "Industry Connect Program", date: "March 20, 2026", time: "11:00 AM – 4:00 PM", category: "Industry", location: "Block A Auditorium",
    desc: "Top companies share insights on industry trends and career opportunities.",
    content: "The Industry Connect Program bridges the gap between academia and industry. Representatives from 20+ leading companies including TCS, Infosys, Amazon, and Bosch will conduct sessions on emerging technologies, hiring trends, and skill requirements. Students will participate in mock interviews, resume workshops, and networking sessions with HR leaders.",
  },
  "resonance-2026": {
    title: "Cultural Fest - Resonance", date: "April 12, 2026", time: "4:00 PM onwards", category: "Cultural", location: "Open Air Theatre",
    desc: "A vibrant celebration of art, music, dance, and creativity across three days.",
    content: "Resonance is MITS's annual cultural extravaganza spanning three days of music, dance, drama, fashion, and art. The fest features inter-college competitions, celebrity performances, food stalls, and art exhibitions. Over 5,000 students from the region participate in 30+ events across performing arts, literary arts, and fine arts categories.",
  },
  "research-paper-awards-2026": {
    title: "Research Paper Awards", date: "May 1, 2026", time: "2:00 PM – 5:00 PM", category: "Research", location: "R&D Block, Conference Room",
    desc: "Recognizing outstanding research contributions by faculty and students.",
    content: "The annual Research Paper Awards ceremony honors exceptional research output by MITS faculty and students. Awards are given across categories including best journal publication, best conference paper, most cited research, and best student research project. Winners receive cash prizes, certificates, and research grants for future work.",
  },
  "placement-drive-spring-2026": {
    title: "Spring Placement Drive 2026", date: "March 25, 2026", time: "9:00 AM – 6:00 PM", category: "Placements", location: "Placement Cell & Multiple Venues",
    desc: "Major recruitment drive with 50+ companies visiting the campus.",
    content: "The Spring Placement Drive is one of the largest campus recruitment events at MITS. Over 50 companies across IT, core engineering, consulting, and finance sectors will conduct on-campus interviews. Students are prepared through pre-placement training including aptitude tests, group discussions, and technical mock interviews. Last year's spring drive resulted in 800+ offers with packages ranging from 4 LPA to 42 LPA.",
  },
  "sports-fest-2026": {
    title: "Annual Sports Meet - Athlos", date: "April 20, 2026", time: "7:00 AM – 6:00 PM", category: "Cultural", location: "Sports Complex",
    desc: "Inter-department sports competition featuring 15+ events.",
    content: "Athlos is the annual sports festival that promotes physical fitness and sportsmanship among students. Events include cricket, football, basketball, volleyball, badminton, table tennis, athletics, and chess. Departments compete for the overall championship trophy. Professional coaches and sports personalities are invited as chief guests and referees.",
  },
  "guest-lecture-robotics": {
    title: "Guest Lecture on Robotics & IoT", date: "March 10, 2026", time: "3:00 PM – 5:00 PM", category: "Event", location: "Seminar Hall B",
    desc: "Expert lecture on emerging trends in robotics and Internet of Things.",
    content: "A guest lecture by Dr. Rajesh Kumar, Head of Robotics at Bosch India, covering the latest developments in industrial robotics, collaborative robots, and IoT integration in manufacturing. The session includes a live demonstration of robotic arms and IoT sensor networks, followed by a Q&A session and hands-on activity for interested students.",
  },
};

const EventDetail = () => {
  const { id } = useParams();
  const event = id ? eventsData[id] : null;

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
