import { SocialLinks } from "@/components/social-links"
import type { SocialLink } from "@/types/home"

export function Elsewhere({ social }: { social: SocialLink[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xs/4 font-medium tracking-widest text-muted-foreground uppercase">
        Elsewhere
      </h2>
      <SocialLinks social={social.filter((item) => item.label !== "Email")} />
    </section>
  )
}
