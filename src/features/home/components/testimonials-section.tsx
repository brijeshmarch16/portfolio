import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { testimonials } from "../data/home-data";

export function TestimonialsSection() {
  return (
    <Section>
      <SectionTitle>What People Say</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="flex flex-col transition-all duration-200 hover:translate-y-1">
            <Card.Content className="flex flex-1 flex-col pt-4">
              <QuoteIcon className="mb-4 h-8 w-8 fill-primary text-primary" />
              <p className="mb-6 flex-1 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Section>
  );
}
