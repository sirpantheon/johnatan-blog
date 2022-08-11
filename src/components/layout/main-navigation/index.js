import Link from "next/link";
import Logo from "../logo";
import styles from "./main-navigation.module.scss";

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/Contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
