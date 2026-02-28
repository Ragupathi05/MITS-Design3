import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Departments", href: "/departments" },
  { label: "Admissions", href: "/admissions" },
  { label: "Research", href: "/research" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Contact", href: "/contact" },
];

const utilityLinks = [
  { label: "Student Portal", href: "#" },
  { label: "Faculty Login", href: "#" },
  { label: "ERP", href: "#" },
  { label: "Admission Helpline: 1800-123-4567", href: "tel:18001234567" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-navy text-sm hidden lg:block">
        <div className="container mx-auto flex items-center justify-between py-1.5 px-4">
          <div className="flex items-center gap-4">
            {utilityLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gold-light/80 hover:text-gold transition-colors text-xs tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:info@mits.ac.in" className="text-gold-light/80 hover:text-gold transition-colors text-xs">
              info@mits.ac.in
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg"
            : "bg-navy"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-heading font-bold text-accent-foreground text-lg">
              M
            </div>
            <div className="hidden sm:block">
              <h1 className="text-gold font-heading text-lg font-bold leading-tight">MITS</h1>
              <p className="text-gold-light/70 text-[10px] tracking-wider uppercase">
                Madanapalle Institute of Technology & Science
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === item.href
                    ? "text-gold"
                    : "text-muted-foreground/90 hover:text-gold"
                }`}
                style={{ color: location.pathname === item.href ? undefined : "hsl(210 20% 80%)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="text-gold-light/70 hover:text-gold transition-colors hidden lg:block">
              <Search className="w-4 h-4" />
            </button>
            <Link
              to="/admissions"
              className="hidden sm:inline-flex bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-5 py-2 rounded-md text-sm transition-all hover:shadow-gold"
            >
              Apply Now
            </Link>
            <button
              className="lg:hidden text-gold"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-navy-light overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="py-2.5 px-3 text-sm rounded-md text-gold-light/80 hover:text-gold hover:bg-navy transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/admissions"
                  className="mt-2 bg-gold text-accent-foreground font-semibold py-2.5 px-3 rounded-md text-sm text-center"
                >
                  Apply Now
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
