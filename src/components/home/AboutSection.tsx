import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import campusBuilding from "@/assets/campus-building.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Shaping Futures Through{" "}
              <span className="text-royal">Academic Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Madanapalle Institute of Technology & Science (MITS) is a premier institution 
              dedicated to providing quality education in engineering, technology, and sciences. 
              With NAAC A+ accreditation and UGC recognition, MITS stands as a beacon of 
              academic excellence in Andhra Pradesh.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our mission is to nurture innovative thinking, foster research, and develop 
              industry-ready professionals who contribute meaningfully to society and the nation.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-l-4 border-gold pl-4">
                <h4 className="font-heading font-semibold text-foreground">Vision</h4>
                <p className="text-sm text-muted-foreground">To be a globally recognized institution of academic excellence.</p>
              </div>
              <div className="border-l-4 border-royal pl-4">
                <h4 className="font-heading font-semibold text-foreground">Mission</h4>
                <p className="text-sm text-muted-foreground">Empowering students through innovation, research, and industry partnerships.</p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex bg-navy hover:bg-navy-light text-gold font-semibold px-6 py-3 rounded-md transition-all text-sm"
            >
              Read More About MITS
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={campusBuilding}
              alt="MITS Campus Building"
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-gold hidden md:block">
              <div className="text-3xl font-heading font-bold text-accent-foreground">25+</div>
              <div className="text-sm font-medium text-accent-foreground/80">Years of Legacy</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
