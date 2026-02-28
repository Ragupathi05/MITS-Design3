import { motion } from "framer-motion";
import campusAerial from "@/assets/campus-aerial.jpg";
import campusBuilding from "@/assets/campus-building.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const images = [
  { src: heroCampus, alt: "Campus Walkway", span: "md:col-span-2 md:row-span-2" },
  { src: campusBuilding, alt: "Academic Block", span: "" },
  { src: campusAerial, alt: "Aerial View", span: "" },
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold-dark font-semibold text-sm tracking-wider uppercase mb-2">Campus Gallery</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Life at <span className="text-royal">MITS</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${img.span} rounded-xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
