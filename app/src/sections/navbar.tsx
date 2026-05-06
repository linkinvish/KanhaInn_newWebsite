import { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Rooms", href: "#rooms" },
    { label: "Blog", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/kanha-inn-logo.jpg"
              alt="Kanha Inn"
              className="h-10 w-auto rounded"
            />
            <span className="text-xl font-bold text-gray-900">Kanha Inn</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.label === "Home"
                    ? "text-amber-500"
                    : "text-gray-600 hover:text-amber-500"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Phone className="w-4 h-4" />
              <span>+91 88010 46444</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Mail className="w-4 h-4" />
              <span className="hidden xl:inline">lko.kanhainn@gmail.com</span>
            </div>
            <a
              href="tel:+918801046444"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-md transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/918801046444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-green-brand text-green-brand hover:bg-green-50 text-sm font-semibold rounded-md transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-gray-700 hover:text-amber-500 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <a
                href="tel:+918801046444"
                className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-md"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 88010 46444
              </a>
              <a
                href="https://wa.me/918801046444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-green-brand text-green-brand text-sm font-semibold rounded-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
