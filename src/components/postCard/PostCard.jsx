import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/21287054/pexels-photo-21287054/free-photo-of-a-city-square-with-tables-and-chairs-and-umbrellas.jpeg"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>15.5.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <h1 className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, ducimus?
        </h1>
        <Link className={styles.link} href="/blog/post">
          {" "}
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
