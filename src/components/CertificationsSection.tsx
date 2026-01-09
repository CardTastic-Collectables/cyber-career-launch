import { Award, CheckCircle, BookOpen, Clock } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "Certified Ethical Hacking (CEHv13)",
      issuer: "EC-Council",
      status: "In Progress",
      date: "Currently Undertaking",
      inProgress: true,
    },
    {
      name: "CompTIA AI Essentials",
      issuer: "CompTIA",
      status: "Completed",
      date: "November 2025",
      inProgress: false,
    },
    {
      name: "CompTIA PenTest+ Certified",
      issuer: "CompTIA",
      status: "Completed",
      date: "October 2025",
      inProgress: false,
    },
    {
      name: "CompTIA Network Security Professional (CNSP)",
      issuer: "CompTIA",
      status: "Completed",
      date: "October 2025",
      inProgress: false,
    },
    {
      name: "CompTIA Network Vulnerability Assessment Professional (CNVP)",
      issuer: "CompTIA",
      status: "Completed",
      date: "October 2025",
      inProgress: false,
    },
    {
      name: "CompTIA Cybersecurity Analyst (CySA+) Certified",
      issuer: "CompTIA",
      status: "Completed",
      date: "July 2025",
      inProgress: false,
    },
    {
      name: "CompTIA Security Analytics Professional (CSAP)",
      issuer: "CompTIA",
      status: "Completed",
      date: "July 2025",
      inProgress: false,
    },
    {
      name: "Google Cybersecurity Professional V2 Certificate",
      issuer: "Google",
      status: "Completed",
      date: "July 2025",
      inProgress: false,
    },
    {
      name: "CompTIA Security+ Certified",
      issuer: "CompTIA",
      status: "Completed",
      date: "April 2025",
      inProgress: false,
    },
    {
      name: "CompTIA Network+ Certified",
      issuer: "CompTIA",
      status: "Completed",
      date: "February 2025",
      inProgress: false,
    },
  ];

  const education = [
    {
      degree: "Bachelor of Information Technology",
      major: "Business Systems Major",
      institution: "Monash University",
      year: "2006",
    },
    {
      degree: "Graduate Diploma of Education (Secondary)",
      institution: "Monash University",
      year: "1999",
    },
    {
      degree: "Applied Science Degree",
      major: "Chemistry and Biochemistry",
      institution: "Swinburne University",
      year: "1996",
    },
    {
      degree: "Certificate IV in Workplace Training and Assessment",
      institution: "",
      year: "2023",
    },
  ];

  const additional = [
    "VICFIT Fitness Instructor",
    "Golden Key Honours Society (Monash University)",
    "VIT Registration",
    "Emergency First Aid Level 2",
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

        <div className="max-w-5xl mx-auto">
          {/* Certifications */}
          <div className="mb-16">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              <Award className="w-5 h-5 text-primary" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`cyber-border p-4 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 ${
                    cert.inProgress ? "border-secondary/30" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {cert.inProgress ? (
                          <Clock className="w-4 h-4 text-secondary shrink-0" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        )}
                        <h4 className="font-semibold text-foreground text-sm">{cert.name}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground ml-6">{cert.issuer}</p>
                    </div>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded shrink-0 ${
                        cert.inProgress
                          ? "bg-secondary/20 text-secondary"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="cyber-border p-4 rounded-lg bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{edu.degree}</h4>
                      {edu.major && (
                        <p className="text-xs text-primary font-mono">{edu.major}</p>
                      )}
                      {edu.institution && (
                        <p className="text-xs text-muted-foreground">{edu.institution}</p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional */}
          <div>
            <h3 className="text-center text-muted-foreground font-mono text-sm mb-6 uppercase tracking-wider">
              Additional Qualifications
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additional.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-primary/20 bg-card/50 text-sm text-muted-foreground font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
