import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 md:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Build Scalable Systems{" "}
              <span className="text-primary">That Last</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Ready to transform your technology vision into reality? Let's discuss how I can help architect and build your next enterprise solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 text-base px-8"
                onClick={() => window.open("https://calendly.com", "_blank")}
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-8"
                onClick={() => window.location.href = "mailto:contact@manjul.dev"}
              >
                <Mail className="h-4 w-4" />
                Contact Manjul
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
