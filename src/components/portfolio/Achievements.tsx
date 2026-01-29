import { Boxes, CloudUpload, Zap, Handshake } from "lucide-react";

const achievements = [
  {
    icon: Boxes,
    title: "Microservices-Based SaaS Platform",
    description:
      "Architected and led the development of a scalable microservices-based SaaS platform handling thousands of concurrent users",
  },
  {
    icon: CloudUpload,
    title: "Legacy to AWS Migration",
    description:
      "Successfully migrated legacy systems to AWS, improving performance by 40% and reducing infrastructure costs by 35%",
  },
  {
    icon: Zap,
    title: "High-Traffic API Architecture",
    description:
      "Designed and implemented high-traffic APIs for enterprise applications processing millions of requests daily",
  },
  {
    icon: Handshake,
    title: "Long-Term Enterprise Engagements",
    description:
      "Delivered high-impact enterprise engagements spanning years, maintaining 100% job success rate",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Key Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proven Track Record of Delivery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real impact delivered for enterprise clients across multiple industries
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="glass-card p-8 hover-lift group relative overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute -top-4 -right-4 text-[120px] font-bold text-muted/30 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
