import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.scss';

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Posts em Destaques</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
