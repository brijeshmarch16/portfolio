import Image from "next/image"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects = [
  {
    title: "ReactUseKit",
    description: "A collection of reusable React hooks and helpers",
    image: "/reactusekit.png",
    liveUrl: "https://reactusekit.vercel.app",
  },
]

export function SelectedWork() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-base font-medium">Selected work</h2>

      <div className="grid gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <Card className="gap-4 overflow-hidden py-0 transition-shadow group-hover:shadow-md">
              <div className="relative aspect-2/1 w-full">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                  loading="eager"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
