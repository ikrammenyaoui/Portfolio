import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Award, Calendar, MapPin, Users } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Engineering Cycle in Computer Science",
      specialization: "Data Science & Artificial Intelligence",
      school: "ESPRIT",
      location: "Monastir",
      duration: "2023 – Present",
      status: "Current",
      description: "Specialized in advanced data science techniques, machine learning algorithms, and artificial intelligence applications."
    },
    {
      degree: "Bachelor's Degree",
      specialization: "Management Information Systems",
      school: "FSEG Nabeul",
      location: "Nabeul",
      duration: "2017 – 2020",
      status: "Completed",
      description: "Comprehensive study of information systems, database management, and business process optimization."
    },
    {
      degree: "High School Diploma",
      specialization: "Computer Science",
      school: "Khaznadar High School",
      location: "Le Bardo",
      duration: "2016 – 2017",
      status: "Completed",
      description: "Foundation in computer science principles and programming fundamentals."
    }
  ];

  const certificates = [
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      type: "AI/ML",
      icon: "🧠"
    },
    {
      title: "AI for Predictive Maintenance",
      issuer: "NVIDIA", 
      type: "AI/ML",
      icon: "⚙️"
    },
    {
      title: "Generative AI Explained",
      issuer: "NVIDIA",
      type: "AI/ML", 
      icon: "🎨"
    },
    {
      title: "Foundations of Industry 4.0",
      issuer: "NOVATION CITY",
      type: "Industry",
      icon: "🏭"
    },
    {
      title: "Scrum Methodology",
      issuer: "Certified Training",
      type: "Management",
      icon: "📋"
    }
  ];

  const community = [
    {
      role: "Head of Training & Workshops",
      organization: "Data Science Club, ESPRIT",
      description: "Leading technical training sessions and workshops for students interested in data science and AI",
      icon: "🎓"
    },
    {
      role: "Head of Communications",
      organization: "Microsoft Club, FSEG",
      description: "Managing communications and outreach initiatives for the Microsoft student community",
      icon: "📢"
    }
  ];

  const languages = [
    { name: "Arabic", level: 100, flag: "🇹🇳" },
    { name: "French", level: 100, flag: "🇫🇷" },
    { name: "English", level: 90, flag: "🇺🇸" }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in technology and leadership
          </p>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-card">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="card-elevated animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center glow-accent">
                          <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-display font-semibold mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-accent font-medium">{edu.specialization}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-accent/10 text-accent border border-accent/20' 
                              : 'bg-primary/10 text-primary border border-primary/20'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4" />
                            <span className="font-medium">{edu.school}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <Card 
                  key={index}
                  className="card-elevated animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h3 className="font-display font-semibold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground mb-3">{cert.issuer}</p>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      {cert.type}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="space-y-6">
              {community.map((role, index) => (
                <Card 
                  key={index}
                  className="card-elevated animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{role.icon}</div>
                      <div>
                        <h3 className="text-xl font-display font-semibold mb-1">{role.role}</h3>
                        <p className="text-accent font-medium mb-3">{role.organization}</p>
                        <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="languages">
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <Card 
                    key={index}
                    className="card-elevated animate-fade-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <h3 className="text-lg font-display font-semibold">{lang.name}</h3>
                        </div>
                        <span className="text-sm font-medium text-accent">{lang.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${lang.level}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;