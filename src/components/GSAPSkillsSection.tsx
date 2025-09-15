import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { GSAPAnimations, useGSAP } from '@/hooks/useGSAP';

const GSAPSkillsSection = () => {
  const { gsap } = useGSAP();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      GSAPAnimations.revealOnScroll(titleRef.current, "up");

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.set(card, { 
            opacity: 0, 
            y: 80,
            scale: 0.8,
            rotationY: -15
          });

          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          });

          // Skill badges animation within each card
          const skillBadges = card.querySelectorAll('.skill-badge');
          gsap.set(skillBadges, { 
            opacity: 0, 
            scale: 0,
            rotation: -180
          });

          gsap.to(skillBadges, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: index * 0.1 + 0.3,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          });

          // Magnetic hover effect
          GSAPAnimations.magneticHover(card);
        }
      });

      // Parallax floating shapes
      gsap.utils.toArray('.skills-shape').forEach((shape: any, index) => {
        GSAPAnimations.floatingElements(shape);
        GSAPAnimations.parallax(shape, -0.1 - (index * 0.05));
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  const addToRefs = (el: HTMLDivElement, index: number) => {
    if (el && !cardsRef.current[index]) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-hero relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="skills-shape absolute top-20 left-1/4 w-16 h-16 bg-primary/5 rounded-lg transform rotate-45" />
        <div className="skills-shape absolute bottom-32 right-1/4 w-24 h-24 border border-accent/20 rounded-full" />
        <div className="skills-shape absolute top-1/2 left-10 w-12 h-12 bg-accent/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4 opacity-0">
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
              ref={(el: HTMLDivElement) => addToRefs(el, categoryIndex)}
              className="card-hover p-6 border-border/50 skills-card"
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
                      className="skill-badge opacity-0"
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

export default GSAPSkillsSection;