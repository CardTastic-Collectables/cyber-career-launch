import { ExternalLink, Github, Shield, Network, Bug, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Home Security Lab",
      description: "Built a virtualized security lab using VirtualBox with Kali Linux, Windows Server, and Metasploitable. Practiced penetration testing, vulnerability scanning, and incident response scenarios.",
      tags: ["Virtualization", "Penetration Testing", "Lab Environment"],
      icon: Network,
      links: {
        github: "#",
        demo: null,
      },
    },
    {
      title: "SIEM Implementation",
      description: "Deployed and configured ELK Stack for log aggregation and analysis. Created custom dashboards and alerts for detecting suspicious activities and security events.",
      tags: ["ELK Stack", "Log Analysis", "Detection Rules"],
      icon: Shield,
      links: {
        github: "#",
        demo: null,
      },
    },
    {
      title: "Malware Analysis Sandbox",
      description: "Set up an isolated malware analysis environment using REMnux and FlareVM. Analyzed malware samples to understand behavior patterns and indicators of compromise.",
      tags: ["Malware Analysis", "Reverse Engineering", "Threat Intel"],
      icon: Bug,
      links: {
        github: "#",
        demo: null,
      },
    },
    {
      title: "Password Security Auditor",
      description: "Developed a Python tool to audit password policies and check for compromised credentials against known breach databases. Implements secure hashing comparisons.",
      tags: ["Python", "Security Automation", "Password Security"],
      icon: Lock,
      links: {
        github: "#",
        demo: null,
      },
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-16 max-w-4xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono">03.</span> Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="cyber-border p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:box-glow transition-all">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                  {project.links.github && (
                    <Button variant="cyberGhost" size="icon" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="cyberGhost" size="icon" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
