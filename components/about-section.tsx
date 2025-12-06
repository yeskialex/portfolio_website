import { PenTool, Code, Smartphone, Zap, Database } from 'lucide-react'
import { aboutData } from '@/lib/portfolio-data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
  Database,
}

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* About Me */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                  <IconComponent className="w-full h-full text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Current Projects with Manual Swipe */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Current Projects</h3>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {data.currentProjects.map((project, index) => (
              <CarouselItem key={index} className="pl-3 md:pl-4 basis-72 md:basis-80">
                <div className="p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border h-full hover:shadow-lg transition-all duration-300 ease-in-out hover:border-accent">
                  <div className="mb-3 md:mb-4">
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Tech Stacks with Manual Swipe */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Tech Stacks</h3>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-16 md:-ml-20 py-4">
            {data.techStacks.map((tech, index) => (
              <CarouselItem key={index} className="pl-16 md:pl-20 basis-32 md:basis-40">
                <div className="w-32 h-20 md:w-40 md:h-24 bg-white rounded-xl md:rounded-2xl border border-gray-200 flex items-center justify-center p-4 md:p-6 hover:border-accent hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out transform">
                  <img
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
