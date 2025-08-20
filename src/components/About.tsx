const About = () => {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sobre a <span className="text-accent">laje.ai</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4 animate-slide-up">
              <h3 className="text-xl font-semibold text-primary">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à tecnologia de ponta, oferecendo soluções digitais 
                personalizadas que impulsionam o crescimento e a eficiência dos negócios.
              </p>
            </div>
            
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-primary">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a referência em desenvolvimento de soluções digitais inovadoras, 
                conectando empresas ao futuro através da inteligência artificial e automação.
              </p>
            </div>
            
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold text-primary">Nossa Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Combinamos conhecimento técnico avançado com experiência prática em negócios, 
                entregando soluções que realmente fazem a diferença no dia a dia das empresas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;