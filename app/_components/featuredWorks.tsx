import WorkCard, { WorkCardProps } from "./workCard";

interface FeaturedWorksProps {
  title: string;
  maxWorks: number;
  works: WorkCardProps[];
}

const FeaturedWorks = ({ title, maxWorks, works }: FeaturedWorksProps) => {
  const displayedWorks = works.slice(0, maxWorks);

  return (
    <section className="py-4 md:py-6 mt-5 sm:mt-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <h2 className=" text-lg md:text-xl lg-text-2xl font-normal md:font-medium leading-8 md:leading-9 lg:leading-10 mb-4 md:mb-6">
          {title}
        </h2>
      {displayedWorks.length > 0 ? (
        <div className="grid grid-cols-1">
          {displayedWorks.map((work) => (
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
      </div>
    </section>
  );
};

export default FeaturedWorks;
