import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sabrina Ferreira | Desenvolvedora Full Stack</title>
        <meta
          name="description"
          content="Portfólio de Sabrina Ferreira, Desenvolvedora Full Stack especializada em React, Node.js e criação de experiências digitais inovadoras."
        />
        <meta
          name="keywords"
          content="desenvolvedor full stack, react, node.js, javascript, portfolio, web developer"
        />
        <meta name="author" content="Sabrina Ferreira" />
        <meta property="og:title" content="Sabrina Ferreira | Desenvolvedora Full Stack" />
        <meta
          property="og:description"
          content="Transformando ideias em experiências digitais inovadoras. Portfólio profissional de desenvolvimento web."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sabrinaferreira.dev" />
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
