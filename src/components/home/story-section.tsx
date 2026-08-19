export function StorySection({ story }: { story: string[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xs/4 font-medium tracking-widest text-muted-foreground uppercase">
        About me
      </h2>
      <div className="flex flex-col gap-4 text-base/7 text-foreground/80">
        {story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
