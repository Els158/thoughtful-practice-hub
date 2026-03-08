import { useState } from "react";
import Layout from "@/components/Layout";
import { FileText, Wrench, PenLine, X, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";


const whitepapers = [
  {
    title: "De positieve kracht van macht",
    description:
      "An exploration of four types of power dynamics in organisations, analysed through a real learning & development case. Co-authored with Martin Hetebrij, published in Tijdschrift voor Begeleidingskunde (2018).",
    type: "Article",
    pdfUrl: "/publications/de-positieve-kracht-van-macht.pdf",
    language: "Dutch",
  },
  {
    title: "Werk in transitie — Een HX benadering van organisatieontwerp",
    description:
      "How can organisations design work that truly supports people? This whitepaper explores a Human Experience (HX) approach to organisation design, with reflective dialogue, design space and safe leadership as three guiding pillars.",
    type: "Whitepaper",
    pdfUrl: "/publications/werk-in-transitie.pdf",
    language: "Dutch",
  },
  {
    title: "De zorgmedewerker van de toekomst ontwikkelt verandervaardigheden",
    description:
      "Why future healthcare professionals need change skills — and how education and practice can develop them together. Published on Zorgonderwijsvernieuwers.",
    type: "Article",
    pdfUrl: "https://www.zorgonderwijsvernieuwers.nl/de-zorgmedewerker-van-de-toekomst-ontwikkelt-verandervaardigheden/",
    language: "Dutch",
  },
  {
    title: "Els Oosthoek — HRtop100 Podcast",
    description:
      "A conversation about the future of organisational development in healthcare, recorded for the HRtop100 podcast series. Els shares her perspective as Manager Organisatie & Ontwikkeling at Topaz on navigating change when the present is already demanding.",
    type: "Podcast",
    pdfUrl: "https://hrtop100.nl/visies/els-oosthoek/",
    language: "Dutch",
  },
  {
    title: "Hoe ontwikkel je een leerplatform",
    description:
      "A practical guide on how to develop a learning platform within organisations — from vision and design to implementation and adoption.",
    type: "Whitepaper",
    pdfUrl: "/publications/hoe-ontwikkel-je-een-leerplatform.pdf",
    language: "Dutch",
  },
];

const tools = [
  {
    title: "Leadership reflection canvas",
    description:
      "A structured template for leaders to reflect on their practice, identify patterns and set intentions for growth.",
  },
  {
    title: "Team learning conversation guide",
    description:
      "A facilitation guide for team conversations that move beyond surface-level discussion into genuine shared learning.",
  },
  {
    title: "Program design checklist",
    description:
      "A practical checklist for designing learning programs — from needs analysis to evaluation and sustainability.",
  },
  {
    title: "Onboarding experience mapper",
    description:
      "A visual tool for mapping the new-hire experience across touchpoints, identifying moments that matter most.",
  },
];

const Reflections = () => {
  const [downloadModal, setDownloadModal] = useState<{ title: string } | null>(null);

  const handleDownloadClick = (title: string) => {
    setDownloadModal({ title });
  };

  return (
    <Layout>
      {/* Download Modal */}
      {downloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm">
          <div className="bg-background rounded-lg shadow-lg max-w-md w-full mx-4 p-8 relative">
            <button
              onClick={() => setDownloadModal(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-serif mb-2">{downloadModal.title}</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fill in your details to receive the download link.
            </p>

            {/* 
              HubSpot embed placeholder — replace this form with your HubSpot embedded form.
              You'll need your Portal ID and Form ID from HubSpot:
              
              <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
              <script>
                hbspt.forms.create({
                  region: "eu1",
                  portalId: "YOUR_PORTAL_ID",
                  formId: "YOUR_FORM_ID"
                });
              </script>
            */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Placeholder: will be replaced by HubSpot form
                setDownloadModal(null);
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="your@email.com"
                />
              </div>
              <Button type="submit" className="w-full">
                Get download link
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Your information will be handled according to our privacy policy.
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="container-narrow">
          <p className="text-label mb-4">Reflections & Inspiration</p>
          <h1>Ideas from practice</h1>
        </div>
      </section>

      {/* Sub-navigation */}
      <section className="border-b border-border">
        <div className="container-wide flex gap-8 overflow-x-auto">
          <a href="#reflections" className="text-sm tracking-wide py-4 border-b-2 border-primary text-primary font-medium">
            Reflections
          </a>
          <a href="#publications" className="text-sm tracking-wide py-4 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
            Publications
          </a>
          <a href="#tools" className="text-sm tracking-wide py-4 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
            Practical Tools
          </a>
        </div>
      </section>

      {/* Reflections — LinkedIn */}
      <section id="reflections" className="section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-10">
            <PenLine size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl">Reflections</h2>
          </div>
          <article className="card-soft max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every now and then, something catches my attention - a conversation, an image, a moment in the kitchen - and it turns into a reflection on work, leadership or organisational life. My writing often starts somewhere unexpected, before finding its way to what matters in organisations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These reflections live on LinkedIn, where they tend to spark the kind of conversations I value most: honest, curious and sometimes a little uncomfortable.
            </p>
            <a
              href="https://www.linkedin.com/in/elsoosthoek/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              <Linkedin size={16} />
              Follow my reflections on LinkedIn
            </a>
          </article>
        </div>
      </section>

      {/* Publications / Whitepapers */}
      <section id="publications" className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-10">
            <FileText size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl">Publications & Whitepapers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whitepapers.map((w, i) => (
              <div key={i} className="card-soft flex flex-col">
                <span className="text-label mb-3">{w.type}</span>
                <h3 className="text-lg md:text-xl mb-4 font-serif">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{w.description}</p>
                {w.pdfUrl ? (
                  <a
                    href={w.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-sm text-primary font-medium cursor-pointer hover:underline inline-block"
                  >
                    {w.type === 'Podcast' ? 'Listen to podcast' : w.pdfUrl.startsWith('http') ? 'Read article' : 'Download PDF'}{w.language ? ` (${w.language})` : ''}
                  </a>
                ) : (
                  <p
                    onClick={() => handleDownloadClick(w.title)}
                    className="mt-6 text-sm text-primary font-medium cursor-pointer hover:underline"
                  >
                    Download PDF
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical L&D Tools */}
      <section id="tools" className="section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-4">
            <Wrench size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl">Practical L&D Tools</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Free resources and templates for learning & development professionals, team leads and HR practitioners.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {tools.map((t, i) => (
              <div key={i} className="card-soft">
                <h3 className="text-lg md:text-xl mb-3 font-serif">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.description}</p>
                <p
                  onClick={() => handleDownloadClick(t.title)}
                  className="mt-5 text-sm text-primary font-medium cursor-pointer hover:underline"
                >
                  Download
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reflections;
