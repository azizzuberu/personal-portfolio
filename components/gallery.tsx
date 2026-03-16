"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"

const images = [
  {
    src: "/images/lab-setup.jpg",
    alt: "Home Lab Setup",
    caption: "My cybersecurity home lab with multiple VMs for testing",
  },
  {
    src: "/images/ctf-event.jpg",
    alt: "CTF Competition",
    caption: "Participating in a local CTF event",
  },
  {
    src: "/images/network-diagram.jpg",
    alt: "Network Design",
    caption: "Network topology for vulnerability testing environment",
  },
  {
    src: "/images/certifications.jpg",
    alt: "Certifications",
    caption: "Security certifications and achievements",
  },
  {
    src: "/images/tools.jpg",
    alt: "Security Tools",
    caption: "Working with various security tools and frameworks",
  },

   {
    src: "/images/val.jpg",
    alt: "security",
    caption: "security",
  },
{
    src: "/images/zuberu.jpg",
    alt: "Aziz Zuberu",
    caption: "zuberu",
  },
{
    src: "/images/zuberu1.jpg",
    alt: "Aziz Zuberu",
    caption: "zuberu",
  },
]
export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }

  return (
    <section id="gallery" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <ImageIcon className="w-5 h-5 text-primary" />
          <span className="font-mono text-sm text-primary">gallery</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Visual Journey
        </h2>

        <p className="text-muted-foreground max-w-2xl mb-12">
          A glimpse into my cybersecurity journey - from lab setups to CTF competitions
          and everything in between.
        </p>

        <div className="relative">
          {/* Main Slider */}
          <div className="relative aspect-video bg-card rounded-lg overflow-hidden border border-border">
            {imageErrors.has(currentIndex) ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-sm font-mono">{images[currentIndex].alt}</p>
                <p className="text-xs mt-2 opacity-70">Image placeholder - add your own images</p>
              </div>
            ) : (
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover"
                onError={() => handleImageError(currentIndex)}
              />
            )}

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <p className="text-foreground font-medium">{images[currentIndex].alt}</p>
              <p className="text-muted-foreground text-sm mt-1">
                {images[currentIndex].caption}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                prevSlide()
                setIsAutoPlaying(false)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full border border-border transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <button
              onClick={() => {
                nextSlide()
                setIsAutoPlaying(false)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full border border-border transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative shrink-0 w-24 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                {imageErrors.has(index) ? (
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(index)}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
