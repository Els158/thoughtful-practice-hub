import Layout from "@/components/Layout";
import { Mail, Calendar } from "lucide-react";
import elsPortrait from "@/assets/els-portrait-brown.jpg";

const NlContact = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-label mb-4">Contact</p>
            <h1 className="mb-8">Laten we kennismaken</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Benieuwd of ik wat voor je kan betekenen? Stel gerust je vraag.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:els.oosthoek@xs4all.nl"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} className="text-primary" />
                <span>els.oosthoek@xs4all.nl</span>
              </a>

              <a
                href="https://www.linkedin.com/in/elsoosthoek/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Els Oosthoek | LinkedIn</span>
              </a>

              <a
                href="https://calendly.com/oosthoek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Calendar size={20} className="text-primary" />
                <span>Plan een afspraak</span>
              </a>
            </div>
          </div>

          <div>
            <img
              src={elsPortrait}
              alt="Els Oosthoek"
              className="w-full max-w-xs mx-auto rounded-2xl object-cover object-top shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NlContact;
