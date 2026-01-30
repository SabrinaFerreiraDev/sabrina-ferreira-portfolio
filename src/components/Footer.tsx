import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/SabrinaFerreiraDev",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sabrina-ferreira-802a8a378/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:contato@sabrinaferreirasilva745@gmail.com",
      icon: Mail,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative border-t border-border/50">
      {/* Gradient top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Name */}
          <button
            onClick={scrollToTop}
            className="font-display text-2xl font-bold text-primary tracking-wider hover:text-primary/80 transition-colors"
          >
            SF<span className="text-foreground">.</span>
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Sabrina Ferreira. Feito com{" "}
            <Heart size={14} className="text-primary fill-primary" /> e muito café.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-border/30 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {[
            { label: "Início", href: "#hero" },
            { label: "Sobre", href: "#about" },
            { label: "Projetos", href: "#projects" },
            { label: "Tecnologias", href: "#technologies" },
            { label: "Contato", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
