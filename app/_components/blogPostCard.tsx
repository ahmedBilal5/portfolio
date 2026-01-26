
import Link from "next/link";

export interface BlogPostCardProps {
  title: string;
  date: string;
  tags: string[];
  description: string;
  href: string;
}

const BlogPostCard = ({
  title,
  date,
  tags,
  description,
  href
}: BlogPostCardProps) => {
  return (
    <Link href={href}>
    <article  className="max-w-[650px] min-h-[208px] bg-white rounded-md flex flex-col sm:gap-3 gap-1 p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer">
      <h3 className="text-slate-800 sm:text-2xl text-xl font-extrabold leading-8 line-clamp-2">
       {title}
      </h3>
      <div className="w-full flex flex-wrap 
        items-center  sm:gap-3 gap-2 leading-7 text-slate-800">
        <time className="whitespace-nowrap text-lg">{date}</time>
        <span className="
          text-slate-800
        ">
          |
        </span>
        <span className="
          text-lg
          truncate
        ">
          {tags.join(', ')}
      </span>
      </div>
      <p className="text-slate-800 text-base font-normal leading-6 line-clamp-3 md:line-clamp-4">
        {description}
      </p>
    </article>
    </Link>
  );
};
export default BlogPostCard;