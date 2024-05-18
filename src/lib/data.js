import { Post, User } from "./model";
import { connecTodb } from "./utils";
// TEMPORATY DATA
// const users = [
//   {
//     id: 1,
//     name: "John",
//   },
//   {
//     id: 2,
//     name: "Jane",
//   },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "..........", userId: 1 },
//   { id: 2, title: "Post 2", body: "..........", userId: 2 },
//   { id: 3, title: "Post 3", body: "..........", userId: 3 },
// ];

export const getPost = async (slug) => {
  try {
    // connect to Db
    connecTodb();
    const posts = await Post.find({ slug });
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch post!");
  }
};

export const getPosts = async () => {
  try {
    // connect to Db
    connecTodb();
    const posts = await Post.find({});
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch posts!");
  }
};

export const getUser = async (id) => {
  try {
    // connect to Db
    connecTodb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    // connect to Db
    connecTodb();
    const users = await User.findById();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch users!");
  }
};
