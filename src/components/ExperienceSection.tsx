import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Svell",
      role: "CEO & Fundador",
      period: "Agosto 2025 - Presente",
      location: "Remoto",
      description: "Responsável por definir a visão estratégica, liderar o crescimento da empresa e garantir que as soluções digitais entreguem inovação e impacto real aos negócios dos clientes.",
      highlights: ["Visão Estratégica", "Crescimento", "Inovação Digital", "Impacto nos Negócios"],
      current: true,
    },
    {
      company: "Metadados",
      role: "Desenvolvedor de Software Associado",
      period: "Novembro 2024 - Presente",
      location: "Híbrido",
      description: "Desenvolvimento de sistemas, análise, modelagem, codificação e teste de software. Integração de APIs e bibliotecas de terceiros. Identificação e modelagem de soluções técnicas.",
      highlights: ["Análise de Sistemas", "APIs", "Engenharia de Software", "Planejamento de Projetos"],
      current: true,
    },
    {
      company: "Abase Sistemas",
      role: "Líder de Desenvolvimento",
      period: "Agosto 2023 - Novembro 2024",
      location: "Presencial",
      description: "Liderança de equipe de desenvolvedores, monitoramento de sistemas para garantir alta performance. Experiência com sistemas voltados à gestão pública municipal.",
      highlights: ["Liderança de Equipe", "Performance", "Gestão Pública", "Monitoramento"],
      current: false,
    },
    {
      company: "Abase Sistemas",
      role: "Desenvolvedor Full Stack",
      period: "Maio 2023 - Agosto 2023",
      location: "Presencial",
      description: "Desenvolvimento completo de sistemas, backend e frontend, com amplo domínio de SQL. Experiência com controle de versão e trabalho em equipes ágeis.",
      highlights: ["Full Stack", "SQL Avançado", "Git/GitLab", "Metodologias Ágeis"],
      current: false,
    },
    {
      company: "Solution Sistemas e Gestão",
      role: "Desenvolvedor de Software",
      period: "Janeiro 2023 - Maio 2023",
      location: "Presencial",
      description: "Desenvolvimento e manutenção de ERP de gestão empresarial voltado para o setor agrícola utilizando Genexus, Tomcat, PostgreSQL.",
      highlights: ["ERP", "Setor Agrícola", "Genexus", "PostgreSQL"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="geometric-shape absolute top-32 right-20 w-28 h-28 border-2 border-primary/10 rounded-lg transform rotate-12" 
             style={{ animationDelay: '1s' }} />
        <div className="geometric-shape absolute bottom-40 left-16 w-20 h-20 bg-accent/5 transform rotate-45" 
             style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiência <span className="text-primary">Profissional</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trajetória sólida em desenvolvimento de software, desde programador até CEO, 
            com foco em sistemas de gestão e liderança de equipes técnicas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/50"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute ${
                  index % 2 === 0 
                    ? 'left-4 md:right-4 md:left-auto' 
                    : 'left-4'
                } top-6 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-glow z-10`}></div>

                <Card className={`card-hover p-6 ml-12 md:ml-0 border-border/50 ${
                  exp.current ? 'border-primary/30 shadow-glow' : ''
                }`}>
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        {exp.current && <Badge className="bg-primary/20 text-primary border-primary/30">Atual</Badge>}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span key={hIndex} className="skill-badge text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="text-primary">Formação</span> Acadêmica
          </h3>
          <Card className="card-hover p-8 max-w-2xl mx-auto border-border/50 text-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Ciência da Computação</h4>
              <p className="text-muted-foreground">
                Universidade Regional Integrada do Alto Uruguai e das Missões - URI
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Março 2022 - Julho 2026</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;