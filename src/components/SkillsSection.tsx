import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "JavaScript", "TypeScript", "React", "Vue.js", 
        "HTML5", "CSS3", "SASS", "Bootstrap", 
        "jQuery", "ExtJS"
      ]
    },
    {
      title: "Backend",
      skills: [
        "C#", ".NET", "ASP.NET Core", "Node.js", 
        "PHP", "APIs RESTful", "Microservices"
      ]
    },
    {
      title: "Database",
      skills: [
        "SQL", "PostgreSQL", "Firebase", "NoSQL", 
        "Database Design", "Query Optimization"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git", "GitHub", "GitLab", "Visual Studio", 
        "Figma", "WordPress", "Metodologias Ágeis"
      ]
    },
    {
      title: "Gestão & Liderança",
      skills: [
        "Liderança de Equipes", "Gestão de Projetos", 
        "CEO", "Planejamento Estratégico", "Mentoria"
      ]
    },
    {
      title: "Especialidades",
      skills: [
        "Automação de Processos", "Integração de APIs", 
        "Análise de Sistemas", "Performance Optimization", 
        "Sistema de Gestão Pública"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="geometric-shape absolute top-20 left-1/4 w-16 h-16 bg-primary/5 rounded-lg transform rotate-45" 
             style={{ animationDelay: '2s' }} />
        <div className="geometric-shape absolute bottom-32 right-1/4 w-24 h-24 border border-accent/20 rounded-full" 
             style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades & <span className="text-primary">Experiência</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experiência abrangente em desenvolvimento Full Stack, com foco especial em 
            sistemas de gestão, automação de processos e liderança de equipes técnicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="card-hover p-6 border-border/50"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-badge"
                      style={{ animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <Card className="card-hover p-8 max-w-4xl mx-auto border-border/50">
            <h3 className="text-2xl font-bold mb-4">Área Principal de Expertise</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desenvolvimento Full Stack com forte experiência em sistemas de gestão empresarial, 
              especialmente no setor de RH e gestão pública municipal. Expertise em criação de 
              interfaces responsivas, otimização de bancos de dados e integração de sistemas 
              complexos usando tecnologias modernas.
            </p>
            <div className="mt-6">
              <a 
                href="https://www.linkedin.com/in/samuelmacielsantos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-hover text-primary font-medium"
              >
                Visite meu LinkedIn para mais detalhes →
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;