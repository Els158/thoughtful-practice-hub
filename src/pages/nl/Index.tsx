import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroDunes from "@/assets/hero-dunes.jpg";

const workAreas = [
{
  title: "Fractional People & Culture Leadership",
  description: "Providing senior HR leadership and helping organisations align their people strategy with business growth."
},
{
  title: "HR team mentoring",
  description: "Supporting HR professionals in their professional growth while strengthening their impact as business partners."
},
{
  title: "Organisational Development",
  description: "Supporting organisations and teams in moments of transition, growth or change."
},
{
  title: "Learning Communities",
  description: "Creating spaces where professionals learn with and from each other across boundaries."
}];

const NlIndex = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-label mb-3">fractional people & culture leadership</p>
                <h1 className="text-foreground">
                  Ontwikkeling in het       hart van je organisatie.
                
                
                </h1>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Strategic when necessary and hands-on where needed. I work alongside organisations to address the people side of change - a hard skill, not a soft one.
              </p>
              <Link to="/nl/contact" className="btn-primary">
                 Let's connect
              </Link>
            </div>
            <div className="order-first md:order-last">
              <img src={heroDunes} alt="Dune landscape at golden hour"
              className="w-full h-80 md:h-[28rem] object-cover rounded-lg" />
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
            {workAreas.map((area) =>
            <div key={area.title} className="card-soft">
                <h3 className="mb-4">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-label mb-4">How I work</p>
          <h2 className="mb-8">Collaborative by nature</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            With a strong professional track record as CHRO and management consultant, I work strategically when needed and hands-on where it makes a difference. I work alongside leaders and teams, helping organisations address the people questions that matter most.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Team members and former clients often value my pragmatism, humour and ability to connect.
          </p>
          <Link to="/nl/reflections" className="btn-outline">Explore reflections & tools</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Let's start a conversation</h2>
          <p className="text-muted-foreground text-lg mx-auto mb-8">
            If you would like to explore whether I can contribute to your work or organisation, I would be glad to hear from you.
          </p>
          <Link to="/nl/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>
    </Layout>);
};

export default NlIndex;