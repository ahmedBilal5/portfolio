import Link from "next/link";

export interface WorkCardProps {
  title: string;
  year: string;
  description: string;
  tags: string[];
  imageUrl: string;
  href: string;
  showOutline?: { show: boolean; mb: "some" | "none" };
  extraPadY?: boolean;
}
const WorkCard = ({
  title,
  year,
  description,
  tags,
  imageUrl = "https://placehold.co/256x192",
  href,
  showOutline = { show: true, mb: "some" },
  extraPadY = false,
}: WorkCardProps) => {
  const mbConfig = {
    none: "mb-0",
    some: "mb-2 md:mb-4",
  };

  return (
    <Link href={href}>
      <article
        className={`flex flex-col sm:flex-row gap-3 rounded-md  ${extraPadY ? "py-7 px-5" : "p-5"}  cursor-pointer hover:bg-hover transition-colors h-50 md:h-56`}
      >
        <div className="relative min-w-56 sm:w-56 lg:w-64 max-h-48 bg-black/0 rounded-md overflow-hidden flex-shrink-0">
          <img className="w-full h-full object-cover" src={imageUrl} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-extrabold line-clamp-1">
            {title}
          </h2>
          <div className="flex flex-row gap-3 items-center ">
            <div className="w-14 h-6 bg-blue-950 dark:bg-[#AFC3EB] rounded-full">
              <span className="ml-3 text-white dark:text-blue-950  text-sm font-extrabold">
                {year}
              </span>
            </div>
            <span className="text-slate-400text-lg font-normal line-clamp-1">
              {tags.join(", ")}
            </span>
          </div>
          <p className=" text-base font-normal line-clamp-3">{description}</p>
        </div>
      </article>
      {showOutline.show && (
        <div
          className={`h-0 outline outline-neutral-200 dark:outline-[#1F2228] ${mbConfig[showOutline.mb]}`}
        />
      )}
    </Link>
  );
};

export default WorkCard;
