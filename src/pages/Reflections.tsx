import Layout from "@/components/Layout";

const reflections = [
  {
    date: "March 2026",
    title: "On the patience that learning requires",
    excerpt:
      "We live in a culture that celebrates speed and decisive action. But the most meaningful learning I have witnessed — in leaders, in teams, in organisations — has always taken time. It requires patience with uncertainty and the willingness to sit with questions before reaching for answers.",
  },
  {
    date: "January 2026",
    title: "Leadership as a practice, not a position",
    excerpt:
      "One of the most persistent misunderstandings about leadership is that it is something you become rather than something you do. The leaders who grow the most are those who treat leadership as a daily practice — something to be refined, reflected on and continually developed.",
  },
  {
    date: "November 2025",
    title: "What organisations forget about change",
    excerpt:
      "Organisations often approach change as a project with a clear beginning, middle and end. But the most important changes — shifts in culture, mindset and capability — are ongoing. They require structures that support continuous learning and adaptation.",
  },
  {
    date: "September 2025",
    title: "The value of learning together",
    excerpt:
      "Some of the most powerful learning happens not in formal programs but in the spaces between — in conversations with peers, in shared reflection on difficult experiences, in the act of thinking out loud with someone who listens well.",
  },
];

const Reflections = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <p className="text-label mb-4">Reflections</p>
        <h1 className="mb-8">Observations from practice</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-16">
          Short essays and reflections on leadership, learning, change and the work of helping organisations grow.
        </p>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container-narrow space-y-16">
        {reflections.map((r, i) => (
          <article key={i} className="border-b border-border pb-12 last:border-0">
            <p className="text-sm text-muted-foreground mb-3">{r.date}</p>
            <h2 className="text-2xl md:text-3xl mb-4 font-serif">{r.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{r.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Reflections;
