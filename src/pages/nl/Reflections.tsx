import { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { FileText, Wrench, PenLine, X, Linkedin } from "lucide-react";

const whitepapers = [
{
  title: "De positieve kracht van macht",
  description:
  "Een verkenning van vier typen machtsdynamiek in organisaties, geanalyseerd aan de hand van een concrete casus uit leren en ontwikkelen. Geschreven samen met Martin Hetebrij, gepubliceerd in Tijdschrift voor Begeleidingskunde (2018).",
  type: "Artikel",
  pdfUrl: "/publications/de-positieve-kracht-van-macht.pdf",
  language: "Nederlands"
},
{
  title: "Werk in transitie",
  description:
  "Hoe kunnen organisaties werk ontwerpen dat mensen echt ondersteunt? Deze whitepaper verkent een Human Experience (HX)-benadering van organisatieontwerp, met reflectieve dialoog, ontwerpruimte en veilig leiderschap als drie leidende pijlers.",
  type: "Whitepaper",
  pdfUrl: "/publications/werk-in-transitie.pdf",
  language: "Nederlands"
},
{
  title: "De zorgmedewerker van de toekomst ontwikkelt verandervaardigheden",
  description:
  "Waarom toekomstige zorgprofessionals veranderkundige vaardigheden nodig hebben — en hoe onderwijs en praktijk die samen kunnen ontwikkelen. Gepubliceerd op Zorgonderwijsvernieuwers.",
  type: "Artikel",
  pdfUrl: "https://www.zorgonderwijsvernieuwers.nl/de-zorgmedewerker-van-de-toekomst-ontwikkelt-verandervaardigheden/",
  language: "Nederlands"
},
{
  title: "HR Top 100 Podcast",
  description:
  "Een gesprek over de toekomst van organisatieontwikkeling in de zorg, opgenomen voor de HR Top 100 Podcast-serie. Els deelt haar perspectief als CHRO bij Topaz over het navigeren van verandering wanneer het heden al veeleisend is.",
  type: "Podcast",
  pdfUrl: "https://hrtop100.nl/visies/els-oosthoek/",
  language: "Nederlands"
},
{
  title: "Walking into the Fog",
  description:
  "Gebaseerd op een aflevering uit 2023 van de HR Top 100 Podcast reflecteert dit korte essay op de toekomst van zorgwerk en de verandervaardigheden die professionals nodig zullen hebben.",
  type: "Whitepaper",
  pdfUrl: "/publications/walking-into-the-fog-els-oosthoek.pdf",
  language: "Engels"
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
              Vul je gegevens in om de downloadlink te ontvangen.
            </p>
            <HubSpotForm />
          </div>
        </div>
      }

      <section className="pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="container-narrow">
          <p className="text-label mb-4">Reflecties & Inspiratie</p>
          <h1>Ideeën uit de praktijk</h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-wide flex gap-8 overflow-x-auto">
          <a href="#reflections" className="text-sm tracking-wide py-4 border-b-2 border-primary text-primary font-medium">
            Reflecties
          </a>
          <a href="#publications" className="text-sm tracking-wide py-4 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
            Publicaties & whitepapers
          </a>
          <a href="#tools" className="text-sm tracking-wide py-4 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
            ​Tools
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
              Af en toe trekt iets mijn aandacht — een gesprek, een beeld, een moment in de keuken — en dat wordt een reflectie over werk, leiderschap of het leven in organisaties. Mijn schrijven begint vaak op een onverwachte plek, voordat het zijn weg vindt naar wat er toe doet in organisaties.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Deze reflecties staan op LinkedIn, waar ze het soort gesprekken oproepen dat ik het meest waardeer: eerlijk, nieuwsgierig en soms een beetje ongemakkelijk.
            </p>
            <a
              href="https://www.linkedin.com/in/elsoosthoek/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
              <Linkedin size={16} />
              Volg mijn reflecties op LinkedIn
            </a>
          </article>
        </div>
      </section>

      <section id="publications" className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-10">
            <FileText size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl">Publicaties & whitepapers</h2>
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
                    {w.type === 'Podcast' ? 'Luister naar de podcast' : w.pdfUrl.startsWith('http') ? 'Lees artikel' : 'Download PDF'}{w.language ? ` (${w.language})` : ''}
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
            <h2 className="text-2xl md:text-3xl">Tools</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Leren staat centraal in organisatieontwikkeling. De komende maanden bouw ik hier een collectie evidence- en theorie-gebaseerde canvassen op die organisaties kunnen ondersteunen bij transformaties. De eerste is de Programma Development checklist, gebaseerd op de acht leerperspectieven beschreven door leeronderzoeker Manon Ruijters in <em>Liefde voor Leren</em> (Kluwer, 2006).
          </p>
          <div className="card-soft max-w-2xl">
            <h3 className="text-xl md:text-2xl font-serif mb-2">Programma Development checklist</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Een praktisch hulpmiddel met sturende vragen voor het analyseren, ontwerpen en uitvoeren van leerinterventies — van probleemanalyse en stakeholdermapping tot deelnemersbehoeften en organisatorische fit.
            </p>
            <a
              href="/publications/program-development-canvas.docx"
              download
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
              <FileText size={16} />
              Download checklist (Word)
            </a>
          </div>
        </div>
      </section>
    </Layout>);
};

export default NlReflections;