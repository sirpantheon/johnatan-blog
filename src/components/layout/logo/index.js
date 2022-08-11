import styles from "./logo.module.scss";
import Image from "next/image";

export default function Logo() {
  return <div className={styles.logo}>Johnatan P</div>
  //      -------------opção de logo-------------
  //   <Image src="/image/John3.png" width={110} height={35} />
}
