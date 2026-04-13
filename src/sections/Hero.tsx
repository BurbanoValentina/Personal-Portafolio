import { useMemo } from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { ArrowRight, Github, Linkedin, Facebook } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Dot {
  left: number;
  top: number;
  duration: number;
  delay: number;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
}

const skills: string[] = [
  "React", "Next.js", "Java", "SpringBoot", "Angular", "Python",
  "Django", "Arduino", "C#", "HTML", "Flutter", "TypeScript",
  "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS",
  "Vercel", "Tailwind CSS", "Prisma", "Jest", "Cypress", "Figma",
  "Git", "GitHub Actions",
];

const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/BurbanoValentina" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/valentina-burbano-salazar-2473a2327/" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100004770467639&locale=es_LA" },
];

export const Hero = (): React.JSX.Element => {
  const dots: Dot[] = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero background" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer · Full Stack
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text font-extrabold">digital</span>
                <br />
                experiences with
                <br />
                <span className="italic font-normal font-serif text-white">precision.</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                Hi, I'm <span className="text-foreground font-medium">Valentina Burbano</span> — a Full Stack Software Engineering student at UCC, passionate about building modern, scalable, and efficient web applications with strong attention to detail and user experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <AnimatedBorderButton />
            </div>

            <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-fade-in animate-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/Profile-Photo.png" alt="Valentina Burbano" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                <div className="absolute -bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 animate-fade-in animate-delay-600">
          <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, idx) => (
                <span key={idx}
                  className="inline-flex items-center px-5 py-2 rounded-full glass text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
