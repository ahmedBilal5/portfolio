import BlogPostCard, { BlogPostCardProps } from "../_components/blogPostCard";
import FeaturedWorks from "../_components/featuredWorks";
import Footer, { Platform } from "../_components/footer";
import HeroSection from "../_components/hero";
import NavBar from "../_components/navBar";
import RecentPosts, { Post } from "../_components/recentPosts";
import WorkCard from "../_components/workCard";

export default (Home) => {

    const recentPosts: Post[] = [
    {
      id: 1,
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      tags: ["Design", "Pattern"],
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      href: "/blog/design-system",
      display: "outline"
    },
    {
      id: 2,
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      tags: ["Figma", "Icon Design"],
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      href: "/blog/figma-icons",
      display: "outline"
    },
    {
      id: 3,
      title: "Modern CSS techniques for better layouts",
      date: "15 Mar 2024",
      tags: ["CSS", "Frontend"],
      description: "Learn about modern CSS features like Grid, Flexbox, and Container Queries to create responsive layouts.",
      href: "/blog/modern-css",
      display: "outline"
    }
  ];

  const featuredWorks = [
    {
        title:"Designing Dashboards",
        year:"2020",
        tags:["Dashboard"],
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        imageUrl:"https://placehold.co/256x192",
        href:"/works/designing-dashboards",
        showOutline: true
    },
    {
        title:"Vibrant Portraits of 2020",
        year:"2020",
        tags: ["UI/UX", "Mobile App", "Web Design"],
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        imageUrl:"https://placehold.co/256x192",
        href:"/works/designing-dashboards",
        showOutline: true
    },
    {
        title:"36 Days of Malayalam type",
        year:"2010",
        tags: ["UI/UX", "Mobile App", "Web Design"],
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        imageUrl:"https://github.com/mdn/shared-assets/blob/main/images/examples/ballon-portrait.jpg?raw=true",
        href:"/works/designing-dashboards",
        showOutline: true
    },

  ]

const socialPlatforms = [
  { name: 'Linkedin', iconSrc: '/platforms/linkedin-outlined.svg', href: '' },
  { name: 'Github', iconSrc: '/platforms/github-outlined.svg', href: '' },
  { name: 'Stack Overflow', iconSrc: '/platforms/stackoverflow-outlined.svg', href: '' }
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
      <FeaturedWorks title={"Featured Works"} maxWorks={4} works={featuredWorks}/>    
      <Footer platforms={socialPlatforms}/> 
    </div>
  );
};
