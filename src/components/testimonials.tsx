const testimonials = [
  {
    quote:
      "His combination of technical expertise, leadership, and dedication to excellence makes him one of the best developers I have had the pleasure of working with.",
    name: "Ven Vadlamani, CFA",
    role: "Entrepreneur",
  },
  {
    quote:
      "He consistently transforms static HTML into dynamic, responsive React applications with precision.",
    name: "Chetan Mahajan",
    role: "Founder & CEO, ThingsLinker",
  },
  {
    quote:
      "Working with brijesh on development is really good experience. He has very good knowledge to complete task in timely with quality code.",
    name: "Upwork Client",
    role: "rated 5.0 / 5.0",
  },
  {
    quote:
      "Brijeshkumar did a great job with the CRUD opperations and corresponding UI for my app. He demonstrated an excellent skill set and communicated well. I’m very happy with the result. Recommended.",
    name: "Upwork Client",
    role: "rated 5.0 / 5.0",
  },
  {
    quote:
      "His proficiency in understanding complex problems and swiftly proposing effective solutions sets him apart.",
    name: "Shreya Prajapati",
    role: "Founder & AI Full Stack Engineer",
  },
  {
    quote:
      "He consistently demonstrates a strong commitment to best practices, code maintainability, and project timelines.",
    name: "Bala Kodai",
    role: "Manager, NEWERO Techspot",
  },
]

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto mt-18 w-full max-w-3xl px-6"
    >
      <h2
        id="testimonials-heading"
        className="mb-5 font-mono text-xs leading-relaxed font-semibold tracking-[0.12em] text-muted-foreground uppercase"
      >
        03 / What people say about working with me
      </h2>

      <div className="grid grid-cols-1 gap-3 min-[481px]:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <figure
            key={`${testimonial.name}-${index}`}
            className="flex min-w-0 flex-col justify-between rounded-2xl border border-border bg-muted p-5"
          >
            <blockquote>
              <p className="mb-4 text-[0.94rem] leading-relaxed text-card-foreground">
                {testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-card-foreground">
                {testimonial.name}
              </span>
              {`, ${testimonial.role}`}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
