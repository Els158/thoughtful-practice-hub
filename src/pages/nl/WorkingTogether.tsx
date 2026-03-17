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
  label: "Program Design",
  title: "Designing learning journeys that resonate",
  description:
  "Creating learning experiences for leaders and professionals that combine theory with practice, reflection with action. Each program is shaped around the specific context, culture and goals of the organisation."
},
{
  label: "Program Leadership",
  title: "Guiding learning programs from vision to impact",
  description:
  "Managing and guiding leadership development programs or internal academies — from initial design through delivery and evaluation. I bring structure, strategic oversight and a deep understanding of how people learn."
},
{
  label: "Facilitation & Reflection",
  title: "Creating space for insight and growth",
  description:
  "Leading sessions, conversations and reflection spaces for leaders and teams. Whether it is a single workshop or an ongoing series, I create environments where honest dialogue and new perspectives can emerge."
}];


const NlWorkingTogether = () =>
<Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <p className="text-label mb-4">​Samenwerken </p>
        <h1 className="mb-8">​Hoe we kunnen samenwerken       </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-16">
          ​HR challenges come in many shapes and forms.
We can work together in different ways, depending on what is needed. Below is a selection of the work I do.
I enjoy working on questions that truly matter.
        
      </p>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container-wide space-y-10">
        {services.map((s) => <div key={s.label} className="card-soft">
            <p className="text-label mb-3">{s.label}</p>
            <h2 className="text-2xl md:text-3xl mb-4">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </div>)}
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <h2 className="mb-6">Interested in working together?</h2>
        <p className="text-muted-foreground text-lg mx-auto mb-8">
          I would be happy to explore how I can contribute to your organisation's learning and leadership goals.
        </p>
        <Link to="/nl/contact" className="btn-primary">Start a conversation</Link>
      </div>
    </section>
  </Layout>;

export default NlWorkingTogether;