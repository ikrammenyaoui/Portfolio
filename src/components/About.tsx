import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Expertise in XGBoost, Random Forest, CNN architectures, and deep learning frameworks"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in ReactJS, Laravel, Flask, and modern web development practices"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Experience with data analysis, predictive modeling, and business intelligence"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Leading training workshops and communications in tech communities"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Passionate Data Scientist & AI Enthusiast
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently pursuing an engineering degree, I am a second-cycle computer engineering student 
                specializing in data science. Passionate about artificial intelligence, data, and algorithms, 
                I possess strong technical skills and analytical thinking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am seeking to enhance my career by contributing to innovative projects in the field of 
                data-driven technologies, combining my academic knowledge with practical experience gained 
                through internships and personal projects.
              </p>
            </div>

            {/* Key Skills Preview */}
            <div className="bg-gradient-card rounded-xl p-6 glow-on-hover">
              <h4 className="font-display font-semibold mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'ReactJS', 'Data Analysis', 'Flask', 'Deep Learning'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="card-elevated animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center glow-accent">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h4 className="font-display font-semibold mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Fake News Detection Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">7+</div>
            <div className="text-sm text-muted-foreground">Tech Stacks Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Project Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;