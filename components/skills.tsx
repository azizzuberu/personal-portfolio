import { 
  Network, 
  Search, 
  Bug, 
  Globe, 
  Shield, 
  Eye,
  Server,
  Lock
} from "lucide-react"

const skills = [
  {
    category: "SOC Analysis",
    icon: Eye,
    items: ["Log Analysis", "SIEM Tools", "Incident Response", "Threat Monitoring"]
  },
  {
    category: "Network Security",
    icon: Network,
    items: ["Wireshark", "TCP/IP", "Firewall Configuration", "Network Protocols"]
  },
  {
    category: "Vulnerability Scanning",
    icon: Bug,
    items: ["Nessus", "OpenVAS", "Nmap", "Vulnerability Assessment"]
  },
  {
    category: "Reconnaissance",
    icon: Search,
    items: ["OSINT", "Information Gathering", "Shodan", "Subdomain Enumeration"]
  },
  {
    category: "Web Security",
    icon: Globe,
    items: ["OWASP Top 10", "Burp Suite", "SQL Injection", "XSS"]
  },
  {
    category: "Tools & Technologies",
    icon: Server,
    items: ["Linux", "Python", "Bash Scripting", "Metasploit"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-mono text-sm text-primary">skills</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.category}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{skill.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Lock className="w-3 h-3 text-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
