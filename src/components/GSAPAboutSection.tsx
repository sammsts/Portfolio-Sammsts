import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Award, Users, Lightbulb, Target } from 'lucide-react';
import { GSAPAnimations, useGSAP } from '@/hooks/useGSAP';

const GSAPAboutSection = () => {
  const { gsap } = useGSAP();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const highlightRefs = useRef<HTMLDivElement[]>([]);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      GSAPAnimations.revealOnScroll(titleRef.current, "up");

      // Content text reveal with typewriter effect
      const paragraphs = contentRef.current?.querySelectorAll('p');
      paragraphs?.forEach((p, index) => {
        gsap.set(p, { opacity: 0, y: 30 });
        gsap.to(p, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: p,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Highlight cards animation
      highlightRefs.current.forEach((card, index) => {
        if (card) {
          // Initial state
          gsap.set(card, {
            opacity: 0,
            scale: 0,
            rotation: -180,
            transformOrigin: "center center"
          });

          // Animate on scroll
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            delay: index * 0.15,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          });

          // Icon floating animation
          const icon = card.querySelector('.highlight-icon');
          if (icon) {
            gsap.to(icon, {
              y: -5,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.2
            });
          }

          // Magnetic hover effect
          GSAPAnimations.magneticHover(card);

          // Hover glow effect
          const handleHover = () => {
            gsap.to(card, {
              boxShadow: "0 0 30px rgba(196, 70, 230, 0.4)",
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const handleLeave = () => {
            gsap.to(card, {
              boxShadow: "0 0 0px rgba(196, 70, 230, 0)",
              duration: 0.5,
              ease: "power2.out"
            });
          };

          card.addEventListener('mouseenter', handleHover);
          card.addEventListener('mouseleave', handleLeave);
        }
      });

      // Parallax shapes
      gsap.utils.toArray('.about-shape').forEach((shape: any, index) => {
        GSAPAnimations.floatingElements(shape);
        GSAPAnimations.parallax(shape, -0.1 - (index * 0.05));
      });

      // Quote reveal animation
      const quote = sectionRef.current?.querySelector('blockquote');
      if (quote) {
        gsap.set(quote, { opacity: 0, x: -50 });
        gsap.to(quote, {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  const addToHighlightRefs = (el: HTMLDivElement, index: number) => {
    if (el && !highlightRefs.current[index]) {
      highlightRefs.current[index] = el;
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="about-shape absolute top-1/4 right-10 w-32 h-32 border border-primary/20 rounded-full" />
        <div className="about-shape absolute bottom-1/4 left-10 w-20 h-20 bg-accent/10 transform rotate-45" />
        <div className="about-shape absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-lg" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold opacity-0">
                Sobre <span className="text-primary">Mim</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
            </div>

            <div ref={contentRef} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sou um profissional apaixonado por tecnologia, com uma trajetória sólida 
                no desenvolvimento de sistemas e liderança de equipes. Atualmente, atuo 
                como CEO da <a href="https://svell.com.br" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-accent transition-colors">Svell</a>, 
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

            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-card/50 rounded-r-lg opacity-0">
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
                ref={(el: HTMLDivElement) => addToHighlightRefs(el, index)}
                className="p-6 text-center border-border/50 highlight-card opacity-0"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="highlight-icon p-4 bg-primary/10 rounded-full border border-primary/20">
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

export default GSAPAboutSection;