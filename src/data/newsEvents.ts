export type NewsEventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  location: string;
  desc: string;
  content: string;
  image: string;
  featured?: boolean;
};

export const newsEvents: NewsEventItem[] = [
  {
    id: "aimex-2k26",
    title: "AIMEX 2K26",
    date: "March 7, 2026",
    time: "9:00 AM – 5:00 PM",
    category: "Event",
    location: "MITS Campus",
    desc: "A one-day national level technical symposium by the Department of CSE (AI & ML).",
    content:
      "AIMEX 2K26 is a national-level technical symposium designed to showcase innovation, coding talent, project demonstrations, and technical paper presentations. Students from various institutions participate in competitive and collaborative tracks focused on AI and machine learning applications. The event includes keynote sessions, department-led workshops, and interactive technical rounds.",
    image: "news-events/aimex-2026.jpg",
    featured: true,
  },
  {
    id: "icotl-2026",
    title: "International Conference on Optimization Techniques for Learning (ICOTL 2026)",
    date: "March 6, 2026",
    time: "9:00 AM – 5:00 PM",
    category: "Conference",
    location: "MITS Campus",
    desc: "AICTE-sponsored international conference organized by the Department of CSE.",
    content:
      "ICOTL 2026 brings together researchers, academicians, and industry professionals to discuss optimization techniques for next-generation learning systems. The conference covers AI, machine learning, data-driven methods, and education-focused optimization strategies. Technical sessions, invited talks, and paper presentations provide a strong platform for academic exchange.",
    image: "news-events/icotl-2026.jpg",
    featured: true,
  },
  {
    id: "digital-era-fdp-2026",
    title: "Online FDP: AI and Cybersecurity in the Digital Era",
    date: "March 9, 2026",
    time: "9:00 AM – 5:00 PM",
    category: "Workshop",
    location: "Online",
    desc: "Six-day faculty development programme on AI, LLMs, cybersecurity, and e-commerce analytics.",
    content:
      "This faculty development programme focuses on contemporary themes such as generative AI, LLM-based applications, cybersecurity practices, federated systems, and digital commerce analytics. The sessions are designed for faculty members and research scholars seeking practical exposure to current technologies and teaching applications.",
    image: "news-events/digital-era.jpg",
    featured: true,
  },
  {
    id: "smruthi-sangamam-2026",
    title: "Smruthi Sangamam 2026",
    date: "February 28, 2026",
    time: "9:30 AM – 12:30 PM",
    category: "Alumni",
    location: "MITS Campus",
    desc: "A reunion event celebrating alumni connections and department memories.",
    content:
      "Smruthi Sangamam is an alumni reunion focused on strengthening mentorship, networking, and institutional bonding. Alumni interact with students and faculty, share industry insights, and revisit departmental milestones. The event reinforces long-term engagement between graduates and the university community.",
    image: "news-events/smruthi-sangamam.jpg",
  },
  {
    id: "3k-run-awareness",
    title: "Awareness Programme - 3K Run",
    date: "February 2026",
    time: "Morning Session",
    category: "Awareness",
    location: "MITS & Madanapalle",
    desc: "3 Kilometer Run organized with district police under the slogan “Say No to Drugs – Yes to Life”.",
    content:
      "MITS, in collaboration with the Annamayya District Police Department, organized a 3K awareness run to encourage healthy living and anti-drug awareness. The programme included public participation, institutional leadership presence, and student-driven awareness activities, emphasizing social responsibility and youth engagement.",
    image: "news-events/3k-run.jpg",
  },
  {
    id: "microsoft-industrial-visit-2026",
    title: "Industrial Visit to Microsoft, Bengaluru",
    date: "2026",
    time: "Full Day",
    category: "Industrial Visit",
    location: "Microsoft, Bengaluru",
    desc: "CSE Data Science students participated in an industry-focused learning visit.",
    content:
      "The industrial visit to Microsoft provided students with exposure to enterprise technology environments, engineering workflows, and innovation culture. Participants interacted with professionals, observed practical use-cases, and gained insights into career pathways, product engineering, and large-scale software systems.",
    image: "news-events/microsoft-visit.jpg",
  },
  {
    id: "mca-alumni-meet-2026",
    title: "MCA Alumni Meet 2026",
    date: "2026",
    time: "Evening Session",
    category: "Alumni",
    location: "MITS Campus",
    desc: "MCA alumni meet organized with Alumni Relations to strengthen academic and professional connections.",
    content:
      "The MCA Alumni Meet brought together graduates, faculty, and students for an exchange of experiences and guidance. The programme highlighted career journeys, technology trends, and opportunities for mentoring. It also reinforced alumni participation in curriculum enrichment and student development initiatives.",
    image: "news-events/mca-alumni.jpg",
  },
  {
    id: "rampex-mou-2026",
    title: "MoU with Rampex Technologies",
    date: "2026",
    time: "Official Ceremony",
    category: "MoU",
    location: "MITS Campus",
    desc: "Industry-academia collaboration to support hands-on training and career readiness.",
    content:
      "MITS signed a Memorandum of Understanding with Rampex Technologies to bridge academic learning with industry needs. The collaboration supports skill training, project exposure, internship opportunities, and placement readiness in contemporary domains including software engineering and emerging technologies.",
    image: "news-events/rampex-mou.jpg",
  },
  {
    id: "ieee-guest-lecture-2026",
    title: "Guest Lecture: VLSI and Electromagnetics",
    date: "2026",
    time: "Afternoon Session",
    category: "Guest Lecture",
    location: "MITS Campus",
    desc: "Special guest lecture organized by ECE and Skill Development Cell with MITS IETE chapter support.",
    content:
      "This guest lecture focused on the academic-to-industry pathway in VLSI and electromagnetics. The session introduced practical engineering contexts, core domain opportunities, and higher-study/career direction for students. Faculty and students engaged in technical discussions and interactive Q&A.",
    image: "news-events/ieee-guest-lecture.jpg",
  },
];
