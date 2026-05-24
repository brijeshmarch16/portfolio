import type { Profile } from "@/types/home"
import { SocialLinks } from "@/components/social-links"

export function IntroSection({ profile }: { profile: Profile }) {
  const { social } = profile

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 text-muted-foreground">
        <p className="text-justify text-sm/6 font-medium">{profile.bio}</p>
        <p className="text-justify text-sm/6 font-medium">{profile.journey}</p>
        <p className="text-justify text-sm/6 font-medium">{profile.closing}</p>
      </div>

      <SocialLinks social={social} />
    </section>
  )
}
