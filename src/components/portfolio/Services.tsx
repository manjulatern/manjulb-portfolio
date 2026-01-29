import {
  LayoutDashboard,
  Code2,
  Cloud,
  Network,
  Users,
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Solution Architecture & Technical Leadership",
    description:
      "Scalable, secure, cost-optimized enterprise architectures with strategic technical roadmaps",
    highlights: ["System Design", "Technical Strategy", "Architecture Reviews"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end application development using modern frameworks and best practices",
    highlights: ["Python", "Java", "Node.js", "React", "Next.js", "Angular"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture (AWS)",
    description:
      "Cloud-native solutions leveraging AWS services for optimal performance and cost",
    highlights: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"],
  },
  {
    icon: Network,
    title: "API & Distributed Systems",
    description:
      "High-performance APIs and microservices architectures for enterprise applications",
    highlights: ["REST", "GraphQL", "Microservices", "Event-Driven"],
  },
  {
    icon: Users,
    title: "Engineering Management",
    description:
      "Team leadership, process optimization, and end-to-end delivery ownership",
    highlights: ["Team Leadership", "Agile", "Mentoring", "Delivery"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expert Solutions for Enterprise Challenges
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software engineering and architecture services tailored for ambitious businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card p-8 hover-lift group ${
                index === services.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {service.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                  >
                    {highlight}
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
