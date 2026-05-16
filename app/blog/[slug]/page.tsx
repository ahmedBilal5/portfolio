import { notFound } from "next/navigation";
import Post from "../../../public/posts/hello-world.mdx";
import { getPost } from "./_utils/getPost";

export default async function BlogPostPage({params}:{
  params: { slug: string }
}) {
    const { slug } =  await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  console.log("post: ", post);
  const Content = post.content;
  return (
    <div className="max-w-blog mx-auto px-4 md:px-8">
      <h1 className="dark:text-white text-2xl md:text-3xl font-extrabold leading-tight sm:leading-[70px] text-left my-5">
           {post.title}   
      </h1>
      <div className="flex flex-row gap-3 items-center ">
          <div className="w-14 h-6 bg-blue-950 dark:bg-[#AFC3EB] rounded-full">
            <span className="ml-3 text-white dark:text-blue-950  text-sm font-extrabold">
              {new Date(post.publishDate).getFullYear()}
            </span>
          </div>
          <span className="text-slate-400text-lg font-normal line-clamp-1">
            {post.tags.join(", ")}
          </span>
        </div>
         <section className="prose prose-md prose-li:mb-2 prose-ul:mt-4 hover:prose-a:text-primary hover:prose-a:decoration-primary prose-a:underline prose-p:mt-2 prose-p:mb-4 max-w-none dark:prose-invert prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-2">
            <Content/>
         </section>
    </div>
  )
}