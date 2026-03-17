import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const enLinks = [
  { to: "/", label: "Home" },
  { to: "/working-together", label: "Working Together" },
  { to: "/about", label: "About" },
  { to: "/reflections", label: "Reflections & Inspiration" },
  { to: "/contact", label: "Contact" },
];

const nlLinks = [
  { to: "/nl", label: "Home" },
  { to: "/nl/working-together", label: "Samenwerken" },
  { to: "/nl/about", label: "About" },
  { to: "/nl/reflections", label: "Inspiratie & tools" },
  { to: "/nl/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isNl = location.pathname.startsWith("/nl");
  const links = isNl ? nlLinks : enLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container-wide flex items-center justify-between h-20">
        <Link to={isNl ? "/nl" : "/"} className="font-serif text-xl tracking-tight text-foreground">
          Els Oosthoek
        </Link>

        {/* Desktop nav + lang switcher */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                location.pathname === l.to
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle isNl={isNl} pathname={location.pathname} />
        </div>

        {/* Mobile: lang switcher + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageToggle isNl={isNl} pathname={location.pathname} />
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block text-sm tracking-wide ${
                location.pathname === l.to
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const LanguageToggle = ({ isNl, pathname }: { isNl: boolean; pathname: string }) => {
  // Map current path to the equivalent in the other language
  const getOtherLangPath = () => {
    if (isNl) {
      // Strip /nl prefix to get EN path
      const enPath = pathname.replace(/^\/nl/, "") || "/";
      return enPath;
    } else {
      // Add /nl prefix
      return pathname === "/" ? "/nl" : `/nl${pathname}`;
    }
  };

  return (
    <div className="flex items-center gap-1 text-xs tracking-widest font-sans">
      <Link
        to={isNl ? getOtherLangPath() : pathname}
        className={`transition-colors duration-200 ${
          !isNl ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </Link>
      <span className="text-border">/</span>
      <Link
        to={isNl ? pathname : getOtherLangPath()}
        className={`transition-colors duration-200 ${
          isNl ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        NL
      </Link>
    </div>
  );
};

export default Navbar;
