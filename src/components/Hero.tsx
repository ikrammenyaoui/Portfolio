import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Mail, Phone, MapPin } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 animate-fade-up">
          {/* Left Side - Description */}
          <div className="md:w-3/5 text-left">
            {/* Main Content */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in">
              <span className="block text-white">IKRAM</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MENYAOUI</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-light">
              Engineering Student in Data Science & Artificial Intelligence
            </p>
            
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl leading-relaxed">
              Passionate about AI, data, and algorithms—seeking to drive innovation in data-driven technologies
            </p>
          </div>

          {/* Right Side - Profile Image */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-md opacity-70 animate-pulse"></div>
              <img 
                src="/images/profile-picture.jpg" 
                alt="Ikram Menyaoui" 
                className="relative w-full h-full rounded-full object-cover border-4 border-white/50 shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info - Now aligned left */}
        <div className="flex flex-wrap md:justify-start gap-6 mb-8 text-white/70">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Tunis, Tunisia</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm">menyaouiikram@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+216 26269509</span>
          </div>
        </div>

        {/* CTA Buttons - Now aligned left */}
        <div className="flex flex-col sm:flex-row gap-4 md:justify-start mb-16">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 glow-on-hover"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 glow-on-hover"
            onClick={() => window.open('https://github.com/ikrammenyaoui', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub Profile
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 glow-on-hover"
            onClick={() => window.open('/documents/ikram_menyaoui_cv.pdf', '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:max-w-3xl">
          <div className="text-left md:text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">3+</div>
            <div className="text-white/70">Years of Projects</div>
          </div>
          <div className="text-left md:text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-white/70">Projects Completed</div>
          </div>
          <div className="text-left md:text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-white/70">Technologies Mastered</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;