import Image from "next/image";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/image/Image-Johnatan.jpg"
          alt="Sou Eu..."
          width={300}
          height={300}
        />
      </div>
      <h1>Olá, meu nome e Johnatan Paixão</h1>
      <p>Meu Blog Sobre Desenvolvimento Web - Especialidade Em Front-End</p>
      <p>NextJs | React | Sass | NodeJs</p>
    </section>
  );
}
