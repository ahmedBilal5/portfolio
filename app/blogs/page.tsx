import BlogPostCard from "../_components/blogPostCard";
import { recentPosts } from "../constants";

export default function BlogPosts(){
    return <>
    <h1 className="dark:text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[70px] text-center md:text-left my-5">
              Blog
    </h1>
    {recentPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                title={post.title}
                date={post.date}
                tags={post.tags}
                description={post.description}
                href={post.href || `/blog/${post.id}`}
                display="outline"
                className="max-w-full"
              />
            ))}
    </>
}