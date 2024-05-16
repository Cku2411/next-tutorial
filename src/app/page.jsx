import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Createive thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          nulla repudiandae totam saepe iste ad, exercitationem nobis quasi
          expedita ratione officiis. Corporis eligendi voluptates sint ducimus
          vitae sapiente porro. Cupiditate.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        {/* <Image src="/hero.gif" alt="" fill className={styles.heroImg} /> */}
      </div>
    </div>
  );
};

export default Home;

// 28:12
