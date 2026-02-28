import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, FlaskConical, Award, GraduationCap, Monitor, Cpu, Zap, Building2, Cog, HardHat } from "lucide-react";

export interface DepartmentInfo {
  slug: string;
  name: string;
  shortName: string;
  icon: any;
  color: string;
  hod: string;
  established: string;
  students: string;
  faculty: string;
  description: string;
  programs: string[];
  highlights: string[];
  labs: string[];
  placementRate: string;
  avgPackage: string;
  researchAreas: string[];
}

export const departmentsData: DepartmentInfo[] = [
  {
    slug: "computer-science-engineering",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    icon: Monitor,
    color: "bg-royal",
    hod: "Dr. K. Ramesh Kumar",
    established: "1998",
    students: "720",
    faculty: "55",
    description: "The Department of CSE is the flagship department of MITS, offering cutting-edge programs in software engineering, artificial intelligence, data science, and cybersecurity. With NBA accreditation and state-of-the-art computing facilities, the department produces industry-ready professionals who excel in top tech companies worldwide.",
    programs: ["B.Tech in CSE", "B.Tech in AI & ML", "B.Tech in Data Science", "M.Tech in CSE", "PhD in CSE"],
    highlights: ["NBA Accredited", "98% Placement Rate", "42 LPA Highest Package", "ACM & IEEE Student Chapters", "Industry 4.0 Lab"],
    labs: ["Advanced Programming Lab", "AI & Machine Learning Lab", "Cloud Computing Lab", "Cybersecurity Lab", "Data Science Lab", "Software Engineering Lab"],
    placementRate: "98%",
    avgPackage: "9.2 LPA",
    researchAreas: ["Artificial Intelligence", "Machine Learning", "Cloud Computing", "Cybersecurity", "Big Data Analytics", "IoT"],
  },
  {
    slug: "electronics-communication-engineering",
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    icon: Cpu,
    color: "bg-navy",
    hod: "Dr. S. Venkatesh",
    established: "1998",
    students: "480",
    faculty: "40",
    description: "The ECE department focuses on cutting-edge technologies in VLSI design, embedded systems, signal processing, and communication networks. Our graduates are sought after by leading semiconductor and telecom companies.",
    programs: ["B.Tech in ECE", "M.Tech in VLSI & Embedded Systems", "PhD in ECE"],
    highlights: ["NBA Accredited", "94% Placement Rate", "28 LPA Highest Package", "VLSI Design Center", "IoT Innovation Lab"],
    labs: ["VLSI Design Lab", "Embedded Systems Lab", "Communication Systems Lab", "Signal Processing Lab", "IoT Lab", "Microwave Lab"],
    placementRate: "94%",
    avgPackage: "7.8 LPA",
    researchAreas: ["VLSI Design", "Embedded Systems", "Wireless Communication", "Signal Processing", "IoT", "Antenna Design"],
  },
  {
    slug: "electrical-electronics-engineering",
    name: "Electrical & Electronics Engineering",
    shortName: "EEE",
    icon: Zap,
    color: "bg-gold-dark",
    hod: "Dr. M. Anitha",
    established: "1998",
    students: "240",
    faculty: "25",
    description: "The EEE department excels in power systems, renewable energy, power electronics, and electrical machines. Our programs prepare students for careers in the energy sector, manufacturing, and automation.",
    programs: ["B.Tech in EEE", "M.Tech in Power Electronics", "PhD in EEE"],
    highlights: ["92% Placement Rate", "22 LPA Highest Package", "Renewable Energy Lab", "Smart Grid Research"],
    labs: ["Power Systems Lab", "Power Electronics Lab", "Electrical Machines Lab", "Control Systems Lab", "Renewable Energy Lab"],
    placementRate: "92%",
    avgPackage: "7.2 LPA",
    researchAreas: ["Renewable Energy", "Power Electronics", "Smart Grids", "Electric Vehicles", "Control Systems"],
  },
  {
    slug: "mechanical-engineering",
    name: "Mechanical Engineering",
    shortName: "ME",
    icon: Cog,
    color: "bg-royal",
    hod: "Dr. P. Suresh",
    established: "1998",
    students: "480",
    faculty: "38",
    description: "The Mechanical Engineering department combines traditional manufacturing excellence with modern technologies like CAD/CAM, robotics, and additive manufacturing. Students gain hands-on experience in well-equipped workshops and labs.",
    programs: ["B.Tech in ME", "M.Tech in Thermal Engineering", "PhD in ME"],
    highlights: ["90% Placement Rate", "18 LPA Highest Package", "CAD/CAM Center", "Robotics Lab"],
    labs: ["Thermal Engineering Lab", "CAD/CAM Lab", "Robotics Lab", "Manufacturing Lab", "Material Testing Lab", "Fluid Mechanics Lab"],
    placementRate: "90%",
    avgPackage: "6.5 LPA",
    researchAreas: ["Thermal Engineering", "Robotics", "Additive Manufacturing", "Composite Materials", "Renewable Energy"],
  },
  {
    slug: "civil-engineering",
    name: "Civil Engineering",
    shortName: "CE",
    icon: HardHat,
    color: "bg-navy",
    hod: "Dr. R. Lakshmi",
    established: "1998",
    students: "240",
    faculty: "22",
    description: "The Civil Engineering department focuses on structural engineering, environmental engineering, transportation, and geotechnical engineering. Our graduates contribute to nation-building through infrastructure development.",
    programs: ["B.Tech in CE", "M.Tech in Structural Engineering", "PhD in CE"],
    highlights: ["88% Placement Rate", "15 LPA Highest Package", "Environmental Lab", "Survey Camp"],
    labs: ["Structural Engineering Lab", "Environmental Engineering Lab", "Geotechnical Lab", "Survey Lab", "Concrete Technology Lab", "Transportation Lab"],
    placementRate: "88%",
    avgPackage: "5.8 LPA",
    researchAreas: ["Structural Engineering", "Green Buildings", "Water Treatment", "Transportation", "Geotechnical Engineering"],
  },
  {
    slug: "information-technology",
    name: "Information Technology",
    shortName: "IT",
    icon: Monitor,
    color: "bg-gold-dark",
    hod: "Dr. A. Nagaraju",
    established: "2002",
    students: "240",
    faculty: "20",
    description: "The IT department specializes in software development, web technologies, database systems, and network security. With a strong focus on practical skills, graduates are well-prepared for the IT industry.",
    programs: ["B.Tech in IT"],
    highlights: ["96% Placement Rate", "35 LPA Highest Package", "Full Stack Dev Lab", "Cloud Lab"],
    labs: ["Web Technologies Lab", "Database Lab", "Network Security Lab", "Cloud Computing Lab", "Mobile App Lab"],
    placementRate: "96%",
    avgPackage: "8.8 LPA",
    researchAreas: ["Web Technologies", "Cloud Computing", "Network Security", "Full Stack Development", "DevOps"],
  },
];

const Departments = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface mb-4">
              Our <span className="text-gradient-gold">Departments</span>
            </h1>
            <p className="text-gold-light/70 text-lg">
              Six dynamic departments offering world-class education with state-of-the-art facilities, 
              experienced faculty, and exceptional placement records.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Department Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentsData.map((dept, i) => (
              <motion.div
                key={dept.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-surface rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className={`${dept.color} p-6`}>
                  <dept.icon className="w-10 h-10 text-surface mb-3" />
                  <h3 className="font-heading font-bold text-xl text-surface">{dept.name}</h3>
                  <p className="text-surface/70 text-sm mt-1">Est. {dept.established}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {dept.description}
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="text-center bg-cream rounded-lg py-2">
                      <p className="text-lg font-heading font-bold text-navy">{dept.students}</p>
                      <p className="text-[10px] text-muted-foreground">Students</p>
                    </div>
                    <div className="text-center bg-cream rounded-lg py-2">
                      <p className="text-lg font-heading font-bold text-royal">{dept.placementRate}</p>
                      <p className="text-[10px] text-muted-foreground">Placed</p>
                    </div>
                    <div className="text-center bg-cream rounded-lg py-2">
                      <p className="text-lg font-heading font-bold text-gold-dark">{dept.avgPackage}</p>
                      <p className="text-[10px] text-muted-foreground">Avg CTC</p>
                    </div>
                  </div>
                  <Link
                    to={`/departments/${dept.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-royal hover:text-royal-light transition-colors"
                  >
                    View Department <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Departments;
