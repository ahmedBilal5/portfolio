import BlogPostCard from "../_components/blogPostCard";
import WorkCard from "../_components/workCard";
import { featuredWorks, recentPosts } from "../constants";

export default function Works(){
    return <>
    <h1 className="dark:text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[70px] text-center md:text-left my-5">
              Works
    </h1>
    {featuredWorks.length > 0 ? (
        <div className="grid grid-cols-1">
          {featuredWorks.map((work) => (
            <WorkCard
              key={work.title}
              title={work.title}
              description={work.description}
              year={work.year}
              tags={work.tags}
              imageUrl={work.imageUrl}
              href={work.href}
              showOutline
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
    </>
}