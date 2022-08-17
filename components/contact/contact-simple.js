import styles from "./contact-simple.module.scss";
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function ContactSimple() {
  return (
    <section className={styles.contactsimple}>
      <div className={styles.container}>
        <h1>Contatos</h1>
        <div className={styles.continterno}>
          <a>
            <div className={styles.contatos}>
              <SiGmail />
              <p>johnatan.sousa@gmail.com</p>
            </div>
          </a>

          <Link href="https://github.com/sirpantheon">
            <a>
              <div className={styles.contatos}>
                <BsGithub />
                <p>GitHub</p>
              </div>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/johnatan-sousa-silva-paixao-87ab81123/">
            <a>
              <div className={styles.contatos}>
                <BsLinkedin />
                <p>Linkedin</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
