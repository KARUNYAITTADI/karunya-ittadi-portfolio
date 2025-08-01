import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp, Database, Shield, Search, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Med-worldexpo",
      subtitle: "Healthcare Exhibition Platform",
      description: "A comprehensive healthcare exhibition platform built with Java Spring Boot and Angular, featuring real-time components, universal search capabilities, and secure authentication workflows.",
      fullDescription: `Med-worldexpo is a sophisticated healthcare exhibition platform designed to connect medical professionals, exhibitors, and attendees in a seamless digital environment. The platform serves as a comprehensive solution for healthcare exhibitions, conferences, and networking events.

The application features a robust backend built with Java Spring Boot, implementing RESTful APIs that handle complex business logic for user management, exhibition listings, booking systems, and real-time communication. The frontend is developed using Angular with TypeScript, providing a responsive and intuitive user interface.

Key architectural decisions include implementing microservices patterns for scalability, using Spring Security for comprehensive authentication and authorization, and integrating real-time features for live updates during exhibitions. The platform supports thousands of concurrent users during peak exhibition periods.`,
      technologies: ["Java", "Spring Boot", "Angular", "Spring Security", "MySQL", "TypeScript", "REST APIs", "Swagger"],
      features: [
        {
          icon: <Database className="w-5 h-5" />,
          title: "RESTful API Architecture",
          description: "Designed and implemented comprehensive REST APIs with proper HTTP methods, status codes, and resource modeling. Achieved 99.9% uptime with response times under 200ms."
        },
        {
          icon: <Search className="w-5 h-5" />,
          title: "Universal Search Implementation", 
          description: "Built advanced search functionality with filters, pagination, and real-time suggestions. Supports multi-criteria search across exhibitions, companies, and products."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Real-time Angular Components",
          description: "Developed dynamic Angular components with WebSocket integration for live updates, real-time notifications, and instant data synchronization across multiple clients."
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Authentication Workflows",
          description: "Implemented secure authentication using Spring Security with JWT tokens, role-based access control, and session management for different user types (exhibitors, attendees, admins)."
        }
      ],
      achievements: [
        "Reduced API response time by 40% through database optimization",
        "Implemented real-time features supporting 1000+ concurrent users",
        "Achieved 95% code coverage with comprehensive unit testing",
        "Documented APIs using Swagger with 100% endpoint coverage"
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Portfolio & Blog",
      description: "A modern, responsive portfolio website built with React and TypeScript, showcasing professional experience and technical skills.",
      fullDescription: `This portfolio website serves as a professional showcase of my development skills and career journey. Built using modern web technologies, it demonstrates proficiency in frontend development, responsive design, and user experience optimization.

The website features a clean, professional design with smooth animations and interactive elements. It's built with accessibility in mind, ensuring compliance with WCAG guidelines and providing an excellent experience across all devices and browsers.

The site includes dynamic content management, SEO optimization, and performance optimization techniques resulting in excellent Lighthouse scores across all metrics.`,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vite"],
      features: [
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Responsive Design",
          description: "Mobile-first approach with seamless experience across all device sizes and orientations."
        },
        {
          icon: <Search className="w-5 h-5" />,
          title: "SEO Optimized",
          description: "Implemented SEO best practices with proper meta tags, semantic HTML, and performance optimization."
        }
      ],
      achievements: [
        "Achieved 95+ Lighthouse performance score",
        "Implemented smooth animations and micro-interactions",
        "Fully responsive design tested across 15+ devices"
      ],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing practical applications of modern web development technologies and best practices
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift project-card overflow-hidden">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 flex-shrink-0">
                    <Button variant="outline" size="sm" className="hover-lift">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                    <Button variant="outline" size="sm" className="hover-lift">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="skill-badge"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <Collapsible 
                open={expandedProject === index}
                onOpenChange={() => toggleProject(index)}
              >
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between p-6 hover:bg-muted/50"
                  >
                    <span className="font-medium">
                      {expandedProject === index ? 'Hide Details' : 'View Details'}
                    </span>
                    {expandedProject === index ? 
                      <ChevronUp size={20} /> : 
                      <ChevronDown size={20} />
                    }
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Project Overview</h4>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {project.fullDescription}
                        </p>
                      </div>
                      
                      {project.features && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {project.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex gap-3 p-4 bg-muted/30 rounded-lg">
                                <div className="text-primary mt-1">
                                  {feature.icon}
                                </div>
                                <div>
                                  <h5 className="font-medium text-foreground mb-1">
                                    {feature.title}
                                  </h5>
                                  <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Key Achievements</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;