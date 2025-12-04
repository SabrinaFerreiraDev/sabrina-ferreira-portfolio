import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import AvatarPerfil from "../components/img/WhatsApp Image 2025-11-23 at 10.21.04 AM.jpeg"
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden tech-grid"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div
        ref={ref}
        className={`container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Profile Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-neon" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50">
            {/* Placeholder for Sabrina's photo - replace src with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <span className="text-6xl font-display text-primary/30"><img 
                src={AvatarPerfil} 
              alt="Sabrina Ferreira" 
              className="w-full h-full object-cover"
            /></span>
            </div>
            
           
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Olá, eu sou
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-foreground">Sabrina</span>{" "}
            <span className="text-primary neon-text">Ferreira</span>
          </h1>
          <h2 className="font-display text-xl md:text-2xl text-muted-foreground mb-6">
            Desenvolvedora Full Stack
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            Transformando ideias em experiências digitais inovadoras. 
            Apaixonada por código limpo, design moderno e soluções que fazem a diferença.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button
              variant="neon"
              size="lg"
              onClick={() => scrollToSection("#projects")}
            >
              Ver Projetos
            </Button>
            <Button
              variant="neon-outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/SabrinaFerreiraDev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sabrina-ferreira-802a8a378/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contato@sabrinaferreirasilva745@gmail.com"
              className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-display tracking-wider">SCROLL</span>
        <ArrowDown
          size={20}
          className="animate-bounce group-hover:animate-none"
        />
      </button>
    </section>
  );
}
