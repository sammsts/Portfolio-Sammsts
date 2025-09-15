import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { GSAPAnimations, useGSAP } from '@/hooks/useGSAP';

const GSAPNavigation = () => {
  const { gsap } = useGSAP();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Animate nav background on scroll
      if (navRef.current) {
        gsap.to(navRef.current, {
          backgroundColor: scrolled ? 'rgba(5, 8, 25, 0.9)' : 'rgba(5, 8, 25, 0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [gsap]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial navigation animation
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.add(GSAPAnimations.slideInLeft(logoRef.current, 0))
        .add(GSAPAnimations.slideInRight(menuItemsRef.current, 0.2))
        .add(GSAPAnimations.scaleIn(ctaButtonRef.current, 0.4));

      // Magnetic effects
      GSAPAnimations.magneticHover(logoRef.current);
      GSAPAnimations.magneticHover(ctaButtonRef.current);

      // Menu items hover animations
      const menuItems = menuItemsRef.current?.querySelectorAll('button');
      menuItems?.forEach((item, index) => {
        const handleHover = () => {
          gsap.to(item, {
            scale: 1.05,
            color: "#c946e6",
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleLeave = () => {
          gsap.to(item, {
            scale: 1,
            color: "",
            duration: 0.3,
            ease: "power2.out"
          });
        };

        item.addEventListener('mouseenter', handleHover);
        item.addEventListener('mouseleave', handleLeave);
      });

    }, navRef);

    return () => ctx.revert();
  }, [gsap]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Smooth GSAP scroll instead of browser scroll
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'experience', label: 'Experiência' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            ref={logoRef}
            className="text-2xl font-bold cursor-pointer opacity-0"
            onClick={() => scrollToSection('home')}
            style={{ transform: 'translateX(-50px)' }}
          >
            {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/favicon.ico"
              alt="Logo Samuel"
              className="h-8 w-8 md:h-10 md:w-10 object-contain drop-shadow-lg"
            />
            <span className="sr-only">Samuel</span>
          </div>
          </div>

          {/* Desktop Navigation */}
          <div 
            ref={menuItemsRef}
            className="hidden md:flex items-center space-x-8 opacity-0"
            style={{ transform: 'translateX(50px)' }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="link-hover text-muted-foreground hover:text-foreground transition-colors duration-300 relative"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div 
            ref={ctaButtonRef}
            className="hidden md:block opacity-0"
            style={{ transform: 'scale(0)' }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-glow"
              variant="outline"
            >
              Vamos conversar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card/95 backdrop-blur-lg rounded-lg border border-border/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-glow mt-4"
                variant="outline"
              >
                Vamos conversar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GSAPNavigation;