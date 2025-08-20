import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-card/80 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-foreground">laje</span>
              <span className="text-accent">.ai</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Transformando ideias em realidade digital através de tecnologia de ponta e inovação constante.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Desenvolvimento de Sites</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Micro-SaaS</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Automação de Processos</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Consultoria Técnica</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>contato@laje.ai</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-4">
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 laje.ai. Todos os direitos reservados. Desenvolvido com ❤️ e tecnologia de ponta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;