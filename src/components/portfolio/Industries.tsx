import {
  HeartPulse,
  Landmark,
  ShieldCheck,
  Layers,
  Brain,
  BarChart3,
  Megaphone,
  Phone,
  PieChart,
  Bot,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, name: "US Healthcare" },
  { icon: Landmark, name: "FinTech & Payments" },
  { icon: ShieldCheck, name: "Cybersecurity" },
  { icon: Layers, name: "SaaS Platforms" },
  { icon: Brain, name: "AI & LLM Integrations" },
  { icon: BarChart3, name: "Mobile & Web Analytics" },
  { icon: Megaphone, name: "Digital Marketing Automation" },
  { icon: Phone, name: "Telephony & Call Analytics" },
  { icon: PieChart, name: "Data Analysis & Visualization" },
  { icon: Bot, name: "Web Scraping & Automation" },
];

export function Industries() {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Industries</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Domain Expertise Across Sectors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep experience working with regulated industries and high-growth technology sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <industry.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm font-medium text-foreground">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
