import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Ittadi Karunya</h3>
            <p className="text-background/80">Full Stack Java Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  const element = document.getElementById(link.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-background/80 hover:text-background transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="text-background hover:text-foreground hover:bg-background p-3" asChild>
              <a href="https://github.com/KARUNYAITTADI" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="text-background hover:text-foreground hover:bg-background p-3" asChild>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="text-background hover:text-foreground hover:bg-background p-3" asChild>
              <a href="mailto:karunyaittadi@gmail.com">
                <Mail size={20} />
              </a>
            </Button>
          </div>

          {/* Back to Top */}
          <div>
            <Button
              variant="outline"
              onClick={scrollToTop}
              className="border-background/20 text-background bg-background text-foreground"
            >
              Back to Top
            </Button>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Ittadi Karunya. Built with
              {/* <Heart size={16} className="text-red-400" /> */}
              using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;