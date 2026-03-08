import Layout from "@/components/Layout";
import { FileText, Wrench, PenLine } from "lucide-react";

const reflections = [
  {
    date: "March 2026",
    title: "On the patience that learning requires",
    excerpt:
      "We live in a culture that celebrates speed and decisive action. But the most meaningful learning I have witnessed — in leaders, in teams, in organisations — has always taken time.",
  },
  {
    date: "January 2026",
    title: "Leadership as a practice, not a position",
    excerpt:
      "One of the most persistent misunderstandings about leadership is that it is something you become rather than something you do.",
  },
  {
    date: "November 2025",
    title: "What organisations forget about change",
    excerpt:
      "Organisations often approach change as a project with a clear beginning, middle and end. But the most important changes are ongoing.",
  },
];

const whitepapers = [
  {
    title: "Designing leadership programs that last",
    description:
      "A practical exploration of what makes leadership development programmes sustainable — from design principles to embedding learning in everyday work.",
    type: "Whitepaper",
  },
  {
    title: "From training to learning culture",
    description:
      "How organisations can shift from one-off training events towards a culture where continuous learning is woven into the fabric of work.",
    type: "Whitepaper",
  },
  {
    title: "The role of reflection in professional development",
    description:
      "Why structured reflection matters for professionals and how to create the conditions for it within organisations.",
    type: "Article",
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

const Reflections = () => (
  <Layout>
    {/* Header */}
    <section className="section-padding">
      <div className="container-narrow">
        <p className="text-label mb-4">Reflections & Inspiration</p>
        <h1 className="mb-8">Ideas, tools and perspectives from practice</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          A space for sharing thinking about leadership, learning and organisational development — through short reflections, longer publications and practical tools.
        </p>
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

    {/* Reflections */}
    <section id="reflections" className="section-padding">
      <div className="container-wide">
        <div className="flex items-center gap-3 mb-10">
          <PenLine size={20} className="text-primary" />
          <h2 className="text-2xl md:text-3xl">Reflections</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reflections.map((r, i) => (
            <article key={i} className="card-soft flex flex-col">
              <p className="text-sm text-muted-foreground mb-3">{r.date}</p>
              <h3 className="text-lg md:text-xl mb-4 font-serif">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{r.excerpt}</p>
              <p className="mt-6 text-sm text-primary font-medium cursor-pointer hover:underline">Read more</p>
            </article>
          ))}
        </div>
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
              <p className="mt-6 text-sm text-primary font-medium cursor-pointer hover:underline">Download PDF</p>
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
              <p className="mt-5 text-sm text-primary font-medium cursor-pointer hover:underline">Download</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Reflections;
