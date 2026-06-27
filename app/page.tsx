import FeaturedWorks from "./_components/featuredWorks";
import HeroSection from "./_components/hero";
import RecentPosts from "./_components/recentPosts";
import ProfilePicture from "../public/images/profilePicture.jpeg";
import { WorkCardProps } from "./_components/workCard";
import { Post as RecentPost } from "./_components/recentPosts";
import { getAllPosts } from "./blogs/_utils/getAllPosts";

export default async function Portfolio() {
  const experienceYears = new Date().getFullYear() - 2023;
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
        description={`Engineer with ${experienceYears} years of experience in software development across multiple domains. Passionate about work that is meaningful and purposeful. Sometimes, I blog about tidbits from my work. `}
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
