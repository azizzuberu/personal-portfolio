"use client"

import Image from "next/image"
import { Shield, Terminal } from "lucide-react"
import { useState, useEffect } from "react"

const roles = [
  "SOC Analyst",
  "Network Security Enthusiast",
  "Vulnerability Scanner",
  "Web Security Learner",
  "Ethical Hacker in Training",
]

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl relative">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-mono text-sm text-primary">~/security</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-8 mb-4 md:pr-56">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-0 text-balance">
            Abdul Aziz Zuberu
          </h1>

          <div className="w-60 h-96 md:w-72 md:h-108 rounded-full overflow-hidden border border-border md:absolute md:-right-50 md:top-[60%] md:-translate-y-1/2">
            <Image
              src="/images/zuberu5.jpg"
              alt="Abdul Aziz Zuberu"
              width={300}
              height={700}
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <h2 className="text-xl md:text-2xl text-primary font-medium mb-8 flex items-center gap-3 min-h-[2em]">
          <Shield className="w-6 h-6 shrink-0" />
          <span className="font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
          Aspiring cybersecurity professional with a passion for defending digital infrastructure. 
          I specialize in <span className="text-foreground font-medium">network security</span>, {" "}
          <span className="text-foreground font-medium">vulnerability assessment</span>, and {" "}
          <span className="text-foreground font-medium">threat detection</span>. Currently building 
          my skills in SOC operations and incident response.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#skills" 
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            View Skills
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
