import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroDunes from "@/assets/hero-dunes.jpg";

const workAreas = [
  {
    title: "Leadership Development",
    description: "Design and facilitation of leadership programs where leaders learn through reflection and practice.",
  },
  {
    title: "Learning Programs & Academies",
    description: "Design and management of learning journeys for professionals at every stage of their career.",
  },
  {
    title: "Organisational Development",
    description: "Supporting organisations and teams in moments of transition, growth or change.",
  },
  {
    title: "Learning Communities",
    description: "Creating spaces where professionals learn with and from each other across boundaries.",
  },
];

const projects = [
  {
    context: "A growing technology company needed to develop its first leadership program for new managers.",
    approach: "Co-designed a six-month learning journey combining reflection, peer learning and practical assignments.",
    outcome: "Forty managers completed the program, creating a shared leadership language across the organisation.",
  },
  {
    context: "An international organisation sought to redesign its internal academy for professional development.",
    approach: "Mapped existing learning needs, redesigned the curriculum and introduced blended learning formats.",
    outcome: "A sustainable academy structure that the internal team could maintain and evolve independently.",
  },
  {
    context: "A team in transition needed support navigating organisational change while maintaining performance.",
    approach: "Facilitated reflection sessions and helped the team develop new ways of working together.",
    outcome: "The team found clarity in their roles and built resilience for the changes ahead.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-foreground">
                Helping organisations create meaningful learning and leadership development.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I work with organisations on learning programs, leadership development and organisational questions — where reflection and practice come together.
              </p>
              <Link to="/contact" className="btn-primary">
                Schedule a conversation
              </Link>
            </div>
            <div className="order-first md:order-last">
              <img
                src={heroDunes}
                alt="Dune landscape at golden hour"
                className="w-full h-80 md:h-[28rem] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I work on */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <p className="text-label mb-4">What I work on</p>
          <h2 className="mb-12 md:mb-16">Areas of practice</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {workAreas.map((area) => (
              <div key={area.title} className="card-soft">
                <h3 className="mb-4">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-label mb-4">How I work</p>
          <h2 className="mb-8">Collaborative by nature</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I work alongside organisations as a partner — designing learning processes, facilitating conversations and adapting as the work unfolds. Every engagement starts with listening and understanding the context before shaping an approach together.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The best results come from combining structure with space for reflection, allowing people and organisations to learn at their own pace.
          </p>
        </div>
      </section>

      {/* Selected practice */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <p className="text-label mb-4">Selected practice</p>
          <h2 className="mb-12 md:mb-16">Recent projects</h2>
          <div className="space-y-8">
            {projects.map((p, i) => (
              <div key={i} className="card-soft grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-label mb-2">Context</p>
                  <p className="text-muted-foreground text-sm">{p.context}</p>
                </div>
                <div>
                  <p className="text-label mb-2">Approach</p>
                  <p className="text-muted-foreground text-sm">{p.approach}</p>
                </div>
                <div>
                  <p className="text-label mb-2">Outcome</p>
                  <p className="text-muted-foreground text-sm">{p.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/reflections" className="btn-outline">Explore reflections & tools</Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-label mb-4">About</p>
          <h2 className="mb-8 mx-auto">The person behind the work</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mx-auto mb-8">
            With over fifteen years at the intersection of leadership, learning and organisational development, I have worked with organisations across industries to design programs and processes that create lasting change.
          </p>
          <Link to="/about" className="btn-outline">Read more</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Let's start a conversation</h2>
          <p className="text-muted-foreground text-lg mx-auto mb-8">
            If you would like to explore whether I can contribute to your work or organisation, I would be glad to hear from you.
          </p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
