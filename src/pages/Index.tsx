import { Compass, Utensils, Users, AlertTriangle, Sun, Sparkles, MapPin, Camera } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-travel.jpg";
import flagImage from "@/assets/lebanes-greeting.jpg";
import baalbekImage from "@/assets/baalbek-temple.jpg";
import pigeonRocksImage from "@/assets/pigeon-rocks.jpg";
import byblowImage from "@/assets/byblos-harbor.jpg";
import cedarsImage from "@/assets/cedars-lebanon.jpg";
import greetingImage from "@/assets/lebanese-greeting-handshake.jpg";
import taboo from "@/assets/lebanese-taboo.jpg";
import tabo from "@/assets/lebanese-tabo.jpg";
import tabu from "@/assets/lebanese-tabu.jpg";
import DailyLife from "@/assets/lebanese-dailylife.jpg";
import economic from "@/assets/lebanese-economic.jpg";
import kibe from "@/assets/lebanese-kibe.jpg.jpg";
import esfiha from "@/assets/lebanese-esfiha.jpg";
import humus from "@/assets/lebanese-humus.jpg";
import Apresentation from "@/assets/lebanese-apresentation.jpg";
import influence from "@/assets/lebanese-influence.jpg";
import hezbollah from "@/assets/lebanese-hezbollah.jpg";
import flag from "@/assets/lebanon-flag.jpg";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

interface CultureSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  reversed?: boolean;
}

const CultureSection = ({ icon, title, description, children, reversed }: CultureSectionProps) => (
  <motion.section
    className="py-20 px-4 md:px-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
  >
    <div className={`mx-auto max-w-6xl flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-start`}>
      <motion.div className="md:w-1/3 shrink-0" variants={fadeUp}>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            {icon}
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground">{title}</h2>
        </div>
        <p className="font-body text-muted-foreground text-lg leading-relaxed">{description}</p>
      </motion.div>
      <motion.div className="md:w-2/3" variants={fadeUp}>
        {children}
      </motion.div>
    </div>
  </motion.section>
);

const ImageSlot = ({ label, src }: { label: string; src?: string }) => (
  <div className="relative overflow-hidden rounded-xl aspect-video">
    {src ? (
      <img src={src} alt={label} className="w-full h-full object-cover" loading="lazy" />
    ) : (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <div className="text-center">
          <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <span className="text-sm text-muted-foreground font-body">{label}</span>
        </div>
      </div>
    )}
  </div>
);

const TextSlot = ({ placeholder }: { placeholder: string }) => (
  <div className="rounded-xl bg-card border border-border p-6">
    <p className="font-body text-muted-foreground text-sm italic">{placeholder}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 md:px-8 h-16">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
            <Compass className="h-5 w-5 text-primary" />
            Lebanon — Cultural Guide
          </div>
          <div className="hidden md:flex items-center gap-6">
            {["Greetings", "Taboos", "Daily Life", "Food", "Fun Facts"].map((item, i) => (
              <a key={i} href={`#${item.toLowerCase().replace(" ", "-")}`} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <img src={heroImage} alt="Lebanon landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/80">
              Guia Cultural de Viagem
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl font-bold text-primary-foreground text-shadow-hero max-w-4xl mx-auto leading-tight">
            Descubra o Líbano
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto text-shadow-hero">
            A comprehensive guide to customs, etiquette, and interesting facts about the land of cedars.
          </motion.p>
        </div>
      </motion.section>

      {/* Monument Gallery */}
      <motion.section
        className="py-20 px-4 md:px-8 bg-muted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Monuments & Landscapes
          </motion.h2>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: baalbekImage, label: "Baalbek" },
              { src: pigeonRocksImage, label: "Pigeon Rocks, Beirute" },
              { src: byblowImage, label: "Byblos" },
              { src: cedarsImage, label: "Cedros do Líbano" },
            ].map(({ src, label }) => (
              <motion.div key={label} variants={scaleIn} className="group relative overflow-hidden rounded-xl">
                <img src={src} alt={label} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <p className="absolute bottom-3 left-3 font-display text-sm font-semibold text-primary-foreground">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Greetings */}
      <div id="greetings">
        <CultureSection
          icon={<Users className="h-6 w-6 text-primary" />}
          title="Greetings"
          description="How do Lebanese people greet each other? Learn about their customs."
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <ImageSlot label="Greeting gesture" src={flagImage} />
              <div className="rounded-xl bg-card border border-border p-6 space-y-3">
                <p className="font-body text-foreground"><strong>Habibi</strong> — means "my dear" or "my friend".</p>
                <p className="font-body text-foreground"><strong>Marhaba</strong> (مرحبا) – means "hello".</p>
                <p className="font-body text-foreground"><strong>Sabah el kheir</strong> (صباح الخير) – means "good morning".</p>
                <p className="font-body text-sm text-muted-foreground italic">Pronunciation: sa-BÁR el RRÊR</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ImageSlot label="Lebanese greeting Handshake" src={greetingImage} />
              <div className="rounded-xl bg-card border border-border p-6">
                <p className="font-body text-foreground">After shaking hands, it is customary to place your right hand on your heart as a sign of respect and sincerity.</p>
              </div>
            </div>
          </div>
        </CultureSection>
      </div>

      {/* Taboos */}
      <div id="taboos" className="bg-muted">
        <CultureSection
          icon={<AlertTriangle className="h-6 w-6 text-primary" />}
          title="Taboos"
          description="What to avoid, respect the local culture."
          reversed
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <ImageSlot label="Lebanese Taboo" src={taboo} />
              <ImageSlot label="Lebanese Tabo" src={tabo} />
              <ImageSlot label="Lebanese Tabu" src={tabu} />
            </div>
            <div className="space-y-3">
              {[
                "Speaking critically about the Lebanese Civil War can be sensitive.",
                "Refusing food or drink can be seen as disrespectful.",
                "Showing the soles of your shoes is considered offensive.",
                "Using your left hand to hand something over or eat is inappropriate in traditional contexts.",
                "Criticizing religion is very frowned upon.",
                "Showing too much physical affection in public may not be well accepted in more conservative environments.",
                "Physical contact between men and women may be avoided in more traditional religious contexts."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-card border border-border p-4">
                  <span className="text-lg shrink-0">⚠️</span>
                  <p className="font-body text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </CultureSection>
      </div>

      {/* Daily Life */}
      <div id="daily-life">
        <CultureSection
          icon={<Sun className="h-6 w-6 text-primary" />}
          title="Daily Life"
          description="A look at everyday life and the Lebanese lifestyle."
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <ImageSlot label="Dailylife" src={DailyLife} />
              <div className="rounded-xl bg-card border border-border p-6 space-y-3">
                <p className="font-body text-foreground">Lebanese people are usually affectionate, welcoming, and warm.</p>
                <p className="font-body text-foreground">Different religious groups coexist in Lebanon, such as:</p>
                <ul className="list-disc list-inside space-y-1 font-body text-foreground text-sm pl-2">
                  <li>Xiitas</li>
                  <li>Sunitas</li>
                  <li>Drusos</li>
                  <li>Cristãos</li>
                </ul>
                <p className="font-body text-foreground">Many live concentrated in certain regions.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-card border border-border p-6">
                <p className="font-body text-foreground">The country faces a high cost of living and economic instability as a result of political crises, the Lebanese Civil War, and recent conflicts.</p>
              </div>
              <ImageSlot label="economic" src={economic} />
            </div>
          </div>
        </CultureSection>
      </div>

      {/* Food Etiquette */}
      <div id="food" className="bg-muted">
        <CultureSection
          icon={<Utensils className="h-6 w-6 text-primary" />}
          title="Food Etiquette"
          description="Table manners and typical dishes."
          reversed
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <ImageSlot label="Kibe" src={kibe} />
              <ImageSlot label="Esfiha" src={esfiha} />
              <ImageSlot label="Humus" src={humus} />
            </div>
            <div className="rounded-xl bg-card border border-border p-6 space-y-3">
              <p className="font-body text-foreground"><strong>Common foods:</strong> kibbeh, hummus, esfiha.</p>
              <p className="font-body text-foreground">You should eat with your right hand, especially during traditional meals.</p>
              <p className="font-body text-foreground">The host usually insists that you eat more. It is polite to accept at least a little.</p>
              <p className="font-body text-foreground">Arabic bread is used as "cutlery" to pick up food.</p>
              <p className="font-body text-foreground">The dishes are usually placed in the center of the table, and everyone serves themselves from the same dish.</p>
              <p className="font-body text-foreground">It is not polite to start eating before the host.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-secondary/10 border border-secondary/30 p-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">☕ Arabic Coffee</h4>
                <p className="font-body text-foreground text-sm mb-3">Arabic coffee is unfiltered; the grounds remain at the bottom of the cup:</p>
                <ul className="list-disc list-inside space-y-1 font-body text-foreground text-sm">
                  <li><strong>Saada</strong> – bitter</li>
                  <li><strong>Mazbout</strong> – balanced</li>
                  <li><strong>Helwe</strong> – sweet</li>
                </ul>
              </div>
              <div className="rounded-xl bg-secondary/10 border border-secondary/30 p-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">🥘 Quibe – Kibbeh</h4>
                <p className="font-body text-foreground text-sm">It means "ball or shape" and originated in the Levant region. It is a staple food, and mixing meat with wheat (abundant in the region) makes it go further. There are regional variations.</p>
              </div>
            </div>
            <ImageSlot label="Apresentação" src={Apresentation} />
          </div>
        </CultureSection>
      </div>

      {/* Fun Facts */}
      <div id="fun-facts">
        <CultureSection
          icon={<Sparkles className="h-6 w-6 text-primary" />}
          title="Fun Facts"
          description="Surprising things you didn't know!"
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-card border border-border p-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">🇫🇷 French influence</h4>
                <ImageSlot label="French Influence" src={influence} />
                <p className="font-body text-foreground text-sm mt-4">France had a strong influence on the country during the French Mandate period. As a result, French is widely spoken in Lebanon.</p>
              </div>
              <div className="rounded-xl bg-card border border-border p-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">⚔️ Hezbollah</h4>
                <ImageSlot label="hezbollah" src={hezbollah} />
                <p className="font-body text-foreground text-sm mt-4">Hezbollah is a political and armed group that operates in the country and is considered a terrorist organization by some countries.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-card border border-border p-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">🇱🇧 Meaning of the Flag</h4>
                <ImageSlot label="Lebanese flag" src={flag} />
                <p className="font-body text-foreground text-sm mt-4">The cedar represents eternity and the resilience of the Lebanese people, as it is a tree that lives for thousands of years. The red means the blood shed for freedom, white means peace and the snow, and the green cedar is life that never dies.</p>
              </div>
              <div className="rounded-xl bg-card border border-border p-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">🏛️ Baalbek</h4>
                <ImageSlot label="Baalbek temple" src={baalbekImage} />
              </div>
            </div>
          </div>
        </CultureSection>
      </div>

      {/* Footer */}
      <footer className="bg-foreground py-12 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass className="h-5 w-5 text-accent" />
            <span className="font-display text-lg font-bold text-background">Lebanon — Cultural Guide</span>
          </div>
          <p className="font-body text-background/70 text-sm">
            Explore. Respect. Enjoy. 🇱🇧
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
