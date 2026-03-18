import Layout from "@/components/Layout";
import seascape from "@/assets/seascape.jpg";

const NlAbout = () =>
<Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-8">
            <p className="text-label">Over mij</p>
            <h1>Ruimte voor groei</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Al meer dan 25 jaar breng ik ontwikkeling in het hart van organisaties.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Met een brede achtergrond als CHRO, coach en organisatieadviseur werk ik strategisch waar dat nodig is, en hands-on waar het verschil wordt gemaakt.
              <br />Complexe vraagstukken breng ik terug tot wat er echt toe doet. In mijn werk zorg ik ervoor dat organisaties verbeteren én professionals verder groeien.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
            src={seascape}
            alt="Calm seascape"
            className="w-full h-64 md:h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <p className="text-label mb-4">​Doordat ik in organisaties en als adviseur heb gewerkt, vind ik snel mijn weg en word ik onderdeel van de context waarin ik werk. Ik heb daarbij op directie- en MT-niveau gewerkt en ken de vraagstukken die in verschillende delen van organisaties spelen. Ik verbind gemakkelijk mensen en perspectieven en breng samenhang waar dat nodig is.</p>
        <h2 className="mb-8">Professional life</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Based in Overveen, the Netherlands, I have built my career across consulting and in-house HR leadership roles. My education includes SIOO and Utrecht University.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          ​I also contribute beyond my client work: as a member of the Advisory Board of the Bakery Institute, as a mentor for Stichting Anne-Bo, and as a jury member for the Ooa–Sioo Management Book of the Year.
        </p>
      </div>
    </section>
  </Layout>;

export default NlAbout;