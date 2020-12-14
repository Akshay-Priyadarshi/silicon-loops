import { storage } from "./firebaseApp";

export const storageRef = storage.ref();

export const postImageFilePath = (postId, imageFile) => {
  const filePath = `posts/${postId}.${imageFile.type.split("/")[1]}`;
  return filePath;
};
