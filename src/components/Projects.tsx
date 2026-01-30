import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import projetTradutorIA from "./img/tradutorIa.jpeg";
import projectEcommerce from "./img/project-ecommerce.jpg";
import projectWeather from "./img/project-weather.jpg";
import projectBlog from "./img/project-blog.jpg";
import projectFinance from "./img/project-finance.jpg";
import projectSocial from "./img/project-social.jpg";

const projects = [
  {
    id: 1,
    title: "Tradutor em IA",
    description:
      "Aplicação web de tradução desenvolvida com HTML, CSS e JavaScript puro, integrando a MyMemory Translation API para tradução de textos em tempo real e a Web Speech API para reconhecimento de voz. O projeto permite que o usuário fale ou digite frases e receba traduções automaticamente em diferentes idiomas através de uma interface simples e intuitiva.",
    technologies: ["HTML", "CSS", "JavaScript", "MyMemory API", "Web Speech API","fetch API"],
    image: projetTradutorIA,
    demoUrl: "https://tradutor-ia-eight.vercel.app/",
    githubUrl: "https://github.com/SabrinaFerreiraDev/PROJETOS_PESSOAIS/tree/main/tradutor-ia-main",
  },
  {
    id: 2,
    title: "E-Commerce Plus",
    description:
      "Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    image: projectEcommerce,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard meteorológico com previsões em tempo real, gráficos interativos e alertas personalizados.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    image: projectWeather,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "Sistema de blog com editor rich-text, sistema de comentários, categorias e otimização SEO avançada.",
    technologies: ["Next.js", "Prisma", "MySQL", "TipTap"],
    image: projectBlog,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Finance Tracker",
    description:
      "Aplicativo de controle financeiro pessoal com gráficos, metas de economia e relatórios detalhados.",
    technologies: ["React Native", "Firebase", "Redux", "Victory Charts"],
    image: projectFinance,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Social Connect",
    description:
      "Rede social minimalista com feed em tempo real, sistema de mensagens e notificações push.",
    technologies: ["Vue.js", "Node.js", "Redis", "WebSockets"],
    image: projectSocial,
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      items.push({ ...projects[index], position: i });
    }
    return items;
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-50" />
      
      <div className="container relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Meus <span className="text-primary neon-text">Projetos</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos projetos que desenvolvi, demonstrando minhas 
              habilidades em diferentes tecnologias e tipos de aplicações.
            </p>
          </div>

          {/* Carousel - Desktop */}
          <div className="hidden lg:block relative">
            <div className="flex gap-6 justify-center items-stretch">
              {visibleProjects().map((project, idx) => (
                <div
                  key={`${project.id}-${idx}`}
                  className={`w-full max-w-sm transition-all duration-500 ${
                    idx === 1 ? "scale-105 z-10" : "scale-95 opacity-80"
                  }`}
                >
                  <ProjectCard project={project} featured={idx === 1} />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 glass rounded-full text-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Projeto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 glass rounded-full text-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Próximo projeto"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Grid - Mobile/Tablet */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="hidden lg:flex justify-center gap-2 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para projeto ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  featured?: boolean;
}

function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <div
      className={`glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 h-full flex flex-col ${
        featured ? "neon-border" : ""
      }`}
    >
      {/* Project Image */}
      <div className="h-48 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
          <div className="flex gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full text-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="Ver demo"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full text-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="Ver código"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
