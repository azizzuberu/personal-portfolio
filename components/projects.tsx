import { ExternalLink, Github, Folder, Terminal } from "lucide-react"

const projects = [
  {
    title: "Home Lab Setup",
    description: "Built a personal cybersecurity lab with virtual machines for practicing penetration testing, network analysis, and security tool configurations.",
    tags: ["VirtualBox", "Kali Linux", "pfSense", "Splunk"],
    github: "https://github.com/azizzuberu",
    demo: null
  },
  {
    title: "Vulnerability Scanner Script",
    description: "Python script that automates basic vulnerability scanning and generates reports for web applications using common security checks.",
    tags: ["Python", "Nmap", "Automation", "Scripting"],
    github: "https://github.com/azizzuberu",
    demo: null
  },
  {
    title: "SIEM Dashboard Project",
    description: "Configured and customized a SIEM solution to monitor network traffic, detect anomalies, and create alert rules for potential threats.",
    tags: ["ELK Stack", "Log Analysis", "Dashboards", "Alerting"],
    github: "https://github.com/azizzuberu",
    demo: null
  },
  {
    title: "CTF Write-ups",
    description: "Documentation of Capture The Flag challenges completed on platforms like TryHackMe and HackTheBox, showcasing problem-solving skills.",
    tags: ["TryHackMe", "HackTheBox", "Documentation"],
    github: "https://github.com/azizzuberu",
    demo: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Folder className="w-6 h-6 text-primary" />
          <span className="font-mono text-sm text-primary">projects</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Terminal className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
