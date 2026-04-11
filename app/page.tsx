import FeaturedWorks from "./_components/featuredWorks";
import HeroSection from "./_components/hero";
import RecentPosts from "./_components/recentPosts";
import { featuredWorks, recentPosts } from "./constants";

export default function Portfolio() {
  return <div className="md:mt-16.5 mt-7 ">
      <HeroSection
        name="John"
        title="Creative Technologist"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        buttonText="Download Resume"
        imageUrl="https://placehold.co/284x284"
        buttonOnClick={async () => {
          "use server";
          console.log("Resume downloaded");
        }}
      />
      <RecentPosts
        posts={recentPosts}
        maxPosts={3}
      />
      <FeaturedWorks title={"Featured Works"} maxWorks={4} works={featuredWorks}/>    
  </div>
}