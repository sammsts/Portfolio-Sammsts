import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.jpg';
import { GSAPAnimations, useGSAP } from '@/hooks/useGSAP';

const HeroSection = () => {
  const { gsap } = useGSAP();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create master timeline
      const tl = gsap.timeline();

      // Animate greeting first
      tl.add(GSAPAnimations.slideInLeft(greetingRef.current, 0))
        .add(GSAPAnimations.revealText(titleRef.current, 0))
        .add(GSAPAnimations.revealText(subtitleRef.current, 0))
        .add(GSAPAnimations.slideInLeft(descriptionRef.current, 0))
        .add(GSAPAnimations.slideInLeft(buttonsRef.current, 0))
        .add(GSAPAnimations.slideInLeft(socialRef.current, 0))
        .add(GSAPAnimations.scaleIn(imageRef.current, 0));

      // Floating geometric shapes
      gsap.utils.toArray('.geometric-shape').forEach((shape: any, index) => {
        GSAPAnimations.floatingElements(shape);
        GSAPAnimations.parallax(shape, -0.2 - (index * 0.1));
      });

      // Parallax background gradient
      GSAPAnimations.parallax('.hero-bg', -0.3);

      // Magnetic effect on buttons
      GSAPAnimations.magneticHover('.magnetic-btn');
      
    }, heroRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax background */}
      <div className="hero-bg absolute inset-0 bg-gradient-hero opacity-50"></div>
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="geometric-shape absolute top-20 left-10 w-20 h-20 bg-primary rounded-lg transform rotate-45" 
             style={{ animationDelay: '0s' }} />
        <div className="geometric-shape absolute top-40 right-20 w-16 h-16 bg-accent rounded-full" 
             style={{ animationDelay: '2s' }} />
        <div className="geometric-shape absolute bottom-40 left-20 w-12 h-12 bg-primary transform rotate-45" 
             style={{ animationDelay: '4s' }} />
        <div className="geometric-shape absolute bottom-20 right-40 w-24 h-24 border-2 border-accent rounded-lg transform rotate-12" 
             style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Hero Title Block - dvlpr.pro inspired */}
            <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
              <p
                ref={greetingRef}
                className="text-primary text-lg md:text-xl font-medium tracking-wide opacity-0"
                style={{ transform: 'translateX(-50px)' }}
              >
                Olá, eu sou
              </p>
              <h1
                ref={titleRef}
                className="hero-title opacity-0 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
                style={{ transform: 'translateY(100px) skew(0deg, 7deg)' }}
              >
                Samuel
              </h1>
              <h2
                ref={subtitleRef}
                className="text-2xl md:text-4xl font-semibold text-muted-foreground opacity-0"
                style={{ transform: 'translateY(100px) skew(0deg, 7deg)' }}
              >
                <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent font-bold">Full Stack Developer</span>
                <span className="text-primary font-bold"> & CEO</span>
              </h2>
            </div>

            <p ref={descriptionRef} className="hero-subtitle max-w-2xl opacity-0" style={{ transform: 'translateX(-100px)' }}>
              Profissional Full Stack com mais de cinco anos de experiência, 
              dedicado ao desenvolvimento de sistemas inovadores. CEO da Svell, 
              especializado em automação de processos, integração de APIs e 
              liderança de equipes de desenvolvimento.
            </p>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap gap-4 opacity-0" style={{ transform: 'translateX(-100px)' }}>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="btn-glow px-8 py-3 text-lg magnetic-btn"
                size="lg"
              >
                Ver Portfólio
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline" 
                className="px-8 py-3 text-lg border-primary/20 hover:border-primary/40 magnetic-btn"
                size="lg"
              >
                Sobre mim
              </Button>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex items-center space-x-6 opacity-0" style={{ transform: 'translateX(-100px)' }}>
              <a 
                href="https://github.com/sammsts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card/50 hover:bg-primary/10 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/samuelmacielsantos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card/50 hover:bg-primary/10 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:samuelmacielsts@gmail.com"
                className="p-3 bg-card/50 hover:bg-primary/10 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Hero Illustration */}
          <div ref={imageRef} className="relative opacity-0" style={{ transform: 'scale(0) rotate(-180deg)' }}>
            <div className="relative z-10">
              <img 
                src={heroIllustration} 
                alt="Ilustração 3D de um ambiente de desenvolvimento" 
                className="w-full h-auto rounded-lg shadow-glow"
              />
            </div>
            {/* Glow effect behind illustration */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-lg transform scale-110 -z-10"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;