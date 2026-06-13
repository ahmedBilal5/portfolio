import FeaturedWorks from "./_components/featuredWorks";
import HeroSection from "./_components/hero";
import RecentPosts from "./_components/recentPosts";
import ProfilePicture from "../public/images/profilePicture.jpeg";
import { featuredWorks, recentPosts } from "./constants";

export default function Portfolio() {
  const experienceYears = new Date().getFullYear() - 2023;

  return (
    <div className="md:mt-16.5 mt-7 flex-grow-1">
      <HeroSection
        name="Ahmed"
        title="Software Engineer"
        description={`Engineer with ${experienceYears} years of experience in software development across multiple domains. Passionate about meaningful and ethical work that serves a noble purpose. Sometimes, I blog about tit-bits from my work. `}
        buttonText="Download Resume"
        imageUrl={ProfilePicture.src}
        buttonOnClick={async () => {
          "use server";
          console.log("Resume downloaded");
        }}
      />
      <RecentPosts posts={recentPosts} maxPosts={3} />
      <FeaturedWorks
        title={"Featured Works"}
        maxWorks={4}
        works={featuredWorks}
      />
    </div>
  );
}
