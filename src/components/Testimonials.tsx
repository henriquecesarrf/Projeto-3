import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      company: "TechStart Brasil",
      role: "CEO",
      content: "A laje.ai transformou completamente nossa operação. O sistema de automação que desenvolveram reduziu nosso tempo de processamento em 80% e melhorou drasticamente nossa eficiência.",
      rating: 5
    },
    {
      name: "Carlos Santos",
      company: "Inovação Digital",
      role: "CTO",
      content: "Profissionalismo excepcional! O micro-SaaS desenvolvido pela equipe superou todas nossas expectativas. Solução robusta, escalável e com suporte incomparável.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      company: "Startup Crescimento",
      role: "Fundadora",
      content: "Desde o primeiro contato até a entrega, a laje.ai demonstrou expertise técnica e compreensão profunda do nosso negócio. Recomendo sem hesitação!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Provas <span className="text-accent">Sociais</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que nossos clientes dizem sobre nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} na {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;