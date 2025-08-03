import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { section: "hero", label: "Home" },
    { section: "about", label: "About Contest" },
    { section: "participate", label: "Submit Entry" },
    { section: "gallery", label: "Global Gallery" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2">
            <Calendar className="h-8 w-8 text-white" />
            <span className="text-lg font-bold text-white">
              Global Ganesh Utsav
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white hover:bg-white/20"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="text-sm font-medium transition-colors text-white hover:text-white/80 text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection('submit')} variant="outline" size="sm" className="w-fit bg-white text-orange-500 border-white hover:bg-white/90">
                Participate Now!
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;