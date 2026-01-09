import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      name: "Email",
      icon: Mail,
      value: "jason.keyt@gmail.com",
      url: "mailto:jason.keyt@gmail.com",
    },
    {
      name: "Phone",
      icon: Phone,
      value: "0425-817-199",
      url: "tel:+61425817199",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      value: "Jason Keyt",
      url: "https://linkedin.com/in/jason-keyt",
    },
    {
      name: "Location",
      icon: MapPin,
      value: "Caulfield South, VIC",
      url: null,
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
            Whether you have a position available, want to discuss security challenges, or 
            just want to chat about the industry – my inbox is always open.
          </p>

          {/* CTA Button */}
          <Button
            variant="cyber"
            size="xl"
            className="mb-12 group"
            asChild
          >
            <a href="mailto:jason.keyt@gmail.com">
              <Send className="w-5 h-5 group-hover:animate-pulse" />
              Say Hello
            </a>
          </Button>

          {/* Contact Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <div
                key={info.name}
                className="group flex flex-col items-center gap-2 p-4 rounded-lg cyber-border bg-card/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="p-3 rounded-full border border-primary/30 text-primary group-hover:box-glow group-hover:border-primary/60 transition-all">
                  <info.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{info.name}</span>
                {info.url ? (
                  <a
                    href={info.url}
                    target={info.name === "LinkedIn" ? "_blank" : undefined}
                    rel={info.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="text-sm text-foreground hover:text-primary transition-colors text-center"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-sm text-foreground text-center">{info.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* References note */}
          <p className="mt-12 text-sm text-muted-foreground font-mono">
            <span className="text-primary">//</span> References available on request
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
