import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const services = [
{
  label: "Strategic Advisory",
  title: "Thinking alongside you",
  description:
  "Working as a thought partner on leadership, learning and organisational development questions. This can range from shaping a learning strategy to advising on talent development or supporting leaders through complexity."
},
{
  label: "Program leadership",
  title: "Designing learning journeys that resonate",
  description:
  "Creating learning experiences for leaders and professionals that combine theory with practice, reflection with action. Each program is shaped around the specific context, culture and goals of the organisation."
},
{
  label: "Executive Sparring",
  title: "A partner in navigating complexity",
  description:
  "Sparring for leaders and HR professionals navigating complex challenges. I help clarify what is really going on, bring together different perspectives, and think through choices and interventions that work in practice."
},
];

const WorkingTogether = () =>
<Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <p className="text-label mb-4">Working Together</p>
        <h1 className="mb-8">Ways of collaborating</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-16">
          Collaboration takes shape in the space in between — in how conversations are held, decisions are prepared, and words are weighed. It is in that space that I developed my craft.
          <br /><br />My approach brings different perspectives together, allowing solutions to emerge that are not only well considered, but also supported in practice. I often work with a small group, where trust and constructive challenge can exist side by side.
          <br /><br />Tension is not avoided, but used as a source of insight. From this way of working, different forms of collaboration emerge.
        </p>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container-wide space-y-10">
        {services.map((s) =>
      <div key={s.label} className="card-soft">
            <p className="text-label mb-3">{s.label}</p>
            <h2 className="text-2xl md:text-3xl mb-4">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
      )}
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <h2 className="mb-6">Interested in working together?</h2>
        <p className="text-muted-foreground text-lg mx-auto mb-8">
          I would be happy to explore how I can contribute to your organisation's learning and leadership goals.
        </p>
        <Link to="/contact" className="btn-primary">HR mentoring</Link>
      </div>
    </section>
  </Layout>;


export default WorkingTogether;