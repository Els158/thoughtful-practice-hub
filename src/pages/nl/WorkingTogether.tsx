import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const services = [
{
  label: "IN de organisatie",
  title: "Interim management",
  description:
  "Verantwoordelijkheid voor HR opgaven van begin tot eind - van analyse en richting bepalen tot implementatie. Op directie- en MT-niveau ontstaat voortgang, scherpte in besluitvorming en zicht op wat er speelt."
},
{
  label: "IN ontwikkeling",
  title: "Ontwerp en realisatie van leer- en ontwikkeltrajecten",
  description:
  "Ik ontwikkel en realiseer leerinterventies die aansluiten bij de organisatie en daadwerkelijk effect hebben op gedrag en samenwerking. Van strategie tot uitvoering, met oog voor context en deelnemers."
},
{
  label: "Als meedenker",
  title: "Sparring & advies op senior niveau",
  description:
  "Sparring voor leiders en HR professionals die midden in complexe vraagstukken zitten. Ik help scherp te krijgen wat er speelt, breng verschillende perspectieven samen en denk mee in keuzes en interventies die werken in de praktijk."
}];


const NlWorkingTogether = () =>
<Layout>

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
        <h2 className="mb-6">Laten we kennismaken</h2>
        <p className="text-muted-foreground text-lg mx-auto mb-8">
          Benieuwd of ik iets voor je kan betekenen? Stel gerust je vraag.
        </p>
        <Link to="/nl/contact" className="btn-primary">Plan een kennismaking in</Link>
      </div>
    </section>
  </Layout>;export default NlWorkingTogether;