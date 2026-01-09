import { Briefcase, GraduationCap, Building2, Dumbbell } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Sandringham College",
      role: "Secondary Teacher",
      period: "2000 – Present",
      icon: GraduationCap,
      positions: [
        {
          title: "Leading Teacher Disability Inclusion (Years 7-12)",
          period: "2025 - Current",
          description: "Work with teachers, Education Support staff and leaders to implement effective educational adjustments and targeted support for students with additional needs.",
        },
        {
          title: "Head of Sub School (Years 10-12)",
          period: "2024",
          description: "Led academic and pastoral care programs for senior students, improving engagement, retention, and VCE outcomes through data-driven interventions and personalized learning pathways.",
        },
        {
          title: "Year Level Leader (Year 12)",
          period: "2018 - 2023",
          description: "Oversaw Year 12 student cohort, providing academic monitoring, career counselling, and tailored AI-driven learning strategies to enhance student success.",
        },
        {
          title: "Student Manager (Years 10-12)",
          period: "2010 - 2017",
          description: "Developed and implemented well-being and behaviour management plans, collaborating with stakeholders to ensure student support across all academic levels.",
        },
      ],
      subjects: "7–10 Mathematics and Science, VET IT, VET Gaming, VCE Chemistry, Further Maths, Maths Methods, General Maths, Algorithmics, VCE Software Development and Computing.",
    },
    {
      company: "JEK Industries Pty Ltd",
      role: "Director",
      period: "2024 – Present",
      icon: Building2,
      description: "WashWell Laundromat - Manage e-commerce business operations, including IT infrastructure, SEO, and website development.",
    },
    {
      company: "CardTastic Collectables and Gaming",
      role: "Owner",
      period: "1991 – Present",
      icon: Briefcase,
      bullets: [
        "Managed e-commerce business operations, including IT infrastructure, SEO, and website development.",
        "Leveraged AI tools to optimize inventory management, marketing strategies, and customer engagement.",
        "Developed a robust digital presence to drive sales growth and ensure exceptional user experience.",
      ],
    },
    {
      company: "Monash University",
      role: "Indoor Cycle Instructor",
      period: "2000 – Present",
      icon: Dumbbell,
      description: "Delivered high-energy indoor cycling classes focused on health and wellness for university staff and students. Fostered a positive environment that encourages long-term fitness engagement.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-16 max-w-4xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono">03.</span> Experience
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.role}
              className="cyber-border p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:box-glow transition-all shrink-0">
                  <exp.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                  </div>

                  {exp.positions && (
                    <div className="space-y-4 mt-4">
                      {exp.positions.map((pos) => (
                        <div key={pos.title} className="border-l-2 border-primary/30 pl-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                            <h4 className="font-medium text-foreground">{pos.title}</h4>
                            <span className="text-xs font-mono text-muted-foreground">{pos.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{pos.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.subjects && (
                    <div className="mt-4 p-3 rounded bg-muted/30">
                      <p className="text-xs font-mono text-muted-foreground">
                        <span className="text-primary">Subjects Taught:</span> {exp.subjects}
                      </p>
                    </div>
                  )}

                  {exp.description && !exp.positions && (
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  )}

                  {exp.bullets && (
                    <ul className="space-y-2 mt-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
