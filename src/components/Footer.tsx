import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isNl = location.pathname.startsWith("/nl");
  const contactPath = isNl ? "/nl/contact" : "/contact";

  return (
    <footer className="border-t border-border py-16">
      <div className="container-narrow flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="font-serif text-lg text-foreground">Els Oosthoek</p>
          <p className="text-sm text-muted-foreground mt-1">
            Gentle change. Disruptive learning.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <Link to={contactPath} className="hover:text-foreground transition-colors">Contact</Link>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
