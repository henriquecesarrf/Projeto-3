import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Pronto para <span className="text-accent">Inovar</span>?
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Não deixe a concorrência sair na frente. Transforme seu negócio hoje com nossas soluções personalizadas.
            </p>
          </div>

          <div className="space-y-8">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-primary-hover text-foreground font-semibold px-12 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Solicitar Demonstração Gratuita
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>Resposta em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <span>Consultoria gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;