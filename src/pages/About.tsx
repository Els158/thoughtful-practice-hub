import Layout from "@/components/Layout";
import seascape from "@/assets/seascape.jpg";

const beliefs = [
  "Learning requires time, reflection and the courage to sit with uncertainty.",
  "Leadership is a craft that develops through practice, not through theory alone.",
  "Organisations learn through conversation, experimentation and honest reflection.",
  "The best programs are designed with people, not for them.",
  "Structure creates freedom — when designed thoughtfully.",
];

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-8">
            <p className="text-label">About</p>
            <h1>The person behind the work</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I have always been fascinated by how people and organisations learn — what makes some moments transformative and others forgettable, and how the right structures can create the conditions for real growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over more than fifteen years, I have worked at the intersection of leadership development, organisational change, program design and advisory work. I have designed and led learning programs for leaders, built internal academies, guided teams through transitions and served as a thought partner to organisations navigating complexity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans industries and geographies, but the thread running through it all is a deep commitment to creating meaningful learning experiences — programs and processes that change not just what people know, but how they think and lead.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src={seascape}
              alt="Calm seascape"
              className="w-full h-64 md:h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <p className="text-label mb-4">What I believe</p>
        <h2 className="mb-12">Guiding principles</h2>
        <div className="space-y-6">
          {beliefs.map((b, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-primary text-xl leading-none mt-1">·</span>
              <p className="text-foreground text-lg font-serif italic">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <p className="text-label mb-4">Roles & Networks</p>
        <h2 className="mb-8">Professional life</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Alongside my work with organisations, I serve in various roles that keep me connected to the broader field — as an advisor, facilitator, writer and speaker on topics related to leadership, learning and organisational development.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I am active in professional networks and communities of practice, where I continue to learn from peers and contribute to the evolving conversation about how organisations develop their people.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
