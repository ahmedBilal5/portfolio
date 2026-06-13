import BlogPostCard from "../_components/blogPostCard";
import WorkCard from "../_components/workCard";
import { getAllPosts } from "../blogs/_utils/getAllPosts";
import { featuredWorks, recentPosts } from "../constants";

export default async function Works() {
  const works = await getAllPosts('works')
  return (
    <div className="flex-grow">
      <h1 className="dark:text-white text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[70px] text-left my-5">
        Works
      </h1>
      {works.length > 0 ? (
        <div className="grid grid-cols-1">
          {works.map((work) => (
            <WorkCard
              key={work.title}
              title={work.title}
              description={work.excerpt}
              year={`${new Date(work.publishDate).getFullYear()}`}
              tags={work.tags}
              imageUrl={work.featuredImage}
              href={'/work/' + work.slug}
              showOutline={{ show: true, mb: "none" }}
              extraPadY
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
          No recent works available.
        </div>
      )}
    </div>
  );
}
