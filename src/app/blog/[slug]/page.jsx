// "use client";
// import { useParams } from "next/navigation";
import { getPost } from "@/lib/data";
import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getData } from "@/lib/fetchData";

// export const generateMetadata = async (params) => {
//   const { slug } = params;
//   const post = await getPost(slug);

//   return { title: post.title, description: post.desc };
// };

const SinglePostPage = async ({ params }) => {
  // const params = useParams();
  const { slug } = params;
  // const post = await getPost(slug);
  const post = await getData(slug);
  // console.log({ Posts });
  // const post = Posts.find((p) => p.slug === slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          // src="https://images.pexels.com/photos/21287054/pexels-photo-21287054/free-photo-of-a-city-square-with-tables-and-chairs-and-umbrellas.jpeg"
          src={post.img}
          alt=""
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            width={50}
            height={50}
            src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            // fill
          />

          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userid={post.userId} />
          </Suspense>

          {/* <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>JonhSon</span>
          </div> */}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

// 2:26
