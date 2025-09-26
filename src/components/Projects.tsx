import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, Globe, Image, Heart, Users } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: any;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI/ML' | 'Web Development' | 'Mobile' | 'Data Science';
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Fake News Detection System",
      description: "Advanced machine learning model achieving 95% accuracy in identifying fake news using supervised classification algorithms and Flask API integration.",
      icon: Brain,
      category: "AI/ML",
      technologies: ["Python", "XGBoost", "Random Forest", "AdaBoost", "Flask", "Postman"],
      features: [
        "95% classification accuracy",
        "Multiple ML algorithms comparison",
        "REST API with Flask",
        "Real-time news analysis"
      ],
      githubUrl: "#"
    },
    {
      title: "Brain MRI Tumor Classification",
      description: "Medical image classification project using pre-trained models and custom CNN architectures for accurate tumor detection in brain MRI scans.",
      icon: Image,
      category: "AI/ML",
      technologies: ["Python", "EfficientNetB3", "CNN", "TensorFlow", "Medical Imaging"],
      features: [
        "Pre-trained model integration",
        "Custom CNN architecture",
        "Medical image processing",
        "High accuracy tumor detection"
      ],
      githubUrl: "#"
    },
    {
      title: "LinkedIn Profile Web Scraper",
      description: "Automated web scraping system for extracting LinkedIn profile data with advanced data processing and analysis capabilities.",
      icon: Globe,
      category: "Data Science",
      technologies: ["Python", "Selenium", "BeautifulSoup", "Data Processing"],
      features: [
        "Automated profile extraction",
        "Data cleaning and processing",
        "Large-scale data collection",
        "Export to multiple formats"
      ],
      githubUrl: "#"
    },
    {
      title: "Medical Tourism Platform",
      description: "Comprehensive medical tourism service management application with both web and desktop interfaces for seamless patient experience.",
      icon: Heart,
      category: "Web Development",
      technologies: ["Laravel", "MySQL", "JavaScript", "JavaFX", "HTML", "CSS"],
      features: [
        "Multi-platform support",
        "Patient management system",
        "Service booking integration",
        "Real-time communication"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Skills-Based CV Scoring Platform",
      description: "Intelligent CV evaluation system with recommendation engine and rating mechanism built with modern React architecture.",
      icon: Users,
      category: "Web Development",
      technologies: ["ReactJS", "Node.js", "Machine Learning", "API Integration"],
      features: [
        "AI-powered CV analysis",
        "Skills matching algorithm",
        "Recommendation system",
        "Interactive dashboard"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "HR Agent Chatbot for Slack",
      description: "Intelligent HR automation system using Make.com to handle employee requests through Slack. Features centralized Airtable database for employee information, automated leave tracking, payslip access, and policy sharing with 24/7 availability.",
      icon: Users,
      category: "Web Development",
      technologies: ["Make.com", "Airtable", "Slack", "Automation", "Chatbot"],
      features: [
        "Automated HR request handling",
        "Centralized employee database",
        "24/7 self-service support",
        "Streamlined workflow processes"
      ],
      liveUrl: "#"
    }
  ];

  const categories = ["All", "AI/ML", "Web Development", "Data Science", "Mobile"];
  
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions in AI, machine learning, and full-stack development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-gradient-accent text-accent-foreground glow-accent" : "glow-on-hover"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-elevated group overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center glow-accent group-hover:animate-pulse-glow">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/5 text-primary text-xs rounded border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="px-6 pb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="p-6 pt-0 flex gap-3">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 glow-on-hover"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 bg-gradient-accent text-accent-foreground glow-on-hover"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="glow-on-hover"
            onClick={() => window.open('https://github.com/ikrammenyaoui', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;