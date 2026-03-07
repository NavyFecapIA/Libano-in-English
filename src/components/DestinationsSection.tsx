import baalbek from "@/assets/baalbek-temple.jpg";
import byblos from "@/assets/byblos-harbor.jpg";
import cedars from "@/assets/cedars-lebanon.jpg";
import pigeonRocks from "@/assets/pigeon-rocks.jpg";

interface Destination {
  title: string;
  description: string;
  image: string;
  tag: string;
}

const destinations: Destination[] = [
  {
    title: "Templo de Baalbek",
    description: "As ruínas romanas mais impressionantes do Oriente Médio, Patrimônio Mundial da UNESCO.",
    image: baalbek,
    tag: "Patrimônio UNESCO",
  },
  {
    title: "Porto de Byblos",
    description: "Uma das cidades mais antigas do mundo, com um porto pitoresco e castelo medieval.",
    image: byblos,
    tag: "Cidade Histórica",
  },
  {
    title: "Cedros do Líbano",
    description: "As majestosas árvores sagradas que são símbolo nacional há milênios.",
    image: cedars,
    tag: "Natureza",
  },
  {
    title: "Rochas dos Pombos",
    description: "Formações rochosas icônicas em Beirute, um dos cartões-postais mais famosos do país.",
    image: pigeonRocks,
    tag: "Paisagem",
  },
];

const DestinationsSection = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-body text-sm uppercase tracking-[0.25em] text-primary">
            Destinos Imperdíveis
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Lugares que Contam Histórias
          </h2>
          <p className="mt-4 max-w-2xl mx-auto font-body text-muted-foreground text-lg">
            Cada canto do Líbano guarda séculos de história, sabores e paisagens de tirar o fôlego.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {destinations.map((dest, i) => (
            <article
              key={dest.title}
              className="group relative overflow-hidden rounded-lg bg-card shadow-[var(--card-shadow)] transition-shadow duration-300 hover:shadow-[var(--card-hover-shadow)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground font-body">
                  {dest.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-card-foreground">
                  {dest.title}
                </h3>
                <p className="mt-2 font-body text-muted-foreground leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
