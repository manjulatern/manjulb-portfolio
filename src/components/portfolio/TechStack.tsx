const techCategories = [
  {
    title: "Languages",
    items: ["Python", "Java", "Node.js", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    items: ["Django", "Flask", "FastAPI", "Spring", "Express.js", "React", "Next.js", "Angular"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    title: "Architecture",
    items: ["Microservices", "API Design", "Event-Driven", "High Scalability"],
  },
  {
    title: "Tools & Practices",
    items: ["Agile", "Scrum", "Jira", "Confluence", "Git", "GitHub"],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modern Technology Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building enterprise-grade software solutions
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${
                index === techCategories.length - 1
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
