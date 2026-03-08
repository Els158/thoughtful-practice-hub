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

const analysisCanvas = {
  title: "Program Development Canvas — Analysis",
  subtitle: "What questions can we ask to gather all relevant information before starting to design a learning intervention?",
  sections: [
    {
      title: "Content of the issue",
      color: "bg-primary/10 border-primary/20",
      questions: [
        "What content should be included in the solution?",
        "What content works or doesn't work in this context?",
        "What should participants know, be able to do, and how should they do it?",
        "Which competencies are involved?",
        "What attitude or mindset is important?",
      ],
    },
    {
      title: "Problem situation",
      color: "bg-primary/10 border-primary/20",
      questions: [
        "What is the current situation?",
        "What exactly is the problem?",
        "For whom is this a problem?",
        "What do you think is the real problem?",
        "Does the problem have multiple causes?",
        "Since when has this been a problem?",
        "What happens if we do nothing?",
      ],
    },
    {
      title: "Motivation & needs of participants",
      color: "bg-accent/30 border-accent/40",
      questions: [
        "What motivates the participants?",
        "How involved do they feel with the problem?",
        "Is there resistance?",
        "What do participants need in order to learn?",
        "What would make participants say: yes, I want that!",
      ],
    },
    {
      title: "Stakeholder analysis",
      color: "bg-accent/30 border-accent/40",
      questions: [
        "Who is involved in the issue?",
        "What are their perspectives and interests?",
        "What do they expect from a solution?",
        "Who can influence the process?",
        "Where might resistance arise?",
      ],
    },
  ],
};

const executionCanvas = {
  title: "Program Development Canvas — Design & Execution",
  subtitle: "What questions help shape the learning intervention, aligned with the organisation, the client and the participants?",
  sections: [
    {
      title: "Images of client & advisor",
      color: "bg-primary/10 border-primary/20",
      questions: [
        "What are the solution preferences of the client and advisor?",
        "Which solutions have been tried before?",
        "What ideas come to mind immediately?",
        "What approach might work?",
      ],
    },
    {
      title: "Desired outcome",
      color: "bg-primary/10 border-primary/20",
      questions: [
        "What is the desired outcome?",
        "What does success look like?",
        "When should the outcome be achieved?",
        "How do we measure whether the outcome has been achieved?",
      ],
    },
    {
      title: "Differences in how participants learn",
      color: "bg-accent/30 border-accent/40",
      questions: [
        "Who is the target group?",
        "What learning styles or preferences play a role?",
        "How do participants learn best?",
        "How can differences be leveraged in the design?",
      ],
    },
    {
      title: "Fit with organisational strategy",
      color: "bg-accent/30 border-accent/40",
      questions: [
        "What is the link to the mission, vision and goals?",
        "How does this issue relate to organisational objectives?",
        "How does the solution contribute to client value?",
        "Which other departments are involved?",
      ],
    },
  ],
};

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

      {/* Practical L&D Tools — Two Canvases */}
      <section id="tools" className="section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-4">
            <Wrench size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl">Practical L&D Tools</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Two canvases based on the eight perspectives described by Manon Ruijters in <em>Liefde voor Leren</em> (Kluwer, 2006) — split into an analysis phase and a design &amp; execution phase.
          </p>

          {[analysisCanvas, executionCanvas].map((canvas, ci) => (
            <div key={ci} className="mb-16 last:mb-0">
              <div className="card-soft mb-6">
                <h3 className="text-xl md:text-2xl font-serif mb-2">{canvas.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{canvas.subtitle}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {canvas.sections.map((section, si) => (
                  <div key={si} className={`rounded-lg border p-5 ${section.color}`}>
                    <h4 className="font-serif text-base md:text-lg font-medium mb-3">{section.title}</h4>
                    <ul className="space-y-1.5">
                      {section.questions.map((q, qi) => (
                        <li key={qi} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                          <span className="text-primary mt-0.5">›</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Reflections;
