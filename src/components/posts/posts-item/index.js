import Image from "next/image";
import Link from "next/link";
import styles from "./posts-item.module.scss";

export default function PostsItem(props) {
    
    const { title, image, excerpt, date, slug } = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-US' , {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const imagePath = `/image/posts/${slug}/${image}`;

  return (
    <li className={styles.post}>
      <Link>
        <a>
            <div className={styles.image}>
                <Image src={imagePath} alt={title} width={300} height={200}    />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
        </a>
      </Link>
    </li>
  );
}
