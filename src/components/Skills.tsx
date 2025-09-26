import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from 'react';
import { 
  Code, Database, Brain, Globe, Smartphone, 
  Server, Cpu, BarChart, GitBranch, Zap
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: any;
}

interface SkillCategory {
  name: string;
  icon: any;
  skills: Skill[];
  color: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Python", level: 90, category: "language", icon: Code },
        { name: "JavaScript", level: 85, category: "language", icon: Code },
        { name: "Java", level: 80, category: "language", icon: Code },
        { name: "PHP", level: 75, category: "language", icon: Code },
      ]
    },
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "XGBoost", level: 90, category: "ai", icon: Brain },
        { name: "Random Forest", level: 88, category: "ai", icon: Brain },
        { name: "CNN", level: 85, category: "ai", icon: Brain },
        { name: "EfficientNetB3", level: 82, category: "ai", icon: Brain },
      ]
    },
    {
      name: "Web Frameworks",
      icon: Globe,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "ReactJS", level: 88, category: "web", icon: Globe },
        { name: "Flask", level: 85, category: "web", icon: Globe },
        { name: "Laravel", level: 80, category: "web", icon: Globe },
        { name: "Make.com", level: 80, category: "web", icon: Globe },
        { name: "FastAPI", level: 75, category: "web", icon: Globe },
      ]
    },
    {
      name: "Databases & Tools",
      icon: Database,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "MySQL", level: 85, category: "database", icon: Database },
        { name: "MongoDB", level: 80, category: "database", icon: Database },
        { name: "Airtable", level: 75, category: "database", icon: Database },
        { name: "Git/GitHub", level: 90, category: "tool", icon: GitBranch },
        { name: "Postman", level: 85, category: "tool", icon: Zap },
      ]
    },
    {
      name: "Data Science",
      icon: BarChart,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Data Analysis", level: 90, category: "data", icon: BarChart },
        { name: "Web Scraping", level: 85, category: "data", icon: BarChart },
        { name: "Data Visualization", level: 82, category: "data", icon: BarChart },
        { name: "Statistical Analysis", level: 80, category: "data", icon: BarChart },
      ]
    },
    {
      name: "Mobile & Desktop",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "JavaFX", level: 75, category: "mobile", icon: Smartphone },
        { name: "Mobile Development", level: 70, category: "mobile", icon: Smartphone },
        { name: "Cross-platform", level: 72, category: "mobile", icon: Smartphone },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const ProgressBar = ({ skill, delay }: { skill: Skill; delay: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across multiple domains of technology and data science
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="card-elevated animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center glow-accent`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{category.name}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar 
                      key={skillIndex} 
                      skill={skill} 
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-display font-semibold mb-8">Additional Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Selenium', 'BeautifulSoup', 'Spring Boot', 'IntelliJ', 'Scene Builder',
              'Image Processing', 'Recommendation Systems', 'Project Management',
              'REST APIs', 'Full-Stack Development', 'Business Intelligence',
              'Interactive Dashboards', 'Scrum Methodology', 'Deep Learning'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-card border border-accent/20 rounded-full text-sm font-medium hover:bg-accent/10 hover:glow-accent transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Proficiency Legend */}
        <div className="mt-16 bg-gradient-card rounded-xl p-6 max-w-2xl mx-auto">
          <h4 className="font-display font-semibold mb-4 text-center">Proficiency Levels</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">90-100%</div>
              <div className="text-sm text-muted-foreground">Expert</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">75-89%</div>
              <div className="text-sm text-muted-foreground">Advanced</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">60-74%</div>
              <div className="text-sm text-muted-foreground">Intermediate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;