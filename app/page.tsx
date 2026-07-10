import FeaturedWorks from "./_components/featuredWorks";
import HeroSection from "./_components/hero";
import RecentPosts from "./_components/recentPosts";
import ProfilePicture from "../public/images/profilePicture.jpeg";
import { WorkCardProps } from "./_components/workCard";
import { Post as RecentPost } from "./_components/recentPosts";
import { getAllPosts } from "./blogs/_utils/getAllPosts";

export default async function Portfolio() {
  const experienceYears = new Date().getFullYear() - 2023;
  const currentCompany = "Zones IT Solutions";

  const heroHighlights = [
    { label: "TypeScript", iconSrc: "https://cdn.simpleicons.org/typescript" },
    { label: "React", iconSrc: "https://cdn.simpleicons.org/react" },
    { label: "GraphQL", iconSrc: "https://cdn.simpleicons.org/graphql" },
    { label: "NestJS", iconSrc: "https://cdn.simpleicons.org/nestjs" },
    { label: "Python", iconSrc: "https://cdn.simpleicons.org/python" },
    { label: "Git", iconSrc: "https://cdn.simpleicons.org/git" },
  ];

  const featuredBlogs = (await getAllPosts("blogs"))
    .filter((blog) => blog?.featured)
    .map(
      (blog): RecentPost => ({
        id: blog.slug,
        title: blog.title,
        date: blog.publishDate,
        tags: blog.tags,
        description: blog.excerpt,
        href: `/blog/${blog.slug}`,
        display: "shadow",
      }),
    );

  const featuredWorks = (await getAllPosts("works"))
    .filter((work) => work?.featured)
    .map(
      (work): WorkCardProps => ({
        title: work.title,
        description: work.excerpt,
        year: `${new Date(work.publishDate).getFullYear()}`,
        tags: work.tags,
        imageUrl: work.featuredImage ?? "https://placehold.co/256x192",
        href: `/work/${work.slug}`,
      }),
    );

  return (
    <div className="md:mt-16.5 mt-7 flex-grow-1">
      <HeroSection
        name="Ahmed"
        title="Software Engineer"
        description={
          <>
            Engineer from{" "}
            <span className="inline-flex items-center align-baseline">
              <img
                src="/images/pakistan-flag.svg"
                alt="Pakistan flag"
                className="mx-1 inline-block h-4 w-6 rounded-sm"
              />
            </span>
            with {experienceYears} years of software development experience across
            Frontend, Backend and CI/CD 🛠️💻. Currently working at{" "}
            <a
              href="https://www.linkedin.com/company/zones-it-solutions/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-red-400 underline-offset-2 hover:text-red-500"
            >
              {currentCompany}
            </a>
            . Eager to explore the world of mobile app development 📱. Would like
            to build some tech that serves a good cause 💪. Sometimes I blog about
            tidbits from my work.
          </>
        }
        highlights={heroHighlights}
        buttonText="Download Resume"
        imageUrl={ProfilePicture.src}
        buttonHref="/other/Ahmed Bilal Resume.pdf"
      />
      <RecentPosts posts={featuredBlogs} maxPosts={3} />
      <FeaturedWorks
        title={"Featured Works"}
        maxWorks={4}
        works={featuredWorks}
      />
    </div>
  );
}
