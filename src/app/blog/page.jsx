import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  console.log(`Start connec to monggose DB`);
  // const posts = await getData();
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((p) => (
        <div className={styles.post} key={p.id}>
          <PostCard post={p} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
