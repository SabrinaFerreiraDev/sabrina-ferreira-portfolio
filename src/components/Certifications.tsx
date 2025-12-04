import { Award, ExternalLink } from "lucide-react";
import { useMultipleScrollReveal } from "@/hooks/useScrollReveal";

const certifications = [
  {
    id: 1,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialUrl: "#",
    icon: "🎯",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialUrl: "#",
    icon: "📱",
  },
  {
    id: 3,
    title: "Fundamentos de Node.js",
    issuer: "Rocketseat",
    date: "2024",
    credentialUrl: "#",
    icon: "🚀",
  },
  {
    id: 4,
    title: "Git e GitHub Completo",
    issuer: "Udemy",
    date: "2023",
    credentialUrl: "#",
    icon: "📚",
  },
  {
    id: 5,
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "#",
    icon: "⚛️",
  },
  {
    id: 6,
    title: "Formação CSS Web Developer",
    issuer: "DIO",
    date: "2023",
    credentialUrl: "#",
    icon: "🎨",
  },
];

export default function Certifications() {
  const { visibleItems, setRef } = useMultipleScrollReveal(certifications.length);

  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary neon-text">Certificações</span> e Cursos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Investimento contínuo em conhecimento e aprimoramento de habilidades 
            através de cursos e certificações reconhecidas.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              ref={setRef(index)}
              className={`glass rounded-2xl p-6 group hover:border-primary/50 transition-all duration-500 ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{cert.icon}</span>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="Ver credencial"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award size={14} className="text-primary" />
                <span>{cert.issuer}</span>
                <span className="text-primary">•</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            E sempre buscando novos conhecimentos...
          </p>
        </div>
      </div>
    </section>
  );
}
