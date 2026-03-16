import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  )
}
