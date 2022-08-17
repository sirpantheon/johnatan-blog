import styles from "./contact-simple.module.scss";

export default function ContactSimple() {
  return (
    <section className={styles.contactsimple}>
      <div className={styles.container}>
        <h1>Contatos</h1>
        <div className={styles.contatos}>johnatan.sousa@gmail.com</div>
        <div className={styles.contatos}>https://github.com/sirpantheon</div>
        <div className={styles.contatos}>https://www.linkedin.com/in/johnatan-sousa-silva-paixao-87ab81123/</div>
      </div>
    </section>
  );
}
