import { BlogCard } from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";
import { Section, SectionTitle } from "@/components/ui/section";
import { blogPosts } from "../data/home-data";

export function BlogSection() {
  const displayedPosts = blogPosts.slice(0, 4);
  const hasMorePosts = blogPosts.length > 4;

  return (
    <Section id="blog" className="p-4">
      <SectionTitle>Latest Articles</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {displayedPosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
      {hasMorePosts && (
        <div className="mt-6 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <a href="/blog">View All Articles</a>
          </Button>
        </div>
      )}
    </Section>
  );
}
