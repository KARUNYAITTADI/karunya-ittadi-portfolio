import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "🔧",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Spring Boot", level: "Advanced" },
        { name: "Spring Security", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Microservices", level: "Intermediate" },
        { name: "Maven", level: "Intermediate" }
      ]
    },
    {
      title: "Frontend Development", 
      icon: "🎨",
      skills: [
        { name: "Angular", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Responsive Design", level: "Advanced" }
      ]
    },
    {
      title: "Database & Tools",
      icon: "🗄️", 
      skills: [
        { name: "MySQL", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Beginner" },
        { name: "Swagger", level: "Intermediate" },
        { name: "Postman", level: "Advanced" }
      ]
    },
    {
      title: "Methodologies & Practices",
      icon: "⚡",
      skills: [
        { name: "Agile/Scrum", level: "Intermediate" },
        { name: "Clean Code", level: "Advanced" },
        { name: "TDD", level: "Intermediate" },
        { name: "Code Review", level: "Intermediate" },
        { name: "Performance Optimization", level: "Intermediate" },
        { name: "API Documentation", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary text-primary-foreground";
      case "Intermediate":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and secure web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift project-card h-full">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <Badge 
                        className={`text-xs skill-badge ${getLevelColor(skill.level)}`}
                        variant="secondary"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Full Stack Development", "RESTful API Design", "Database Design",
              "Authentication Systems", "Responsive Web Design", "Version Control",
              "Agile Development", "Code Documentation", "Performance Optimization",
              "Cross-browser Compatibility", "Real-time Applications", "Team Collaboration"
            ].map((competency, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="skill-badge text-sm py-2 px-4"
              >
                {competency}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;