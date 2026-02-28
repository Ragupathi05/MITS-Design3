import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "About MITS", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Research", href: "/research" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
];

const admissionLinks = [
  { label: "Apply Online", href: "/admissions" },
  { label: "Eligibility", href: "/admissions" },
  { label: "Fee Structure", href: "/admissions" },
  { label: "Scholarships", href: "/admissions" },
  { label: "Download Prospectus", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-gold-light/70">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-heading font-bold text-accent-foreground text-lg">
                M
              </div>
              <div>
                <h3 className="text-gold font-heading text-lg font-bold">MITS</h3>
                <p className="text-[10px] tracking-wider uppercase text-gold-light/50">
                  Madanapalle Institute of Technology & Science
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              A premier institution committed to excellence in education, research, and innovation, 
              shaping the leaders of tomorrow.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>Madanapalle, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-gold transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-base mb-4">Admissions</h4>
            <ul className="space-y-2.5">
              {admissionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-gold transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-base mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 8571 280 255</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@mits.ac.in</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  MITS Campus, NH-205,<br />
                  Madanapalle - 517325,<br />
                  Andhra Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gold-light/50">
          <p>© {new Date().getFullYear()} MITS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
