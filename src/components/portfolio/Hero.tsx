import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  "15+ Years Experience",
  "100% Job Success",
  "Enterprise & SaaS Expertise",
];

export function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/30 via-background to-background" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Projects
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100 text-balance">
              Senior Solution Architect &{" "}
              <span className="text-primary">Full-Stack Software Engineer</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up animation-delay-200 text-balance">
              Designing scalable, secure, and AI-powered cloud systems for enterprises and SaaS products
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-fade-up animation-delay-300">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <Button
                size="lg"
                className="gap-2 text-base px-8"
                onClick={() => handleNavClick("#contact")}
              >
                Schedule a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8"
                onClick={() => handleNavClick("#achievements")}
              >
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up animation-delay-300">
            <div className="relative">
              {/* Image container with gradient border */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent overflow-hidden border-2 border-primary/20">
                {/* Placeholder avatar */}
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-4xl md:text-5xl font-bold text-primary">M</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Photo Coming Soon</p>
                  </div>
                </div>
              </div>

              {/* Floating card - Location */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 glass-card px-4 py-3 shadow-lg animate-fade-up animation-delay-500">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Kathmandu, Nepal</span>
                </div>
              </div>

              {/* Floating card - Rate */}
              <div className="absolute -top-4 -right-4 md:-right-8 glass-card px-4 py-3 shadow-lg animate-fade-up animation-delay-500">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">$25</p>
                  <p className="text-xs text-muted-foreground">/hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
