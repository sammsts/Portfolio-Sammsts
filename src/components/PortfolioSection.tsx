import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code, Smartphone, Globe, Wrench } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Website Montare Móveis",
      description: "Site completo para empresa de fabricação e montagem de móveis (carpintaria). Desenvolvido com foco em apresentação de produtos e serviços.",
      tech: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      icon: Globe,
      github: "https://github.com/sammsts/Website-MontareMoveis",
      type: "Website Corporativo",
      status: "Concluído",
    },
    {
      title: "Code Review Automation",
      description: "Aplicação web para auxiliar na revisão de código para equipes de desenvolvimento. Automatiza processos de análise e melhora a qualidade do código.",
      tech: ["JavaScript", "Node.js", "API Integration", "Automation"],
      icon: Code,
      github: "https://github.com/sammsts/Code-Review-Automation",
      type: "Ferramenta de Desenvolvimento",
      status: "Concluído",
    },
    {
      title: "Mobile App React",
      description: "Aplicativo móvel em desenvolvimento utilizando React Native. Foco em experiência do usuário moderna e performance otimizada.",
      tech: ["React Native", "JavaScript", "Mobile Development", "UX/UI"],
      icon: Smartphone,
      github: "#",
      type: "Aplicativo Mobile",
      status: "Em Desenvolvimento",
    },
    {
      title: "JavaScript Boilerplate",
      description: "Boilerplate para projetos JavaScript com configuração Webpack, Babel, Core-js e Regenerator-runtime. Estrutura otimizada para desenvolvimento rápido.",
      tech: ["JavaScript", "Webpack", "Babel", "Build Tools"],
      icon: Wrench,
      github: "https://github.com/sammsts/Js-Boilerplate",
      type: "Template/Boilerplate",
      status: "Concluído",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído':
        return 'bg-success/20 text-success border-success/30';
      case 'Em Desenvolvimento':
        return 'bg-warning/20 text-warning border-warning/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-hero relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="geometric-shape absolute top-24 left-12 w-24 h-24 border border-primary/20 rounded-full" 
             style={{ animationDelay: '2s' }} />
        <div className="geometric-shape absolute bottom-32 right-12 w-32 h-32 bg-accent/5 transform rotate-45" 
             style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meu <span className="text-primary">Portfólio</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos que demonstram minha expertise em desenvolvimento Full Stack, 
            desde aplicações web até ferramentas de automação e templates reutilizáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-hover p-8 border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-full border border-primary/20 group-hover:shadow-glow transition-all duration-300">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.type}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  {project.github !== "#" && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    </Button>
                  )}
                  {project.status === "Concluído" && (
                    <Button
                      size="sm"
                      className="btn-glow flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Projeto
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-hover p-8 max-w-3xl mx-auto border-border/50">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Gostou do que viu?</h3>
              <p className="text-muted-foreground">
                Estes são apenas alguns dos meus projetos. Estou sempre trabalhando em 
                novas soluções e adoraria conversar sobre como posso ajudar em seu próximo projeto.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button className="btn-glow">
                  <a href="mailto:samuelmacielsts@gmail.com" className="flex items-center gap-2">
                    Vamos conversar
                  </a>
                </Button>
                <Button variant="outline" className="border-primary/20 hover:border-primary/40">
                  <a 
                    href="https://github.com/sammsts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Ver mais no GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;