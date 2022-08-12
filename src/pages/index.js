import FeaturesPosts from "../components/home-page/features-posts";
import Hero from "../components/home-page/hero";

import { Fragment } from "react";
import { getFeaturedPosts } from "../../lib/post-util";

export default function HomePage(props) {
  
  return (
    <Fragment>
      <Hero />
      <FeaturesPosts posts={props.posts} />
    </Fragment>
  );
     
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}
