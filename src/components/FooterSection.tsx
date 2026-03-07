import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold text-background">
              🇱🇧 Descubra o Líbano
            </h3>
            <p className="mt-3 font-body text-sm text-background/70 leading-relaxed">
              Seu guia para explorar a beleza e cultura do Líbano.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-background">Links</h4>
            <ul className="mt-3 space-y-2 font-body text-sm text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">Destinos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-background">Contato</h4>
            <ul className="mt-3 space-y-2 font-body text-sm text-background/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@descubraolibano.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +961 1 234 567</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Beirute, Líbano</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-background/20 pt-6 text-center font-body text-xs text-background/50">
          © 2026 Descubra o Líbano. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
