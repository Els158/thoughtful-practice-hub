import Layout from "@/components/Layout";
import seascape from "@/assets/seascape.jpg";

const beliefs = [
  "Growth happens when development is brought into the heart of the organisation.",
  "Leadership development works best when it is tailor-made and aligned with strategic direction.",
  "The best programs combine co-creation, creativity and the ability to connect people.",
  "Professional growth and business results go hand in hand.",
  "Structure creates freedom — when designed thoughtfully.",
];

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-8">
            <p className="text-label">About</p>
            <h1>Making growth and progress possible</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As an innovative HR director — and as a mom — my life is all about making growth and progress possible. For more than twenty years, I have been bringing development into the heart of organisations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the coming years, I am choosing to focus on the work that energises me most: tailor-made leadership development programmes. From initial idea and co-creation to design, procurement, testing and facilitation — ensuring leadership development truly aligns with the organisation's strategic direction. This is where my experience, creativity and ability to connect come together.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With teams that I lead, I like to work in two directions: achieving professional growth and delivering business results. People I have worked with appreciate my organisational stamina, care and improvisational talent. Having worked as a consultant, I am able to make myself at home quickly within organisations.
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
        <p className="text-label mb-4">Background</p>
        <h2 className="mb-8">Professional life</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Based in Overveen, the Netherlands, I have built my career across consulting and in-house HR leadership roles. My education includes SIOO and Utrecht University.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          As an entrepreneurial networker, I get great joy out of making relevant connections. I am always open to meeting more minds — whether as an advisor, facilitator or thought partner on leadership and organisational development.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
