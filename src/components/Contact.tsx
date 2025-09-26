import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "menyaouiikram@gmail.com",
      href: "mailto:menyaouiikram@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 26269509",
      href: "tel:+21626269509",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tunis, Tunisia",
      href: "https://maps.google.com/?q=Tunis,Tunisia",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ikrammenyaoui",
      href: "https://github.com/ikrammenyaoui",
      color: "from-gray-700 to-gray-900"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects? Let's discuss how we can work together 
            to create data-driven solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-display font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to connect with fellow developers, researchers, and innovators. 
                Whether you have a project idea, collaboration opportunity, or just want to chat 
                about data science and AI, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="card-elevated group cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(item.href, '_blank')}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center glow-accent group-hover:animate-pulse-glow`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {item.label}
                        </h4>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold">Quick Actions</h4>
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="justify-start glow-on-hover"
                  onClick={() => window.open('https://github.com/ikrammenyaoui', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View My GitHub Projects
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start glow-on-hover"
                  onClick={() => window.location.href = 'mailto:menyaouiikram@gmail.com?subject=Collaboration Opportunity'}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Direct Email
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start glow-on-hover"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  View My Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-elevated animate-slide-in-right">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="glow-on-hover"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="glow-on-hover"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="glow-on-hover"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, collaboration idea, or just say hello..."
                    className="glow-on-hover resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-accent text-accent-foreground glow-on-hover"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By sending a message, you agree to be contacted regarding your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 glow-accent">
            <h3 className="text-3xl font-display font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's combine our skills to create innovative solutions in data science, 
              AI, and web development that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-accent-foreground glow-on-hover"
                onClick={() => window.location.href = 'mailto:menyaouiikram@gmail.com?subject=Collaboration Opportunity'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glow-on-hover"
                onClick={() => window.open('https://github.com/ikrammenyaoui', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View My Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;