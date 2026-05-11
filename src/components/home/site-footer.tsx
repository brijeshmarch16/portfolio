export function SiteFooter({ name }: { name: string }) {
  return (
    <footer className="flex flex-col items-center gap-4 text-center text-xs/4 text-muted-foreground">
      <p>Designed and built by {name}.</p>
    </footer>
  )
}
