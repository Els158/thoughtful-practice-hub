import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container-narrow flex flex-col md:flex-row justify-between items-start gap-8">
      <div>
        <p className="font-serif text-lg text-foreground">Name</p>
        <p className="text-sm text-muted-foreground mt-1">
          Leadership · Learning · Organisational Development
        </p>
      </div>
      <div className="flex gap-8 text-sm text-muted-foreground">
        <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
