export function SectionDivider() {
  return (
    <div className="flex justify-center py-4" aria-hidden="true">
      <div className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-red-500" />
        <span className="size-1.5 rounded-full bg-yellow-500" />
        <span className="size-1.5 rounded-full bg-green-500" />
      </div>
    </div>
  )
}
