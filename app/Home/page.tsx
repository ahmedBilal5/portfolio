import BlogPostCard from "../_components/blogPostCard";
import HeroSection from "../_components/hero";
import NavBar from "../_components/navBar";
import RecentPosts from "../_components/recentPosts";

export default (Home) => {
    const recentPosts = [
    {
      id: 1,
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      tags: ["Design", "Pattern"],
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      href: "/blog/design-system"
    },
    {
      id: 2,
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      tags: ["Figma", "Icon Design"],
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      href: "/blog/figma-icons"
    },
    {
      id: 3,
      title: "Modern CSS techniques for better layouts",
      date: "15 Mar 2024",
      tags: ["CSS", "Frontend"],
      description: "Learn about modern CSS features like Grid, Flexbox, and Container Queries to create responsive layouts.",
      href: "/blog/modern-css"
    }
  ];
  return (
    <div className="w-full max-w-[1404px] mx-auto px-4 md:px-8">
      <NavBar />
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
    </div>
  );
};
