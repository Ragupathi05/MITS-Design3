import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { departmentsData } from "./Departments";
import { Users, GraduationCap, BookOpen, FlaskConical, Award, ArrowLeft, Building2, TrendingUp } from "lucide-react";

const DepartmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const dept = departmentsData.find((d) => d.slug === slug);

  if (!dept) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Department Not Found</h1>
            <Link to="/departments" className="text-royal hover:text-royal-light font-medium">← Back to Departments</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className={`${dept.color} py-16`}>
        <div className="container mx-auto px-4">
          <Link to="/departments" className="inline-flex items-center gap-1 text-surface/70 hover:text-surface text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Departments
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <dept.icon className="w-14 h-14 text-surface mb-4" />
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-surface mb-2">{dept.name}</h1>
            <p className="text-surface/70 text-sm">Established {dept.established} · Head of Department: {dept.hod}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "Students", value: dept.students },
              { icon: GraduationCap, label: "Faculty", value: dept.faculty },
              { icon: TrendingUp, label: "Placement Rate", value: dept.placementRate },
              { icon: Award, label: "Avg Package", value: dept.avgPackage },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface rounded-xl p-5 text-center shadow-sm">
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-navy">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">About the Department</h2>
          <p className="text-muted-foreground leading-relaxed">{dept.description}</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-royal" /> Programs Offered
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {dept.programs.map((prog) => (
              <motion.div
                key={prog}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface rounded-lg p-4 shadow-sm flex items-center gap-3"
              >
                <GraduationCap className="w-5 h-5 text-royal shrink-0" />
                <span className="text-sm font-medium text-foreground">{prog}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-gold" /> Key Highlights
          </h2>
          <div className="flex flex-wrap gap-3">
            {dept.highlights.map((h) => (
              <span key={h} className="bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm font-medium border border-gold/20">
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-royal" /> Laboratories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {dept.labs.map((lab) => (
              <div key={lab} className="bg-surface rounded-lg p-4 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center shrink-0">
                  <FlaskConical className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm text-foreground">{lab}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <FlaskConical className="w-6 h-6 text-royal" /> Research Focus Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {dept.researchAreas.map((area) => (
              <span key={area} className="bg-royal/10 text-royal px-4 py-2 rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-surface mb-4">
            Join {dept.shortName} at <span className="text-gradient-gold">MITS</span>
          </h2>
          <p className="text-gold-light/70 mb-8">Start your journey in {dept.name} today.</p>
          <Link to="/admissions" className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-3.5 rounded-md transition-all hover:shadow-gold">
            Apply Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DepartmentDetail;
