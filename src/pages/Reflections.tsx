import { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { FileText, Wrench, PenLine, X, Linkedin } from "lucide-react";


const whitepapers = [
{
  title: "De positieve kracht van macht",
  description:
  "An exploration of four types of power dynamics in organisations, analysed through a real learning & development case. Co-authored with Martin Hetebrij, published in Tijdschrift voor Begeleidingskunde (2018).",
  type: "Article",
  pdfUrl: "/publications/de-positieve-kracht-van-macht.pdf",
  language: "Dutch"
},
{
  title: "Werk in transitie — Een HX benadering van organisatieontwerp",
  description:
  "How can organisations design work that truly supports people? This whitepaper explores a Human Experience (HX) approach to organisation design, with reflective dialogue, design space and safe leadership as three guiding pillars.",
  type: "Whitepaper",
  pdfUrl: "/publications/werk-in-transitie.pdf",
  language: "Dutch"
},
{
  title: "De zorgmedewerker van de toekomst ontwikkelt verandervaardigheden",
  description:
  "Why future healthcare professionals need change skills — and how education and practice can develop them together. Published on Zorgonderwijsvernieuwers.",
  type: "Article",
  pdfUrl: "https://www.zorgonderwijsvernieuwers.nl/de-zorgmedewerker-van-de-toekomst-ontwikkelt-verandervaardigheden/",
  language: "Dutch"
},
{
  title: "Els Oosthoek — HRtop100 Podcast",
  description:
  "A conversation about the future of organisational development in healthcare, recorded for the HRtop100 podcast series. Els shares her perspective as Manager Organisatie & Ontwikkeling at Topaz on navigating change when the present is already demanding.",
  type: "Podcast",
  pdfUrl: "https://hrtop100.nl/visies/els-oosthoek/",
  language: "Dutch"
},
{
  title: "Hoe ontwikkel je een leerplatform",
  description:
  "A practical guide on how to develop a learning platform within organisations — from vision and design to implementation and adoption.",
  type: "Whitepaper",
  pdfUrl: "/publications/hoe-ontwikkel-je-een-leerplatform.pdf",
  language: "Dutch"
}];


const HubSpotForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      if ((window as any).hbspt && containerRef.current) {
        (window as any).hbspt.forms.create({
          region: "eu1",
          portalId: "147972525",
          formId: "0b9066c1-1100-4a66-81f1-abfdf9e7b165",
          target: containerRef.current
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={containerRef} />;
};


const Reflections = () => {
  const [downloadModal, setDownloadModal] = useState<{title: string;} | null>(null);

  const handleDownloadClick = (title: string) => {
    setDownloadModal({ title });
  };

  return (
    <Layout>
      {/* Download Modal */}
      {downloadModal &&
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm">
          <div className="bg-background rounded-lg shadow-lg max-w-md w-full mx-4 p-8 relative">
            <button
            onClick={() => setDownloadModal(null)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
            
              <X size={20} />
            </button>
            <h3 className="text-xl font-serif mb-2">{downloadModal.title}</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fill in your details to receive the download link.
            </p>
            <HubSpotForm />
          </div>
        </div>
      }

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
            ​Learning tools   
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
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
              
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
            {whitepapers.map((w, i) =>
            <div key={i} className="card-soft flex flex-col">
                <span className="text-label mb-3">{w.type}</span>
                <h3 className="text-lg md:text-xl mb-4 font-serif">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{w.description}</p>
                {w.pdfUrl ?
              <a
                href={w.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm text-primary font-medium cursor-pointer hover:underline inline-block">
                
                    {w.type === 'Podcast' ? 'Listen to podcast' : w.pdfUrl.startsWith('http') ? 'Read article' : 'Download PDF'}{w.language ? ` (${w.language})` : ''}
                  </a> :

              <p
                onClick={() => handleDownloadClick(w.title)}
                className="mt-6 text-sm text-primary font-medium cursor-pointer hover:underline">
                
                    Download PDF
                  </p>
              }
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Practical L&D Tools */}
      <section id="tools" className="section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-4">
            <Wrench size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl"> Learning Canvases  </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Kurt Lewin said: <em>"There is nothing as practical as a good theory."</em> That's why I love to use evidence-based material in my work. These two canvases, for instance, are based on the eight learning perspectives described by Dutch learning professor Manon Ruijters in <em>Liefde voor Leren</em> (Kluwer, 2006).
          </p>

          <div className="card-soft max-w-2xl">
            <h3 className="text-xl md:text-2xl font-serif mb-2">Program Development Canvas</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A practical tool with guiding questions for analysing, designing and executing learning interventions — from problem analysis and stakeholder mapping to participant needs and organisational fit.
            </p>
            <a
              href="/publications/program-development-canvas.docx"
              download
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
              
              <FileText size={16} />
              Download Canvas (Word)
            </a>
          </div>
        </div>
      </section>
    </Layout>);

};

export default Reflections;