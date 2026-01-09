import { User, Target, Zap, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Transitioning 25+ years of IT and education leadership into protecting and securing digital assets.",
    },
    {
      icon: GraduationCap,
      title: "Certified Professional",
      description: "CompTIA Security+, CySA+, PenTest+, Network+ certified with CEH currently in progress.",
    },
    {
      icon: Zap,
      title: "Technical Expertise",
      description: "Strong foundation in network infrastructure, vulnerability management, and security analytics.",
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
                A highly experienced educator and IT professional with over 25 years of leadership 
                in Secondary Education and Business Management, specializing in IT, e-commerce, 
                and digital infrastructure.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I have successfully managed business operations, including IT infrastructure, SEO, 
                website development, and the application of AI tools to optimize strategies. Currently 
                upskilling in Ethical Penetration Testing with extensive CompTIA certifications.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My goal is to transition into the cyber security field, applying my skills in 
                network security, risk management, and incident response to protect and secure 
                digital assets.
              </p>
              <div className="font-mono text-sm text-primary/70 space-y-1">
                <p><span className="text-muted-foreground">location:</span> "Caulfield South, VIC"</p>
                <p><span className="text-muted-foreground">status:</span> "Open to Opportunities"</p>
                <p><span className="text-muted-foreground">focus:</span> ["PenTest", "SOC", "Vulnerability Assessment"]</p>
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
