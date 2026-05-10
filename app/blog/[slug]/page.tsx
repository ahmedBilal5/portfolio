import { notFound } from "next/navigation";
import Post from "../../../public/posts/hello-world.mdx";
import { getPost } from "./_utils/getPost";

export default async function BlogPostPage({params}:{
  params: { slug: string }
}) {
    const { slug } =  await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  console.log("post: ", post);
  const Content = post.content;
  return <Content />;
}