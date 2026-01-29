import { Linkedin, Github, Mail, MapPin } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/manjul",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/manjul",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:contact@manjul.dev",
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Name and title */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-foreground mb-1">
              Manjul B.
            </p>
            <p className="text-sm text-muted-foreground">
              Senior Solution Architect & Full-Stack Software Engineer
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Kathmandu, Nepal | Working with Global Clients</span>
            </div>
          </div>

          {/* Right side - Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Manjul B. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
