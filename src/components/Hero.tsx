import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-background">
      {/* Background overlay with logo colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-foreground">laje</span>
              <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">.ai</span>
            </h1>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground">
              Transformando ideias em realidade digital
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Especialistas em desenvolvimento de sites, micro-SaaS sob medida e automação de processos. 
              Tecnologia e inovação para impulsionar seu negócio.
            </p>
          </div>

          <div className="pt-8">
            <Button 
              onClick={() => scrollToSection('cta')}
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-primary-hover text-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Solicite uma Demonstração
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection('sobre')}
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;