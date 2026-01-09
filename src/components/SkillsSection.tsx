import { 
  Shield, 
  Network, 
  Search, 
  Lock, 
  Terminal, 
  Database,
  Bug,
  FileCode
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Security Operations",
      icon: Shield,
      skills: ["SIEM (Splunk, ELK)", "Log Analysis", "Incident Response", "Threat Hunting"],
    },
    {
      title: "Network Security",
      icon: Network,
      skills: ["Wireshark", "TCP/IP", "Firewalls", "IDS/IPS"],
    },
    {
      title: "Vulnerability Assessment",
      icon: Search,
      skills: ["Nmap", "Nessus", "Burp Suite", "OWASP Top 10"],
    },
    {
      title: "Cryptography",
      icon: Lock,
      skills: ["PKI", "Encryption", "Hashing", "Digital Signatures"],
    },
    {
      title: "Scripting & Automation",
      icon: Terminal,
      skills: ["Python", "Bash", "PowerShell", "Regex"],
    },
    {
      title: "Systems & Platforms",
      icon: Database,
      skills: ["Linux", "Windows Server", "Active Directory", "Cloud (AWS/Azure)"],
    },
  ];

  const tools = [
    { name: "Kali Linux", icon: Terminal },
    { name: "Metasploit", icon: Bug },
    { name: "Wireshark", icon: Network },
    { name: "Burp Suite", icon: Search },
    { name: "Splunk", icon: Database },
    { name: "Python", icon: FileCode },
  ];

  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-16 max-w-4xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono">02.</span> Skills & Tools
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

        {/* Tools bar */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-muted-foreground font-mono text-sm mb-6 uppercase tracking-wider">
            Preferred Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/50 hover:border-primary/50 hover:box-glow transition-all duration-300"
              >
                <tool.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
