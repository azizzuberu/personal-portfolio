import { Mail, Github, Linkedin, Send, Terminal } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/azizzuberu",
    username: "@azizzuberu"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/aziz-zuberu-16a91815b",
    username: "aziz zuberu"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:zuberuaziz@gmail.com",
    username: "Zuberuaziz"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Send className="w-6 h-6 text-primary" />
          <span className="font-mono text-sm text-primary">contact</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          {"Let's Connect"}
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          {"I'm"} always open to discussing cybersecurity, learning opportunities, or potential collaborations. 
          Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="mailto:zuberuaziz@gmail.com"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <link.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="font-medium text-foreground mb-1">{link.name}</div>
              <div className="text-sm text-muted-foreground font-mono">{link.username}</div>
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-mono">
            <Terminal className="w-4 h-4 text-primary" />
            <span>© Abdul Aziz Zuberu. All rights reserved.</span>
            <span className="text-primary">|</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
