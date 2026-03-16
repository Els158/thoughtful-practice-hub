import Layout from "@/components/Layout";
import seascape from "@/assets/seascape.jpg";

const NlAbout = () =>
<Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-8">
            <p className="text-label">About</p>
            <h1>Making growth and progress possible</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As an HR leader – and as a mother – my life has always been about making growth and progress possible. For more than twenty years I have worked at the intersection of people, organisations and development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ​In the coming years, I am choosing to focus on the work that energises me most: helping organisations strengthen the people side of their business. I do this as a fractional People & Culture leader, able to make sound people decisions at speed while still guiding transformation. My contributions are strategic when necessary and hands-on where needed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ​In the teams I work with, I always try to move in two directions at once: supporting people's professional growth while contributing to the organisation's goals. People I have worked with often mention my organisational stamina, care and improvisational talent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ​Having worked both inside organisations and as a consultant, I find my way quickly and become part of the context I work in. As an entrepreneurial networker, I naturally connect people and perspectives.
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
        <p className="text-label mb-4">Background</p>
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
