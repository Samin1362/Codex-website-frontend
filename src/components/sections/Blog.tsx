import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Placeholder } from "@/components/ui/Placeholder";
import { ArrowRightIcon, AuthorIcon, CommentsIcon } from "@/components/icons";
import { BLOG } from "@/lib/content";

/**
 * Blog (Plan.md shot 8). Centered header, three cards fadeInUp 0/200/400. Each:
 * photo with an overlapping blue date badge, an author/comments meta row above a
 * divider, title, and a "Read More" link (the first card's link reads active).
 */
export function Blog() {
  return (
    <section id="blog" className="section-y">
      <Container>
        <SectionHeader
          eyebrow={BLOG.eyebrow}
          title={BLOG.title}
          align="center"
          className="mb-16"
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {BLOG.posts.map((post, i) => (
            <Reveal
              key={post.title}
              effect="fadeInUp"
              delay={i * 200}
              className="overflow-hidden rounded-[6px] border border-line bg-white shadow-card transition-shadow hover:shadow-raised"
            >
              <div className="relative">
                <Placeholder label="Blog photo" rounded="rounded-none" className="aspect-[16/10]" />
                <div className="absolute left-6 top-6 flex flex-col items-center rounded-[4px] bg-primary px-4 py-2 text-white">
                  <span className="font-heading text-xl font-extrabold leading-none">
                    {post.day}
                  </span>
                  <span className="text-sm">{post.month}</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="flex flex-wrap items-center gap-6 border-b border-line pb-5 text-[15px] text-muted">
                  <li className="flex items-center gap-2">
                    <AuthorIcon className="text-primary" />
                    <span>By Admin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CommentsIcon className="text-primary" />
                    <span>0 Comments</span>
                  </li>
                </ul>

                <h3 className="mt-5 font-heading text-xl font-bold leading-snug">
                  <Link href={post.href} className="transition hover:text-primary">
                    {post.title}
                  </Link>
                </h3>

                <Link
                  href={post.href}
                  className={`mt-6 inline-flex items-center gap-2 font-heading text-[15px] font-bold transition hover:text-primary ${
                    i === 0 ? "text-primary" : "text-ink"
                  }`}
                >
                  Read More
                  <ArrowRightIcon />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
