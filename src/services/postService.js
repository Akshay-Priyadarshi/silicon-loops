import { db } from "./firebaseApp";
import { postConverter } from "../models/PostModel";

export const savePost = async (newPost, postId) => {
  try {
    if (newPost && postId) {
      const newSavedPost = await db
        .collection("posts")
        .doc(postId)
        .withConverter(postConverter)
        .set(newPost);

      if (newSavedPost) {
        console.log(newSavedPost);
      }
    }
  } catch (e) {
    console.log(e.message);
  }
};
