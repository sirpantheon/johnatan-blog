import PostsGrid from "../../posts/posts-grid";
import styles from "./features.module.scss";

export default function FeaturesPosts(props) {
  return (
    <section className={styles.latest}>
      <h2>Posts Em Destaque</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
