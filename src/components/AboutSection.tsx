import lebanonFlag from "@/assets/lebanon-flag.jpg";
import { Mountain, Sun, UtensilsCrossed, Music } from "lucide-react";

const highlights = [
  { icon: Mountain, title: "Montanhas", text: "Do ski no inverno ao hiking no verão" },
  { icon: Sun, title: "Clima", text: "300 dias de sol por ano" },
  { icon: UtensilsCrossed, title: "Gastronomia", text: "Uma das culinárias mais ricas do mundo" },
  { icon: Music, title: "Cultura", text: "Música, arte e tradições milenares" },
];

const AboutSection = () => {
  return (
    <section className="bg-muted py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="font-body text-sm uppercase tracking-[0.25em] text-primary">
              Sobre o Líbano
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
              Pequeno País, Grandeza Infinita
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              O Líbano é uma terra onde civilizações fenícias, romanas, árabes e otomanas deixaram
              suas marcas. Com apenas 10.452 km², este país mediterrâneo surpreende pela diversidade
              de paisagens, sabores e experiências culturais.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <h.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground">{h.title}</h4>
                    <p className="mt-1 font-body text-sm text-muted-foreground">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={lebanonFlag}
                alt="Bandeira do Líbano"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
