import BlogPostCard from "../_components/blogPostCard";
import { getAllPosts } from "./_utils/getAllPosts";

export default async function BlogPosts(){
    const posts = await getAllPosts('blogs');
    return <>
    <h1 className="dark:text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[70px] text-center md:text-left my-5">
              Blog
    </h1>
    {posts.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                date={post.publishDate}
                tags={post.tags}
                description={post.excerpt}
                href={`/blog/${post.slug}`}
                display="outline"
                className="max-w-full"
              />
            ))}
    </>
}