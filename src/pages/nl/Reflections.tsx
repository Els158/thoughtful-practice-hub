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
  title: "Werk in transitie ",
  description:
  "Hoe kunnen organisaties werk zo vormgeven dat het mensen echt ondersteunt?\nDeze whitepaper verkent een Human Experience (HX)-benadering van organisatieontwerp, met reflectieve dialoog, ontwerpruimte en veilig leiderschap als drie leidende principes.",
  type: "Whitepaper",
  pdfUrl: "/publications/werk-in-transitie.pdf",
  language: "Dutch"
},
{
  title: "De zorgmedewerker van de toekomst ontwikkelt verandervaardigheden",
  description:
  "Waarom toekomstige zorgprofessionals veranderkundige vaardigheden nodig hebben — en hoe onderwijs en praktijk die samen kunnen ontwikkelen.\nGepubliceerd op Zorgonderwijsvernieuwers.",
  type: "Article",
  pdfUrl: "https://www.zorgonderwijsvernieuwers.nl/de-zorgmedewerker-van-de-toekomst-ontwikkelt-verandervaardigheden/",
  language: "Dutch"
},
{
  title: "HR Top 100 Podcast",
  description:
  "Een gesprek over de toekomst van organisatieontwikkeling in de zorg, opgenomen voor de HR Top 100 Podcastserie.\nEls deelt haar perspectief als CHRO bij Topaz over het navigeren van verandering in een context waarin het heden al volop vraagt.",
  type: "Podcast",
  pdfUrl: "https://hrtop100.nl/visies/els-oosthoek/",
  language: "Dutch"
},
{
  title: "Walking into the Fog",
  description:
  "Based on a 2023 episode of the Dutch HR Top 100 Podcast, this short essay reflects on the future of healthcare work and the change skills professionals will need.",
  type: "Whitepaper",
  pdfUrl: "/publications/walking-into-the-fog-els-oosthoek.pdf",
  language: "English"
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
    return () => {script.remove();};
  }, []);

  return <div ref={containerRef} />;
};

const NlReflections = () => {
  const [downloadModal, setDownloadModal] = useState<{title: string;} | null>(null);

  const handleDownloadClick = (title: string) => {
    setDownloadModal({ title });
  };

  return (
    <Layout>
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

      <section className="pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="container-narrow">
          <p className="text-label mb-4">Reflections & Inspiration</p>
          <h1>Uit de praktijk</h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-wide flex gap-8 overflow-x-auto">
          <a href="#reflections" className="text-sm tracking-wide py-4 border-b-2 border-primary text-primary font-medium">
            Reflections
          </a>
          <a href="#publications" className="text-sm tracking-wide py-4 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
            Publications
          </a>
          <a href="#tools" className="text-sm tracking-wide py-4 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
            ​Learning Canvases
          </a>
        </div>
      </section>

      <section id="reflections" className="section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-10">
            <PenLine size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl">Reflecties</h2>
          </div>
          <article className="card-soft max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soms valt mij iets op - een gesprek, een afbeelding, een moment op straat - en groeit dat uit tot een reflectie op werk, leiderschap of het gedoe binnen organisaties. Mijn teksten beginnen vaak ergens onverwacht, voordat ze uitkomen bij wat er werkelijk toe doet.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Publicaties
            </p>
            <a
              href="https://www.linkedin.com/in/elsoosthoek/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">​Tools  
              <Linkedin size={16} />
              Follow my reflections on LinkedIn
            </a>
          </article>
        </div>
      </section>

      <section id="publications" className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-10">
            <FileText size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl">Publicaties</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whitepapers.map((w, i) =>
            <div key={i} className="card-soft flex flex-col">
                <span className="text-label mb-3">{w.type}</span>
                <h3 className="text-lg md:text-xl mb-4 font-serif">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 whitespace-pre-wrap">{w.description}</p>
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

      <section id="tools" className="section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-4">
            <Wrench size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl">Learning Canvases</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Learning is at the heart of organisational development. In the coming months, I will build a collection of evidence- and theory-based canvases here that can support organisations during transformations. The first is the Program Development Canvas, based on the eight learning perspectives described by Dutch learning scholar Manon Ruijters in <em>Liefde voor Leren</em> (Kluwer, 2006).
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

export default NlReflections;