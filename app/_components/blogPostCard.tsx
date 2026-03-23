
import Link from "next/link";

export interface BlogPostCardProps {
  title: string;
  date: string;
  tags: string[];
  description: string;
  href: string;
  display: 'shadow' | 'outline'
}

const BlogPostCard = ({
  title,
  date,
  tags,
  description,
  href,
  display
}: BlogPostCardProps) => {
  return (
    <Link href={href}>
    <article  className={`max-w-[650px] min-h-52 bg-card rounded-md flex flex-col sm:gap-3 gap-1 p-5 ${display === 'shadow' ? 'hover:shadow-(--shadow-card) transition-shadow duration-200 cursor-pointer': 'hover:bg-hover transition-colors'}`}>
      <h3 className=" sm:text-2xl text-xl font-extrabold leading-8 line-clamp-2">
       {title}
      </h3>
      <div className="w-full flex 
        items-center  sm:gap-3 gap-2 leading-7 text-slate-400">
        <time className="whitespace-nowrap text-lg">{date}</time>
        <span className="
          
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
      <p className=" text-base font-normal leading-6 line-clamp-3 md:line-clamp-4">
        {description}
      </p>
    </article>
    {display === 'outline' && <div className="h-0 outline outline-neutral-200 mb-2 md:mb-4" />}
    </Link>
  );
};
export default BlogPostCard;