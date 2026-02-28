import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Home, Utensils, Dumbbell, BookOpen, Music, Wifi, Shield, Heart, Users, Trophy, Palette, Monitor } from "lucide-react";
import campusAerial from "@/assets/campus-aerial.jpg";
import campusBuilding from "@/assets/campus-building.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const facilities = [
  { icon: Home, title: "Hostels", desc: "Separate boys and girls hostels with AC and non-AC rooms, 24/7 security, and hygienic dining." },
  { icon: Utensils, title: "Dining & Cafeteria", desc: "Multi-cuisine mess, food court, and cafeterias serving nutritious meals throughout the day." },
  { icon: Dumbbell, title: "Sports Complex", desc: "Cricket ground, basketball courts, badminton, tennis, volleyball, swimming pool, and indoor games." },
  { icon: BookOpen, title: "Central Library", desc: "100,000+ books, digital library with IEEE/Springer access, reading halls, and e-resources." },
  { icon: Wifi, title: "Wi-Fi Campus", desc: "Complete campus covered with high-speed Wi-Fi for seamless digital learning." },
  { icon: Shield, title: "Health Center", desc: "On-campus medical facility with qualified doctors, ambulance service, and pharmacy." },
  { icon: Monitor, title: "Computer Labs", desc: "State-of-the-art computing facilities with latest hardware and licensed software." },
  { icon: Music, title: "Auditorium", desc: "Air-conditioned auditorium seating 1500+ for cultural events, seminars, and conferences." },
];

const clubs = [
  { icon: Palette, name: "Arts & Culture Club", members: "200+" },
  { icon: Monitor, name: "Coding & Tech Club", members: "350+" },
  { icon: Music, name: "Music & Dance Club", members: "150+" },
  { icon: Trophy, name: "Sports Club", members: "300+" },
  { icon: BookOpen, name: "Literary Club", members: "120+" },
  { icon: Heart, name: "Social Service Club (NSS)", members: "250+" },
  { icon: Users, name: "Entrepreneurship Cell", members: "180+" },
  { icon: Shield, name: "NCC Unit", members: "100+" },
];

const events = [
  { name: "Resonance", type: "Cultural Fest", desc: "Annual cultural extravaganza featuring music, dance, drama, and art competitions." },
  { name: "Technovista", type: "Technical Fest", desc: "Inter-college technical symposium with hackathons, workshops, and paper presentations." },
  { name: "Sportanza", type: "Sports Meet", desc: "Annual sports meet with inter-department and inter-college competitions." },
  { name: "Innovate", type: "Innovation Summit", desc: "Entrepreneurship summit with startup pitches, investor meets, and mentorship." },
];

const CampusLife = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={heroCampus} alt="MITS Campus Life" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface mb-3">
              Campus <span className="text-gradient-gold">Life</span>
            </h1>
            <p className="text-gold-light/80 text-lg max-w-xl">
              A vibrant community where academics meet extracurriculars, creating unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">World-Class</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Campus <span className="text-royal">Facilities</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Visual Tour</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Campus <span className="text-royal">Gallery</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {[
              { src: heroCampus, span: "md:col-span-2", alt: "Campus Walkway" },
              { src: campusBuilding, span: "", alt: "Academic Block" },
              { src: campusAerial, span: "", alt: "Aerial View" },
              { src: campusBuilding, span: "md:col-span-2", alt: "Main Building" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${img.span} rounded-xl overflow-hidden group cursor-pointer`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Student Life</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Clubs & <span className="text-royal">Societies</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {clubs.map((club, i) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface rounded-xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-royal/10 rounded-lg flex items-center justify-center shrink-0">
                  <club.icon className="w-5 h-5 text-royal" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{club.name}</h4>
                  <p className="text-[11px] text-muted-foreground">{club.members} members</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Annual</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Signature <span className="text-royal">Events</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold text-royal bg-royal/10 px-3 py-1 rounded-full">{event.type}</span>
                <h3 className="font-heading font-bold text-xl text-foreground mt-4 mb-2">{event.name}</h3>
                <p className="text-sm text-muted-foreground">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CampusLife;
