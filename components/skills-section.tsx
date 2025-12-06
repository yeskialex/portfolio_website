import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function SkillsSection() {
  const skills = {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'HTML/CSS',
      'JavaScript',
    ],
    backend: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
      'GraphQL',
    ],
    tools: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Testing'],
  }

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: skills.frontend,
    },
    {
      title: 'Backend Development',
      skills: skills.backend,
    },
    {
      title: 'Tools & Technologies',
      skills: skills.tools,
    },
  ]

  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Technical Skills
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {skillCategories.map((category) => (
              <CarouselItem key={category.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-base text-foreground md:text-lg"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
