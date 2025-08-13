import { CheckCircle } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      title: "Agilidade",
      description: "Entregamos soluções rapidamente sem comprometer a qualidade, utilizando metodologias ágeis e ferramentas modernas."
    },
    {
      title: "Flexibilidade",
      description: "Adaptamos nossas soluções às suas necessidades específicas, sempre prontos para evoluir conforme seu negócio cresce."
    },
    {
      title: "Experiência Técnica",
      description: "Nossa equipe combina conhecimento profundo em tecnologia com experiência prática em diversos setores."
    },
    {
      title: "Inovação",
      description: "Utilizamos as tecnologias mais avançadas, incluindo IA e automação, para criar soluções verdadeiramente inovadoras."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nossos <span className="text-accent">Diferenciais</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que nos torna únicos no mercado de tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl bg-card/80 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {differential.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;