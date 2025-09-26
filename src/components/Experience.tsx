import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Madinah Innovators",
      position: "Automation & AI Intern",
      location: "Remote",
      duration: "Jul 2025 - Aug 2025 · 2 mos",
      description: "Designed and implemented an HR chatbot scenario using Make.com to automate employee requests in Slack. Built and managed a centralized database in Airtable to store and retrieve employee information efficiently. Automated HR tasks including leave tracking, payslip access, and policy sharing to provide instant, self-service support.",
      skills: ["Make.com", "Airtable", "Slack Automation", "HR Process Automation", "Chatbot Development"]
    },
    {
      company: "Henkel Alki",
      position: "Data Analysis Intern",
      location: "Tunis",
      duration: "June – August 2024",
      description: "Correlation between NDVI/EVI and agricultural yield. Analysis and predictive modeling. Data visualization for decision-making.",
      skills: ["Data Analysis", "Predictive Modeling", "Data Visualization", "Agricultural Analytics"]
    },
    {
      company: "Dnext",
      position: "Data Analysis Intern",
      location: "Sousse",
      duration: "November 2021 – May 2023",
      description: "Creation and structuring of databases to support decision-making. Business data analysis and development of visual reports. Support for internal communication through interactive dashboards.",
      skills: ["Database Design", "Business Intelligence", "Dashboard Development", "Data Analysis"]
    },
    {
      company: "Amen Bank",
      position: "Mobile Development Intern",
      location: "Tunis",
      duration: "July – November 2021",
      description: "Development of a mobile application for credit management.",
      skills: ["Mobile Development", "Credit Management Systems", "Application Development"]
    },
    {
      company: "INS",
      position: "Web Developer (Final Year Project)",
      location: "Tunis",
      duration: "January – July 2020",
      description: "Development of an application for managing information and automatic statistical requests. Automated data extraction and storage using MongoDB.",
      skills: ["Web Development", "MongoDB", "Data Extraction", "Statistical Analysis"]
    },
    {
      company: "Tunisie Télécom",
      position: "Mobile Development Intern",
      location: "Tunis",
      duration: "July – September 2018",
      description: "Development of a network design application.",
      skills: ["Mobile Development", "Network Design", "Application Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience in data science, development, and analytics
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot"></div>
                
                {/* Content Card */}
                <Card 
                  className={`card-elevated ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'
                  } md:w-5/12 animate-fade-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-accent/10 text-accent border border-accent/20 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            Want to know more about my professional journey?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 text-accent hover:text-accent-glow font-medium transition-colors"
          >
            Let's connect →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;