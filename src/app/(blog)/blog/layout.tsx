export default function BlogLayout({ children }: LayoutProps<"/blog">) {
  return <main className="mx-auto max-w-2xl pt-28 sm:pt-32">{children}</main>;
}
