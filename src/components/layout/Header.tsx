import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { schoolInfo } from "@/data/sampleContent";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About", hasDropdown: true },
    { to: "/gallery", label: "Gallery" },
    { to: "/calendar", label: "Academic Calendar" },
    { to: "/contact", label: "Contact" },
    { to: "/downloads", label: "Downloads" },
  ];

  const aboutSubLinks = [
    { to: "/about/principals-desk", label: "Principal's Desk" },
    { to: "/about/managers-desk", label: "Manager's Desk" },
    { to: "/about/about-school", label: "About School" },
    { to: "/about/facility", label: "Facilities" },
    { to: "/about/achievement", label: "Achievements" },
    { to: "/about/vision-mission", label: "Vision & Mission" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      {/* Top contact bar - hidden on mobile */}
      <div className="hidden lg:block bg-primary/95 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center gap-6 text-sm text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{schoolInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{schoolInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="max-w-md truncate">{schoolInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and school name */}
        {/* Logo and school name */}
<Link to="/" className="flex items-center gap-3 group" aria-label={`${schoolInfo.name} - Home`}>
  <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110 bg-transparent">
    <img
      src="/logo.jpg"
      alt={`${schoolInfo.name} logo`}
      className="h-full w-full object-cover"
      loading="lazy"
      draggable={false}
    />
  </div>
  <div className="hidden sm:block">
    <h1 className="text-xl font-heading font-bold text-primary-foreground leading-tight">
      {schoolInfo.name}
    </h1>
    <p className="text-xs text-primary-foreground/80">{schoolInfo.tagline || "Excellence in Education"}</p>
  </div>
</Link>


          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.to} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <Link
                      to={link.to}
                      className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-all flex items-center gap-1"
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    <div
                      className="absolute top-full left-0 mt-1 w-56 bg-background shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                      onMouseLeave={() => setAboutDropdownOpen(false)}
                    >
                      {aboutSubLinks.map((subLink) => (
                        <Link
                          key={subLink.to}
                          to={subLink.to}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-all"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2 border-t border-primary-foreground/10 pt-4">
            {navLinks.map((link) => (
              <div key={link.to}>
                <Link
                  to={link.to}
                  className="block px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-all"
                  onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 space-y-1 mt-1">
                    {aboutSubLinks.map((subLink) => (
                      <Link
                        key={subLink.to}
                        to={subLink.to}
                        className="block px-4 py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Contact info for mobile */}
            <div className="mt-4 pt-4 border-t border-primary-foreground/10 space-y-2 px-4">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>{schoolInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>{schoolInfo.email}</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
