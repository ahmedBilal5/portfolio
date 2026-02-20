import Link from "next/link";
import BlogPostCard, { BlogPostCardProps } from "./blogPostCard";
export type Post = BlogPostCardProps & {
  id: any;
};

interface RecentPostsSectionProps {
  title?: string;
  viewAllLink?: string;
  posts: Post[];
  maxPosts?: number;
  className?: string;
}

const RecentPosts = ({
  title = "Recent posts",
  viewAllLink = "/blog",
  posts = [],
  maxPosts = 2,
  className = "",
}: RecentPostsSectionProps) => {
  const displayedPosts = posts.slice(0, maxPosts);
  return (
    <section className="w-full bg-slate-100 py-4 md:py-6 mt-5 sm:mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4">
          <h2 className="text-slate-800 text-lg md:text-xl lg-text-2xl font-normal md:font-medium leading-8 md:leading-9 lg:leading-10">
            {title}
          </h2>
          <Link
            href={viewAllLink}
            className="text-cyan-500 text-base md:text-lg font-normal leading-6 hover:text-cyan-600 transition-colors whitespace-nowrap flex items-center gap-1"
          >
            View All
          </Link>
        </div>
        {/* {posts Grid} */}
        {displayedPosts.length > 0 ? (
          <div
            className="
                grid 
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 
                gap-6 md:gap-8
            "
          >
            {displayedPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                title={post.title}
                date={post.date}
                tags={post.tags}
                description={post.description}
                href={post.href || `/blog/${post.id}`}
                display="shadow"
                // className="h-full"
              />
            ))}
          </div>
        ) : (
          <div
            className="
                    text-center 
                    py-12 
                    text-slate-500 
                    text-lg
                "
          >
            No recent posts available.
          </div>
        )}
      </div>
    </section>
  );
};
export default RecentPosts;
