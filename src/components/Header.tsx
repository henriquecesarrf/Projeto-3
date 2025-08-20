import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4584cfad-0894-43c3-8131-e2eeee813e24.png" 
              alt="laje.ai" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('cta')}
            className="bg-gradient-primary hover:bg-gradient-primary-hover text-foreground font-semibold px-6"
          >
            Solicitar Demonstração
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;