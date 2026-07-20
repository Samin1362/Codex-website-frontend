import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Placeholder } from "@/components/ui/Placeholder";
import { AuthorIcon, CommentsIcon } from "@/components/icons";
import { BLOG } from "@/lib/content";

/**
 * Blog (Plan.md shot 8). Each card: photo with an overlapping blue date badge,
 * an author/comments meta row above a divider, title, and a "Read More" link
 * (the first card's link reads active).
 *
 * `teaser` (Home): centered header + the three newest posts, fadeInUp 0/200/400.
 * `full` (Blog page): every post, no header — the PageBanner introduces the page.
 * Reveal delay is per-column (`i % 3`) so each grid row staggers left-to-right
 * rather than the last row waiting on a second-long cascade (§6).
 */
export function Blog({ variant = "teaser" }: { variant?: "teaser" | "full" }) {
  const full = variant === "full";
  const posts = full ? BLOG.posts : BLOG.posts.slice(0, 3);

  return (
    <section id="blog" className="section-y">
      <Container>
        {!full && (
          <SectionHeader
            eyebrow={BLOG.eyebrow}
            title={BLOG.title}
            align="center"
            className="mb-16"
          />
        )}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal
              key={post.title}
              effect="fadeInUp"
              delay={(i % 3) * 200}
              className="overflow-hidden border border-line bg-white shadow-card transition-shadow hover:shadow-raised"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <Placeholder label="Blog photo" rounded="rounded-none" className="h-full w-full" />
                )}
                <div className="absolute left-6 top-6 z-10 flex flex-col items-center bg-primary px-4 py-2 text-white">
                  <span className="font-heading text-xl font-extrabold leading-none">
                    {post.day}
                  </span>
                  <span className="text-sm">{post.month}</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="flex flex-wrap items-center gap-6 border-b border-line pb-5 text-copy text-muted">
                  <li className="flex items-center gap-2">
                    <AuthorIcon className="text-primary" />
                    <span>By Admin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CommentsIcon className="text-primary" />
                    <span>0 Comments</span>
                  </li>
                </ul>

                {/* No per-post detail route exists yet, so the title and the
                    template's "Read More" link are plain text rather than links
                    to nowhere. Restore both when /blog/[slug] lands. */}
                <h3 className="mt-5 font-heading text-xl font-bold leading-snug">
                  {post.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
