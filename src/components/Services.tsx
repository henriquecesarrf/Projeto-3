import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Desenvolvimento de Sites",
      description: "Sites modernos, responsivos e otimizados para conversão. Do design à implementação, criamos presenças digitais que impressionam e convertem.",
      features: ["Design responsivo", "SEO otimizado", "Performance superior", "Experiência única"]
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Micro-SaaS sob Medida",
      description: "Soluções SaaS personalizadas para resolver problemas específicos do seu negócio. Escaláveis, seguras e prontas para crescer com você.",
      features: ["Arquitetura escalável", "Integração completa", "Dashboard intuitivo", "Suporte dedicado"]
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Automação de Processos",
      description: "Automatize tarefas repetitivas e otimize fluxos de trabalho. Ganhe tempo e reduza erros com nossas soluções inteligentes.",
      features: ["Workflow automático", "Integração APIs", "Monitoramento 24/7", "ROI garantido"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar seu negócio digitalmente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;