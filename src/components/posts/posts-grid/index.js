import PostsItem from "../posts-item";
import styles from "./posts-grid.module.scss";

export default function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostsItem key={post.slug} post={post}/>
      ))}
    </ul>
  );
}
