import { useMultipleScrollReveal } from "@/hooks/useScrollReveal";

const technologies = [
  // Frontend
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    category: "Frontend",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.simpleicons.org/bootstrap/7952B3",
    category: "Frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    category: "Backend",
  },
  {
    name: "Express",
    icon: "https://cdn.simpleicons.org/express/FFFFFF",
    category: "Backend",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    category: "Backend",
  },

  // Database
  {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    category: "Database",
  },
  {
    name: "Prisma",
    icon: "https://cdn.simpleicons.org/prisma/FFFFFF",
    category: "Database",
  },

  // Tools
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
    category: "Tools",
  },
];

const learningTechnologies = [
  {
    name: "Docker",
    icon: "https://cdn.simpleicons.org/docker/2496ED",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.simpleicons.org/angular/DD0031",
  },
  {
    name: "Java",
    icon: "https://cdn.simpleicons.org/openjdk/ED8B00",
  },
];

export default function Technologies() {
  const { visibleItems, setRef } = useMultipleScrollReveal(technologies.length);

  return (
    <section id="technologies" className="py-20 md:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary neon-text">Tecnologias</span> que
            Domino
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo no desenvolvimento de
            aplicações web modernas e soluções Full Stack.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              ref={setRef(index)}
              className={`glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group hover:border-primary/50 hover:scale-105 transition-all duration-500 ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  loading="lazy"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <span className="font-display font-medium text-sm text-center group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-xl font-semibold mb-3 text-muted-foreground">
            Atualmente estudando
          </h3>

          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8">
            Tecnologias que estou explorando para ampliar meus conhecimentos em
            desenvolvimento de software e infraestrutura.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {learningTechnologies.map((tech) => (
              <div
                key={tech.name}
                className="glass rounded-xl p-4 flex items-center justify-center gap-3 hover:border-primary/50 hover:text-primary transition-all"
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  loading="lazy"
                  className="w-7 h-7 object-contain"
                />

                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
