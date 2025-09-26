import { Github, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ikrammenyaoui",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:menyaouiikram@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+21626269509",
      label: "Phone"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              Ikram <span className="gradient-text">Menyaoui</span>
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Engineering student specializing in Data Science & Artificial Intelligence. 
              Passionate about creating innovative solutions through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:glow-accent transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-primary-foreground/80 hover:text-accent text-left transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium">Email</h5>
                <a 
                  href="mailto:menyaouiikram@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  menyaouiikram@gmail.com
                </a>
              </div>
              <div>
                <h5 className="font-medium">Phone</h5>
                <a 
                  href="tel:+21626269509"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +216 26269509
                </a>
              </div>
              <div>
                <h5 className="font-medium">Location</h5>
                <p className="text-primary-foreground/80">Tunis, Tunisia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <span>© {currentYear} Ikram Menyaoui. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>using ReactJS & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <button
                onClick={() => scrollToSection('#home')}
                className="hover:text-accent transition-colors"
              >
                Back to Top
              </button>
              <span>•</span>
              <button
                onClick={() => window.open('https://github.com/ikrammenyaoui', '_blank')}
                className="hover:text-accent transition-colors"
              >
                View Source
              </button>
            </div>
          </div>
        </div>

        {/* Additional Credits */}
        <div className="py-4 text-center border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/60">
            Designed & Developed with modern web technologies • 
            Optimized for performance & accessibility • 
            Built for recruiters and collaborators
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;