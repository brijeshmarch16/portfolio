"use client"

import { useState } from "react"

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
  {
    quote:
      "Working with Brijesh on development has been a really good experience. He has strong knowledge and completes tasks on time with quality code.",
    name: "Upwork Client",
    role: "Rated 5.0 / 5.0",
  },
  {
    quote:
      "Brijeshkumar did a great job with the CRUD operations and corresponding UI for my app. He demonstrated an excellent skill set and communicated well. I’m very happy with the result. Recommended.",
    name: "Upwork Client",
    role: "Rated 5.0 / 5.0",
  },
]

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3)

  return (
    <section aria-labelledby="testimonials-heading" className="mt-18 w-full">
      <h2
        id="testimonials-heading"
        className="mb-5 text-[15px]/[18px] font-semibold text-foreground"
      >
        Testimonials
      </h2>

      <div id="testimonials-list">
        {visibleTestimonials.map((testimonial, index) => (
          <figure
            key={`${testimonial.name}-${index}`}
            className="border-b border-border py-5 first:pt-0 last:border-0"
          >
            <blockquote>
              <p className="mb-4 text-base/[26px] text-muted-foreground">
                {testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="text-sm/6 text-muted-foreground">
              <span className="font-medium text-card-foreground">
                {testimonial.name}
              </span>
              {`, ${testimonial.role}`}
            </figcaption>
          </figure>
        ))}
      </div>
      {testimonials.length > 3 && (
        <button
          type="button"
          aria-expanded={showAll}
          aria-controls="testimonials-list"
          className="mt-3 text-base text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          onClick={() => setShowAll((current) => !current)}
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  )
}
