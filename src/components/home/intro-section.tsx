import type { Profile, SocialLinks } from "@/types/home"

export function IntroSection({
  profile,
  social,
}: {
  profile: Profile
  social: SocialLinks
}) {
  const socialLinks = [social.linkedin, social.x]

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 text-muted-foreground">
        <p className="text-sm/6 font-medium">{profile.bio}</p>
        <p className="text-sm/6 font-medium">
          Available for freelance frontend projects.{" "}
          <a
            href={social.email.href}
            className="font-bold text-foreground underline underline-offset-4"
          >
            Say hello
          </a>{" "}
          by email, or connect with me on{" "}
          {socialLinks.map((item, index) => (
            <span key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground underline underline-offset-4"
              >
                {item.label}
              </a>
              {index < socialLinks.length - 2
                ? ", "
                : index === socialLinks.length - 2
                  ? ", or "
                  : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
