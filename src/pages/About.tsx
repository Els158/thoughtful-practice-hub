import Layout from "@/components/Layout";
import seascape from "@/assets/seascape.jpg";


const About = () =>
<Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-8">
            <p className="text-label">About</p>
            <h1>Making growth and progress possible</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For more than 25 years, I have been bringing development into the heart of organisations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a broad background as a CHRO, coach and organisational consultant, I work strategically where needed and hands-on where that is what makes the difference. I bring complex questions back to what truly matters. In my work, I help organisations improve while enabling professionals to grow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Because I have worked both within organisations and as a consultant, I find my way quickly and become part of the context in which I work. I have operated at board and senior management level and understand the questions that arise across different parts of organisations. I connect people and perspectives with ease, and bring coherence where it is needed.
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
          ​I also contribute beyond my client work: as a member of the Advisory Board of the Bakery Institute, as a mentor for Stichting Anne-Bo, and as a jury member for the Ooa–Sioo Management Book of the Year.  I am a member of SER Topvrouwen.
        </p>
      </div>
    </section>
  </Layout>;


export default About;