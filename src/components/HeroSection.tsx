import { Shield, Terminal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden">
      {/* Scan line effect */}
      <div className="scan-line" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg animate-float opacity-30" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border border-secondary/20 rounded-full animate-float opacity-30" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 right-40 w-8 h-8 bg-primary/10 rounded animate-pulse" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Terminal-style intro */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> ./init_security_analyst.sh
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text">Alex Chen</span>
        </h1>

        {/* Subtitle with typing effect */}
        <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <span className="text-primary">&gt;</span> Aspiring Cybersecurity Professional
          <span className="terminal-cursor" />
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Passionate about protecting digital assets, analyzing threats, and building secure systems. 
          Ready to defend the digital frontier.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button 
            variant="cyber" 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="group"
          >
            <Shield className="w-5 h-5 group-hover:animate-pulse" />
            View My Work
          </Button>
          <Button 
            variant="cyberOutline" 
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary/50" />
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </section>
  );
};

export default HeroSection;
