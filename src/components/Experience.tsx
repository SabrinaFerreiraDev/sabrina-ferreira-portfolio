import { Briefcase, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    id: 1,
    role: "Desenvolvedora Full Stack Jr.",
    company: "Tech Solutions Ltda.",
    period: "2024 - Presente",
    description: [
      "Desenvolvimento de aplicações web responsivas utilizando React e Node.js",
      "Colaboração em projetos ágeis com equipes multidisciplinares",
      "Implementação de APIs RESTful e integração com bancos de dados",
      "Participação em code reviews e manutenção de documentação técnica",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Estagiária de Desenvolvimento",
    company: "StartUp Inovadora",
    period: "2023 - 2024",
    description: [
      "Auxílio no desenvolvimento de features para aplicações web",
      "Correção de bugs e melhorias de performance",
      "Aprendizado de boas práticas de programação e versionamento Git",
      "Participação em reuniões de planejamento e retrospectivas",
    ],
    current: false,
  },
  {
    id: 3,
    role: "Freelancer",
    company: "Projetos Independentes",
    period: "2022 - 2023",
    description: [
      "Criação de landing pages e sites institucionais para pequenos negócios",
      "Desenvolvimento de soluções personalizadas conforme necessidade do cliente",
      "Gerenciamento de projetos do início ao deploy",
      "Comunicação direta com clientes para alinhamento de expectativas",
    ],
    current: false,
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

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
              Experiência <span className="text-primary neon-text">Profissional</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Minha trajetória profissional e as experiências que moldaram 
              minhas habilidades como desenvolvedora.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 md:space-y-0 relative max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`md:flex md:items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 mb-8 md:mb-16 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 ${
                      exp.current ? "neon-border" : ""
                    }`}
                  >
                    {/* Header */}
                    <div
                      className={`flex items-start gap-4 mb-4 ${
                        index % 2 === 0
                          ? "md:flex-row-reverse md:text-right"
                          : ""
                      }`}
                    >
                      <div
                        className={`p-3 rounded-xl ${
                          exp.current
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        <Briefcase size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div
                          className={`flex items-center gap-2 text-muted-foreground text-sm mt-1 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                              Atual
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul
                      className={`space-y-2 text-muted-foreground text-sm ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot - Desktop */}
                <div className="hidden md:flex items-center justify-center w-4 flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      exp.current
                        ? "bg-primary animate-pulse-neon"
                        : "bg-muted border-2 border-primary/50"
                    }`}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
