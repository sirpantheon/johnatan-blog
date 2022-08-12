import { getPostData, getPostFiles } from "../../../lib/post-util";
import PostContent from "../../components/posts/posts-detail/posts-content";

export default function PostDetailPage(props) {
  return <PostContent post={props.post}/>;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      postData,
    },
    revalidate: 1800,
  };
}

export function getStaticPaths(){
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({params: {slug: slug}})),
    fallback: "blocking",
  };
}
