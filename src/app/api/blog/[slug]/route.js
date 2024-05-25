import { Post } from "@/lib/model";
import { connecTodb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connecTodb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch posts");
  }
};
