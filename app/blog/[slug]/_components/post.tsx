import { Post } from "../_utils/getPost";

export default function PostPage({ post }: { post: Post }) {

const Content = post.content;   
 return (
    <div className="max-w-blog mx-auto px-4 md:px-8">
        <h1 className="dark:text-white text-[1.65rem] sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[50px] text-left my-5">
            {post.title}   
        </h1>
        <div className="flex flex-row gap-3 items-center my-5">
       
        <div className="w-14 h-6 sm:w-16 sm:h-8 bg-blue-950 dark:bg-[#AFC3EB] rounded-full flex items-center justify-center">
          <span className="text-white dark:text-blue-950 font-extrabold">
            {new Date(post.publishDate).getFullYear()}
          </span>
        </div>

          <span className="text-slate-400 text-lg sm:text-xl font-normal line-clamp-1">
            {post.tags.join(", ")}
          </span>
        </div>
        <section className="relative">
          
        
            <div className="prose prose-md md:prose-lg prose-li:mb-2 prose-ul:mt-4 hover:prose-a:text-primary hover:prose-a:decoration-primary prose-a:underline prose-p:mt-2 prose-p:mb-4 max-w-none dark:prose-invert prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-2">
              <Content />
            </div>
        </section>
    </div>
  )
}