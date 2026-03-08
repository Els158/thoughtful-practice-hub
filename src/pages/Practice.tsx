import Layout from "@/components/Layout";

const projects = [
  {
    title: "Leadership program for a scaling technology company",
    context: "A fast-growing tech company recognised that its new managers needed support to grow into their roles.",
    approach: "Co-designed a six-month blended leadership program combining workshops, peer coaching and reflective assignments.",
    result: "Forty managers completed the journey, creating a shared leadership culture and language across the organisation.",
  },
  {
    title: "Internal academy redesign for a professional services firm",
    context: "An established firm wanted to modernise its internal learning academy to better serve a diverse workforce.",
    approach: "Conducted a needs analysis, redesigned the curriculum structure and introduced new learning formats including peer learning and case-based workshops.",
    result: "A sustainable academy that the internal team could maintain and evolve, with measurably higher engagement.",
  },
  {
    title: "Team development during organisational transition",
    context: "A leadership team navigating a significant organisational restructuring needed support to maintain cohesion.",
    approach: "Facilitated a series of reflection sessions and team dialogues, helping the group develop clarity about roles, priorities and ways of working.",
    result: "The team emerged with stronger alignment and a shared commitment to supporting each other through the transition.",
  },
  {
    title: "Learning community for senior leaders",
    context: "A group of senior leaders from different organisations wanted a space to learn from each other's experiences.",
    approach: "Designed and facilitated a peer learning community that met quarterly, combining structured dialogue with informal exchange.",
    result: "Participants reported that the community became one of their most valuable sources of professional development and perspective.",
  },
  {
    title: "Onboarding journey for a multinational organisation",
    context: "A multinational needed to rethink its onboarding process for new hires across different regions and functions.",
    approach: "Mapped the employee experience, designed a phased onboarding journey and trained internal facilitators to deliver it locally.",
    result: "A consistent yet flexible onboarding experience that reduced time-to-productivity and increased early engagement.",
  },
];

const Practice = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <p className="text-label mb-4">Practice</p>
        <h1 className="mb-8">Selected projects</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-16">
          A selection of projects and collaborations that illustrate how I work with organisations on leadership, learning and development.
        </p>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container-wide space-y-12">
        {projects.map((p, i) => (
          <div key={i} className="card-soft">
            <h3 className="mb-6 font-serif">{p.title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-label mb-2">Context</p>
                <p className="text-muted-foreground text-sm">{p.context}</p>
              </div>
              <div>
                <p className="text-label mb-2">Approach</p>
                <p className="text-muted-foreground text-sm">{p.approach}</p>
              </div>
              <div>
                <p className="text-label mb-2">Result</p>
                <p className="text-muted-foreground text-sm">{p.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Practice;
