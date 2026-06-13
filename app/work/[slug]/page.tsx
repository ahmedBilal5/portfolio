import { notFound } from "next/navigation";
import { getPost } from "../../blog/[slug]/_utils/getPost";
import PostPage from "../../blog/[slug]/_components/post";

export default async function WorkPostPage({
  params,
}: { 
 params: { slug: string }
} ) {
  const { slug } =  await params;
  const post = await getPost('works',slug);
    if (!post) {
        notFound();
    }
    console.log("post: ", post);
    const Content = post.content;
    console.log("content: ", Content);
    return <PostPage post={post} />
}