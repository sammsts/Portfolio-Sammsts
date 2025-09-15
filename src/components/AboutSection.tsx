import { Card } from '@/components/ui/card';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "5+ Anos",
      description: "Experiência em desenvolvimento",
    },
    {
      icon: Users,
      title: "Liderança",
      description: "Gestão de equipes de desenvolvimento",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Soluções tecnológicas criativas",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Foco em performance e qualidade",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="geometric-shape absolute top-1/4 right-10 w-32 h-32 border border-primary/20 rounded-full" 
             style={{ animationDelay: '1s' }} />
        <div className="geometric-shape absolute bottom-1/4 left-10 w-20 h-20 bg-accent/10 transform rotate-45" 
             style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Sobre <span className="text-primary">Mim</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sou um profissional apaixonado por tecnologia, com uma trajetória sólida 
                no desenvolvimento de sistemas e liderança de equipes. Atualmente, atuo 
                como <span className="text-primary font-semibold">CEO da Svell</span>, 
                onde defino estratégias inovadoras para entregar soluções digitais que 
                geram impacto real nos negócios.
              </p>
              
              <p>
                Minha experiência abrange desde o desenvolvimento Full Stack até a 
                gestão de pessoas e processos. Tenho expertise em automação, integração 
                de APIs, bancos de dados e metodologias ágeis, sempre promovendo 
                práticas que assegurem alta performance e manutenibilidade dos sistemas.
              </p>

              <p>
                Meu objetivo é impulsionar a inovação tecnológica, criando soluções 
                que não apenas atendam às necessidades dos clientes, mas que também 
                estabeleçam novos padrões de excelência no mercado.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-card/50 rounded-r-lg">
              <p className="text-lg italic text-muted-foreground">
                "Um problema é uma oportunidade para você dar o seu melhor."
              </p>
            </blockquote>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="card-hover p-6 text-center border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full border border-primary/20">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;