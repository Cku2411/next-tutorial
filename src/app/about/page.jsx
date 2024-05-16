import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission. We are world oure
          social team best consulting and finance solution provider.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>

          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>

          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.png" alt="About img" fill />
      </div>
    </div>
  );
};

export default AboutPage;
