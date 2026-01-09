import { Award, CheckCircle, BookOpen, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      status: "In Progress",
      date: "Expected 2025",
      description: "Foundational cybersecurity certification covering threat management, cryptography, and security operations.",
      inProgress: true,
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      status: "Completed",
      date: "2024",
      description: "Comprehensive program covering security fundamentals, Python, Linux, SQL, and SIEM tools.",
      inProgress: false,
    },
    {
      name: "TryHackMe - SOC Level 1",
      issuer: "TryHackMe",
      status: "Completed",
      date: "2024",
      description: "Hands-on training in SOC operations, log analysis, and threat detection.",
      inProgress: false,
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      year: "2023",
      relevant: ["Network Security", "Operating Systems", "Data Structures", "Cryptography"],
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-16 max-w-4xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono">04.</span> Certifications & Education
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Certifications */}
          <div className="mb-16">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`cyber-border p-5 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 ${
                    cert.inProgress ? "border-secondary/30" : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded ${
                            cert.inProgress
                              ? "bg-secondary/20 text-secondary"
                              : "bg-primary/20 text-primary"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                      {cert.inProgress ? (
                        <BookOpen className="w-4 h-4 text-secondary" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-primary" />
                      )}
                      {cert.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              Education
            </h3>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="cyber-border p-5 rounded-lg bg-card/50 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course) => (
                        <span
                          key={course}
                          className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
