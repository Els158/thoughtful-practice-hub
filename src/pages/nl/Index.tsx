import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroDunes from "@/assets/hero-dunes.jpg";

const workAreas = [
{
  title: "Interim HR management & ontwikkeling",
  description: "Tijdelijke inzet op senior niveau. Verankering van groei en organisatieontwikkeling in de dagelijkse praktijk."
},
{
  title: "Mentoring van HR teams",
  description: "Begeleiding van HR professionals in hun ontwikkeling, met een focus op advies vaardigheden en projectmanagement skills. "
},
{
  title: "Organisatieontwikkeling",
  description: "Ondersteuning van organisaties en teams in periodes van verandering, groei of heroriëntatie."
},
{
  title: "Leergemeenschappen",
  description: "Bevorderen van professionele leernetwerken, zodat teams en organisaties leren en ontwikkelen in het ritme van het werk."
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
                <p className="text-label mb-3">​interim HR & organisatieontwikkeling         </p>
                <h1 className="text-foreground">
                  Ontwikkeling in het  hart van je organisatie.
                
                
                </h1>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Strategisch waar nodig, praktisch waar het kan. ​Mijn werk in organisaties gaat over wat mensen in beweging brengt. Geen soft skill, maar een vak op zich.                         
              </p>
              <Link to="/nl/contact" className="btn-primary">
                Laten we kennismaken
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
          <p className="text-label mb-4">Waar ik aan werk        </p>
          <h2 className="mb-12 md:mb-16">​Onderwerpen  </h2>
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


      {/* Contact CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Stel gerust je vraag</h2>
          <Link to="/nl/contact" className="btn-primary">​Laten we kennismaken</Link>
        </div>
      </section>
    </Layout>);
};

export default NlIndex;