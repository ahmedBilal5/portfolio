import { notFound } from "next/navigation";
import Post from "../../../public/posts/works/datagrid-expression-previewer.mdx";
import { getPost } from "./_utils/getPost";
import PostPage from "./_components/post";

export default async function BlogPostPage({params}:{
  params: { slug: string }
}) {
    const { slug } =  await params;
  const post = await getPost('blogs',slug);
  if (!post) {
    notFound();
  }
  console.log("post: ", post);
  const Content = post.content;
  console.log("content: ", Content);
  return <PostPage post={post} />
}