import { MapPin, Globe, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building the Future of Enterprise Software
            </h2>
          </div>

          {/* Bio Content */}
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              <span className="text-foreground font-semibold">Manjul B.</span> is a Senior Engineering Manager, Solution Architect, and Full-Stack Software Engineer with{" "}
              <span className="text-primary font-semibold">15+ years of experience</span> delivering enterprise-scale, cloud-native, and AI-powered software solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              He specializes in system architecture, cloud modernization, SaaS platforms, API design, and high-scalability distributed systems, helping organizations improve{" "}
              <span className="text-foreground font-medium">performance</span>,{" "}
              <span className="text-foreground font-medium">security</span>, and{" "}
              <span className="text-foreground font-medium">cost efficiency</span> while aligning technology with business goals.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Based in</p>
                  <p className="text-sm text-muted-foreground">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Working with</p>
                  <p className="text-sm text-muted-foreground">Global Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Hourly Rate</p>
                  <p className="text-sm text-muted-foreground">$25/hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
