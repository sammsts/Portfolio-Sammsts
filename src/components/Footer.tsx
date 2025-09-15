import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sammsts",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/samuelmacielsantos",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:samuelmacielsts@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
          {/* Logo and Description */}
          <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
                <img
                  src="/favicon.ico"
                  alt="Logo Samuel"
                  className="h-8 w-8 md:h-10 md:w-10 object-contain drop-shadow-lg"
                />
                <span className="sr-only">Samuel</span>
              </div>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer & CEO
              <br />
              Criando soluções digitais inovadoras
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-3 bg-background/50 hover:bg-primary/10 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-110 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Samuel Maciel dos Santos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;