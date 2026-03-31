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
              <br /><br />Doordat ik in organisaties en als adviseur heb gewerkt, vind ik snel mijn weg en word ik onderdeel van de context waarin ik werk. Ik heb op directie- en MT-niveau gewerkt en begrijp de vraagstukken die in verschillende delen van organisaties spelen. Ik verbind gemakkelijk mensen en perspectieven en breng samenhang waar dat nodig is.
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
        <p className="text-label mb-4">Achtergrond</p>
        <h2 className="mb-8">Meer dan werk alleen</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Ik woon en werk in Overveen en heb mijn loopbaan opgebouwd in zowel consultancy als interne HR-leiderschapsrollen. Mijn opleiding volgde ik onder andere bij SIOO en de Universiteit Utrecht.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Daarnaast ben ik actief als lid van de Raad van Advies van het Bakery Institute, als mentor bij Stichting Anne-Bo en als jurylid voor het Ooa–SIOO Managementboek van het Jaar. Ik ben lid van het SER Topvrouwen netwerk.
        </p>
      </div>
    </section>
  </Layout>;

export default NlAbout;