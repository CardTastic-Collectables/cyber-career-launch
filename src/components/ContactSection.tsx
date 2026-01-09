import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/",
      handle: "your-profile",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/",
      handle: "your-username",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      handle: "your.email@example.com",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-16 max-w-4xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono">05.</span> Get In Touch
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            I'm actively seeking opportunities in cybersecurity and would love to connect. 
            Whether you have a position available, want to collaborate on a project, or just 
            want to chat about security – my inbox is always open.
          </p>

          {/* CTA Button */}
          <Button
            variant="cyber"
            size="xl"
            className="mb-12 group"
            asChild
          >
            <a href="mailto:your.email@example.com">
              <Send className="w-5 h-5 group-hover:animate-pulse" />
              Say Hello
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-card/50 transition-all duration-300"
              >
                <div className="p-3 rounded-full border border-primary/30 text-primary group-hover:box-glow group-hover:border-primary/60 transition-all">
                  <link.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
