import { Code2, Sparkles, Target, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FotoAvatar from "./img/WhatsApp Image 2025-11-23 at 10.21.05 AM.jpeg";
const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Priorizo boas práticas e arquitetura escalável",
  },
  {
    icon: Sparkles,
    title: "Design Moderno",
    description: "Interfaces intuitivas e visualmente atraentes",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Soluções que entregam valor real ao usuário",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Aplicações rápidas e otimizadas",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-primary neon-text">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative glass rounded-2xl p-2 neon-border">
                {/* Placeholder for second photo - replace with actual image */}
                <div className="w-full aspect-[4/5] rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <span className="text-8xl font-display text-primary/20"><img 
                  src={FotoAvatar} 
                  alt="Sabrina Ferreira trabalhando" 
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                /></span>
                    <p className="text-muted-foreground mt-4 text-sm">
                  
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-2xl" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-semibold">
                Desenvolvedora apaixonada por{" "}
                <span className="text-primary">tecnologia</span> e{" "}
                <span className="text-primary">inovação</span>
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou uma desenvolvedora Full Stack dedicada a criar soluções digitais 
                  que combinam funcionalidade robusta com design elegante. Minha jornada 
                  na programação começou pela curiosidade de entender como as coisas funcionam 
                  por trás das telas.
                </p>
                <p>
                  Acredito que o aprendizado contínuo é a chave para se manter relevante 
                  no mundo da tecnologia. Estou sempre explorando novas ferramentas, 
                  frameworks e metodologias para aprimorar minhas habilidades e entregar 
                  projetos de alta qualidade.
                </p>
                <p>
                  Meu objetivo é contribuir para projetos desafiadores onde posso 
                  aplicar meu conhecimento e continuar evoluindo como profissional, 
                  sempre focada em criar experiências excepcionais para os usuários.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <item.icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-display font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
