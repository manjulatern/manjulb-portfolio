import { Briefcase, CheckCircle, Star, FolderCheck, Clock } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Job Success",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Average Rating",
  },
  {
    icon: FolderCheck,
    value: "26+",
    label: "Completed Projects",
  },
  {
    icon: Clock,
    value: "3,000+",
    label: "Hours Worked",
  },
];

export function StatsBar() {
  return (
    <section className="relative py-16 md:py-20 bg-card border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index === stats.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
