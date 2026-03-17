import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Skills", "Projects", "Certifications", "Education", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-foreground/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="font-bold text-lg tracking-tight group">
          Sanket <span className="text-primary group-hover:text-foreground transition-colors duration-300">Y.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="nav-link">
              {item}
            </button>
          ))}
        </div>

        <button className="md:hidden text-foreground/60 hover:text-foreground transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-foreground/5 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="nav-link text-left py-2">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
