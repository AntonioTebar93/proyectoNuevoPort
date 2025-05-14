import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Inicio", to: "/" },
  { name: "Sobre mí", to: "/about" },
  { name: "Habilidades", to: "/skills" },
  { name: "Proyectos", to: "/projects" },
  { name: "Contacto", to: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleInicioClick = () => {
    closeMenu();
    if (location.pathname === "/") {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#hero");
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5",
        "dark:gradient-background"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Antonio Tebar</span> DevFolio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) =>
            item.name === "Inicio" ? (
              <button
                key={key}
                onClick={handleInicioClick}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={key}
                to={item.to}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground z-50 mr-4"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-lg transition-transform duration-300 z-40",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {navItems.map((item, key) =>
          item.name === "Inicio" ? (
            <button
              key={key}
              onClick={handleInicioClick}
              className="text-foreground hover:text-primary transition-colors duration-300 text-xl"
            >
              {item.name}
            </button>
          ) : (
            <Link
              key={key}
              to={item.to}
              onClick={closeMenu}
              className="text-foreground hover:text-primary transition-colors duration-300 text-xl"
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};
