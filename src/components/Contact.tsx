import { useState } from "react";
import { Send, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Obrigada pelo contato. Retornarei em breve!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

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
              Entre em <span className="text-primary neon-text">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tem um projeto em mente ou quer bater um papo sobre tecnologia?
              Ficarei feliz em conversar!
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
            {/* Contact Info */}
            <div className="min-w-0 space-y-8">
              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl font-semibold mb-6">
                  Vamos criar algo incrível juntos?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Estou sempre aberta a novas oportunidades, projetos
                  interessantes e conversas sobre tecnologia. Não hesite em
                  entrar em contato!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 ">
                <a
                  href="mailto:sabrinaferreirasilva745@gmail.com"
                  className="group flex min-w-0 items-start gap-4 rounded-xl p-4 glass transition-all hover:border-primary/50"
                >
                  <div className="shrink-0 rounded-lg bg-primary/10 p-3 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="text-sm font-medium break-all transition-colors group-hover:text-primary sm:text-base">
                      sabrinaferreirasilva745@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex min-w-0 items-center gap-4 rounded-xl p-4 glass">
                  <div className="shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-medium">Guarulhos - SP</p>
                  </div>
                </div>

                <div className="flex min-w-0 items-center gap-4 rounded-xl p-4 glass">
                  <div className="shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-medium">(73) 99900-9065</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="min-w-0 w-full space-y-6">
              <div className="glass-strong rounded-2xl p-5 sm:p-6 md:p-8 neon-border">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium font-display"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      className="w-full px-4 min-w-0 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium font-display"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium font-display"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Conte-me sobre seu projeto ou ideia..."
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="neon"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
