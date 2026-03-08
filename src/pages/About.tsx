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
              As an HR leader — and as a mother — my life has always been about making growth and progress possible. For more than twenty years I have worked at the intersection of people, organisations and development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the coming years, I am choosing to focus on the work that energises me most: shaping and guiding programmes that help organisations learn and develop. This can involve leadership development, learning programmes, internal academies or development initiatives connected to organisational change.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the first idea and co-creation through design, procurement, testing and facilitation, I enjoy helping organisations translate their ambitions into meaningful development programmes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the teams I work with, I always try to move in two directions at once: supporting people's professional growth while contributing to the organisation's goals. People I have worked with often mention my organisational stamina, care and improvisational talent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Having worked both inside organisations and as a consultant, I am used to finding my way quickly and becoming part of the context I work in.
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
