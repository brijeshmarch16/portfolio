import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { aboutMe, testimonials } from "../data/home-data";

export function AboutSection() {
  return (
    <Section>
      <SectionTitle>About Me</SectionTitle>
      <div className="space-y-8">
        {/* About paragraphs */}
        <div className="space-y-4">
          {aboutMe.map((paragraph, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: index is used as key
            <Text key={index} className="text-muted-foreground">
              {paragraph}
            </Text>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">What People Say</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <Card.Content className="flex flex-1 flex-col pt-4">
                  <QuoteIcon className="mb-4 h-8 w-8 fill-primary text-primary" />
                  <p className="mb-6 flex-1 leading-relaxed">{testimonial.content}</p>
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
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
