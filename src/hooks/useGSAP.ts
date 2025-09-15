import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

export const useGSAP = () => {
  const timeline = useRef<gsap.core.Timeline>();

  useEffect(() => {
    timeline.current = gsap.timeline();
    return () => {
      timeline.current?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    gsap,
    ScrollTrigger,
    timeline: timeline.current
  };
};

// Animation utilities inspired by dvlpr.pro
export const GSAPAnimations = {
  // Hero text reveal animation
  revealText: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element, 
      {
        y: 100,
        opacity: 0,
        skewY: 7
      },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 0.5,
        delay,
        ease: "power2.out"
      }
    );
  },

  // Typing effect for text
  typeWriter: (element: string | Element, text: string, delay = 0) => {
    return gsap.to(element, {
      duration: text.length * 0.05,
      delay,
      text: {
        value: text,
        delimiter: ""
      },
      ease: "none"
    });
  },

  // Floating elements animation
  floatingElements: (element: string | Element) => {
    return gsap.to(element, {
      y: -20,
      rotation: 360,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  },

  // Scale in animation
  scaleIn: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        scale: 0,
        rotation: -180,
        opacity: 0
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "back.out(1.7)"
      }
    );
  },

  // Slide in from sides
  slideInLeft: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power2.out"
      }
    );
  },

  slideInRight: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power2.out"
      }
    );
  },

  // Parallax scrolling effect
  parallax: (element: string | Element, speed = -0.5) => {
    return gsap.to(element, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  },

  // Reveal on scroll
  revealOnScroll: (element: string | Element, direction = "up") => {
    const fromProps: any = { opacity: 0, duration: 1 };
    
    switch (direction) {
      case "up":
        fromProps.y = 50;
        break;
      case "down":
        fromProps.y = -50;
        break;
      case "left":
        fromProps.x = -50;
        break;
      case "right":
        fromProps.x = 50;
        break;
      default:
        fromProps.scale = 0.8;
    }

    return gsap.fromTo(element, fromProps, {
      ...Object.keys(fromProps).reduce((acc, key) => {
        if (key !== 'opacity' && key !== 'duration') {
          acc[key] = 0;
        }
        return acc;
      }, {} as any),
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  },

  // Stagger animation for lists
  staggerIn: (elements: string | Element[], delay = 0) => {
    return gsap.fromTo(elements, 
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
  },

  // Magnetic hover effect
  magneticHover: (element: string | Element) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }
};

export default useGSAP;