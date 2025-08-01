import { Code2, Server, Database, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Frontend Development",
      description: "Angular, TypeScript, responsive design with modern UI/UX principles"
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Backend Development", 
      description: "Java, Spring Boot, RESTful APIs, microservices architecture"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Database Management",
      description: "SQL databases, data modeling, performance optimization"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security Implementation",
      description: "Spring Security, authentication workflows, secure coding practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Crafting Digital Solutions with Modern Technologies
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated Full Stack Developer with 1 year of professional experience, 
                specializing in building robust and scalable web applications. My journey in 
                software development has been driven by a passion for clean code, performance 
                optimization, and creating seamless user experiences.
              </p>
              
              <p>
                With expertise in Java and Spring Boot for backend development, and Angular 
                for creating dynamic frontend applications, I bring a comprehensive understanding 
                of the full software development lifecycle. I'm particularly skilled in 
                implementing secure authentication systems using Spring Security and designing 
                RESTful APIs that power modern web applications.
              </p>
              
              <p>
                Based in Hyderabad, I'm always eager to collaborate on challenging projects 
                that push the boundaries of technology and deliver real value to users. I 
                believe in continuous learning and staying updated with the latest industry 
                trends and best practices.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-lift project-card">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;