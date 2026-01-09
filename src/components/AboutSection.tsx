import { User, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Dedicated to understanding and mitigating cyber threats to protect organizations and individuals.",
    },
    {
      icon: Zap,
      title: "Continuous Learner",
      description: "Constantly expanding knowledge through hands-on labs, CTF competitions, and industry certifications.",
    },
    {
      icon: User,
      title: "Team Player",
      description: "Collaborative approach to security, understanding that defense requires collective effort.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary font-mono">01.</span> About Me
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm an aspiring cybersecurity professional with a strong foundation in network security, 
                threat analysis, and security operations. My journey began with a curiosity about how 
                systems can be both vulnerable and protected.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Through rigorous self-study, hands-on labs, and professional certifications, I've developed 
                practical skills in vulnerability assessment, incident response, and security monitoring. 
                I'm eager to apply my knowledge in a professional environment and continue growing as a 
                security analyst.
              </p>
              <div className="font-mono text-sm text-primary/70 space-y-1">
                <p><span className="text-muted-foreground">location:</span> "Remote / Flexible"</p>
                <p><span className="text-muted-foreground">status:</span> "Open to Opportunities"</p>
                <p><span className="text-muted-foreground">focus:</span> ["SOC", "Threat Analysis", "GRC"]</p>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="cyber-border p-5 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:animate-pulse-glow transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
