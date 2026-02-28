import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(10, "Valid phone required").max(15),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contactInfo = [
  { icon: MapPin, label: "Address", value: "MITS Campus, NH-205, Madanapalle - 517325, Andhra Pradesh, India" },
  { icon: Phone, label: "Phone", value: "+91 8571 280 255" },
  { icon: Mail, label: "Email", value: "info@mits.ac.in" },
  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 9:00 AM - 5:00 PM" },
];

const departments = [
  { name: "Admissions Office", email: "admissions@mits.ac.in", phone: "+91 8571 280 256" },
  { name: "Placement Cell", email: "placements@mits.ac.in", phone: "+91 8571 280 257" },
  { name: "Examination Branch", email: "exams@mits.ac.in", phone: "+91 8571 280 258" },
  { name: "Hostel Administration", email: "hostel@mits.ac.in", phone: "+91 8571 280 259" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border ${errors[field] ? "border-destructive" : "border-border"} bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-royal/50 transition-all text-sm`;

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface mb-4">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-gold-light/70 text-lg">
              We'd love to hear from you. Reach out to us for admissions, inquiries, or any assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mx-auto mb-3">
                  <info.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{info.label}</h4>
                <p className="text-sm text-muted-foreground">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-royal" /> Send us a Message
              </h2>
              {submitted ? (
                <div className="bg-cream rounded-xl p-10 text-center">
                  <div className="w-16 h-16 bg-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-royal" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">Thank you for reaching out. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input className={inputClass("name")} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input type="email" className={inputClass("email")} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="email@example.com" />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                      <input className={inputClass("phone")} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                      <input className={inputClass("subject")} value={form.subject} onChange={(e) => update("subject", e.target.value)} placeholder="How can we help?" />
                      {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea className={inputClass("message")} rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Your message..." />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="bg-royal hover:bg-royal-light text-surface font-semibold px-8 py-3 rounded-md transition-all flex items-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-royal" /> Find Us
              </h2>
              <div className="rounded-xl overflow-hidden shadow-md h-[400px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.123!2d78.489!3d13.553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMzJzEwLjgiTiA3OMKwMjknMjAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MITS Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-foreground">Department <span className="text-royal">Contacts</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-xl p-5 shadow-sm"
              >
                <h4 className="font-heading font-semibold text-foreground text-sm mb-3">{dept.name}</h4>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <p className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-royal" /> {dept.email}</p>
                  <p className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-royal" /> {dept.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
