import { 
  Shield, 
  Network, 
  Search, 
  Lock, 
  Terminal, 
  Database,
  Bug,
  Users,
  Globe,
  Brain
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Security Analytics & Monitoring", "Threat Detection", "Vulnerability Management", "Network Troubleshooting"],
    },
    {
      title: "Network Security",
      icon: Network,
      skills: ["Network Infrastructure Management", "VPN, DNS & DHCP Services", "Network Configuration", "TCP/IP"],
    },
    {
      title: "Penetration Testing",
      icon: Bug,
      skills: ["Ethical Hacking", "Vulnerability Assessment", "Security Testing", "Risk Analysis"],
    },
    {
      title: "Development & Systems",
      icon: Terminal,
      skills: ["Software Development", "Algorithmics", "Database Administration", "Business Systems"],
    },
    {
      title: "Digital & E-Commerce",
      icon: Globe,
      skills: ["Website Development", "SEO Optimization", "E-Commerce Platforms", "IT Infrastructure"],
    },
    {
      title: "AI & Technology",
      icon: Brain,
      skills: ["AI-Driven Technologies", "Digital Learning Tools", "Educational Technology", "AI Tools Integration"],
    },
  ];

  const additionalSkills = [
    { name: "Leadership & Team Management", icon: Users },
    { name: "Stakeholder Engagement", icon: Users },
    { name: "Strategic Planning", icon: Brain },
    { name: "Data-Driven Problem-Solving", icon: Database },
    { name: "Curriculum Development", icon: Globe },
    { name: "Complex Concept Communication", icon: Terminal },
  ];

  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-16 max-w-4xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono">02.</span> Skills & Expertise
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="cyber-border p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:box-glow transition-all">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Skills bar */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-muted-foreground font-mono text-sm mb-6 uppercase tracking-wider">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/50 hover:border-primary/50 hover:box-glow transition-all duration-300"
              >
                <skill.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
