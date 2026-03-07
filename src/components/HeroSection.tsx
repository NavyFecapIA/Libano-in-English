import heroTravel from "@/assets/hero-travel.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Mountain, Compass } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <img
        src={heroTravel}
        alt="Vista panorâmica da costa do Líbano"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="flex items-center gap-2 animate-fade-up">
          <MapPin className="h-5 w-5 text-accent" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            Descubra o Líbano
          </span>
        </div>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-primary-foreground text-shadow-hero md:text-7xl animate-fade-up animate-delay-200">
          Uma Terra de História, Beleza e Cultura
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg text-primary-foreground/90 text-shadow-hero md:text-xl animate-fade-up animate-delay-400">
          De templos ancestrais às águas cristalinas do Mediterrâneo, o Líbano oferece uma experiência única que encanta todos os sentidos.
        </p>
        <div className="mt-8 flex gap-4 animate-fade-up animate-delay-600">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base px-8">
            Explorar Destinos
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8">
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
