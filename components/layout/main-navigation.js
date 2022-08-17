import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.scss';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
