import PostsGrid from "../posts-grid";
import styles from "./all-posts.module.scss";

export default function AllPosts(props) {
  return <section className={styles.posts}>
    <h1>Todas Postagens</h1>
    <PostsGrid posts={props.posts}/>
  </section>;
}
