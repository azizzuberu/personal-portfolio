import { User, Award, BookOpen, Target } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Focus Areas",
    description: "SOC operations, threat detection, and vulnerability management"
  },
  {
    icon: BookOpen,
    title: "Currently Learning",
    description: "Advanced SIEM configurations, incident response procedures, and threat hunting"
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Working towards CompTIA Security+, CEH, and other industry certifications"
  }
]

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <User className="w-6 h-6 text-primary" />
          <span className="font-mono text-sm text-primary">about</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {"I'm"} a beginner cybersecurity enthusiast transitioning into the field of information security. 
              My journey started with a curiosity about how systems work and evolved into a passion 
              for protecting them from threats.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I have hands-on experience with vulnerability scanning tools, network analysis, 
              and basic penetration testing methodologies. {"I'm"} actively practicing on platforms 
              like TryHackMe and HackTheBox to sharpen my skills.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My goal is to become a skilled SOC analyst, helping organizations detect and respond 
              to security incidents while continuously learning about emerging threats and defense strategies.
            </p>

            <div className="pt-4">
              <div className="font-mono text-sm text-primary mb-3">$ cat interests.txt</div>
              <div className="flex flex-wrap gap-2">
                {["Threat Intelligence", "Blue Team", "DFIR", "Malware Analysis", "CTF Competitions"].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-md"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="p-5 bg-card border border-border rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
