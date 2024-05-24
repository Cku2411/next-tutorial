"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./model";
import { connecTodb } from "./utils";

export const addPost = async (formData) => {
  const formObj = Object.fromEntries(formData);
  const { title, desc, slug, userId } = formObj;

  try {
    connecTodb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("save to Db");
  } catch (e) {
    console.log(e);
    return { error: "something went wrong with ActionJs" };
  }

  console.log(title, desc, slug, userId);
};

export const deletePost = async (formData) => {
  const formObj = Object.fromEntries(formData);
  const { id } = formObj;

  try {
    connecTodb();
    await Post.findByIdAndDelete(id);
    console.log("delete from Db");
    revalidatePath("/blog");
  } catch (e) {
    console.log(e);
    return { error: "something went wrong with ActionJs" };
  }
};
