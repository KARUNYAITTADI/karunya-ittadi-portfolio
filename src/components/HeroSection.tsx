import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary">
                  Ittadi Karunya
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6">
                Full Stack Developer
              </h2>
              
              <div className="flex items-center justify-center lg:justify-start mb-6 text-muted-foreground">
                <MapPin size={20} className="mr-2" />
                <span>Hyderabad, India</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Passionate Full Stack Developer with 1 year of hands-on experience in Java, Spring Boot, Angular, and Spring Security. 
                I build scalable web applications with clean code and modern technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  onClick={scrollToProjects}
                  className="hover-lift bg-gradient-primary hover:shadow-glow"
                  size="lg"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  onClick={scrollToContact}
                  className="hover-lift"
                  size="lg"
                >
                  Get In Touch
                </Button>
              </div>
              
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="ghost" size="sm" className="hover-lift p-2">
                  <Github size={24} />
                </Button>
                <Button variant="ghost" size="sm" className="hover-lift p-2">
                  <Linkedin size={24} />
                </Button>
                <Button variant="ghost" size="sm" className="hover-lift p-2">
                  <Mail size={24} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-primary rounded-full absolute -top-4 -right-4 opacity-20 animate-pulse"></div>
              <div className="w-72 h-72 bg-gradient-secondary rounded-full absolute top-4 right-4 opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;