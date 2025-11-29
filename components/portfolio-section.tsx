'use client'

import { useRef } from 'react'
import { ExternalLink, Eye } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

function AppProjectCard({ project }: { project: any }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className="group relative bg-secondary rounded-2xl md:rounded-3xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Phone screen ratio container */}
      <div className="aspect-[9/19.5] overflow-hidden bg-background relative">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* Phone frame overlay (optional) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/10 to-transparent" />
        </div>
      </div>

      {/* Hover overlay with project details - only at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 md:p-6">
        <h3 className="text-base md:text-lg font-bold text-foreground mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {project.title}
        </h3>

        <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-secondary border border-border text-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Visit
          </a>
        </div>
      </div>

      {/* App title below the phone (always visible) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4 pointer-events-none">
        <p className="text-sm font-medium text-foreground truncate">{project.title}</p>
      </div>
    </div>
  )
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const appProjects = data.projects.filter((p) => p.category === 'App Development')
  const webProjects = data.projects.filter((p) => p.category === 'Web Development')

  return (
    <div className="space-y-10 md:space-y-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Portfolio</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* App Development Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">App Development</h3>
          <p className="text-sm md:text-base text-muted-foreground mt-2">
            Mobile applications built with Flutter, React Native, and modern frameworks
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {appProjects.length > 0 ? (
            appProjects.map((project, index) => (
              <AppProjectCard key={index} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No app development projects available yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Web Development Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Web Development</h3>
          <p className="text-sm md:text-base text-muted-foreground mt-2">
            Full-stack web applications using React, Next.js, Node.js, and modern technologies
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {webProjects.length > 0 ? (
            webProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>

                  <div className="flex gap-2 md:gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent text-accent-foreground rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Preview
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-secondary border border-border text-foreground rounded-lg text-xs md:text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No web development projects available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}