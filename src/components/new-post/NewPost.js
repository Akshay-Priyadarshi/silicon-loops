import React, { useState, useEffect, useRef } from "react";
import "./NewPost.css";
import { useFormik } from "formik";
import firebase, { db } from "../../services/firebaseApp";
import { storageRef, postImageFilePath } from "../../services/storageService";
import { currentUser } from "../../services/authService";
import { validateNotBlank } from "../../services/validations";
import { savePost } from "../../services/postService";
import PostDetails from "../../models/PostModel";
import { useAlert } from "react-alert";
import { ReactComponent as Attach } from "../../assets/image-upload.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as UserDP } from "../../assets/user.svg";
import "react-circular-progressbar/dist/styles.css";
import useDataLayerValue from "../../store/dataLayer";
import RingLoader from "react-spinners/RingLoader";

function NewPost({ setIsOpen }) {
  const [{ authUser }] = useDataLayerValue();
  const imagePreview = useRef(null);
  const imagePreviewContainer = useRef(null);
  const [newPostId, setNewPostId] = useState("");
  const [postUploading, setPostUploading] = useState(false);
  let downloadURL = "";

  const alert = useAlert();

  useEffect(() => {
    imagePreviewContainer.current.hidden = true;
    const newId = db.collection("posts").doc().id;
    setNewPostId(newId);
  }, []);

  const imageUpload = async (e) => {
    try {
      setPostUploading(true);
      const file = document.getElementById("postImageUpload").files[0];
      if (file) {
        const newImageRef = storageRef.child(
          postImageFilePath(newPostId, file)
        );
        const imageUploadTask = await newImageRef.put(file);
        console.log(await imageUploadTask.ref.getDownloadURL());
        downloadURL = await imageUploadTask.ref.getDownloadURL();
        console.log("url", downloadURL);
        console.log("Done Upload");
        setPostUploading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clearPreview = () => {
    document.getElementById("postImageUpload").value = null;
    imagePreviewContainer.current.hidden = true;
    imagePreview.current.src = "";
  };

  const setPreview = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        const fr = new FileReader();
        fr.onloadend = () => {
          imagePreview.current.src = fr.result;
          imagePreviewContainer.current.hidden = false;
        };
        fr.readAsDataURL(file);
      }
    } catch (e) {
      console.log("here", e);
    }
  };

  const initialValues = {
    postContent: "",
    isJobPost: false,
  };

  const validate = (values) => {
    let errors = {};
    // Content Validation
    if (!validateNotBlank(values.postContent)) {
      errors.postContent = "write something first!";
    }
    return errors;
  };

  const onSubmit = async (values) => {
    try {
      await imageUpload();
      const newPost = new PostDetails({
        isJobPost: values.isJobPost,
        postContent: values.postContent,
        postImageURL: downloadURL,
        postedAt: firebase.firestore.FieldValue.serverTimestamp(),
        postedBy: {
          userId: currentUser().uid,
          userDPURL: authUser.userDPURL || null,
          userName: authUser.userName,
        },
      });
      await savePost(newPost, newPostId);
      await setIsOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  const newPostForm = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <div className="new-post-main">
      {authUser && authUser.userDPURL ? (
        <img
          src={authUser.userDPURL}
          className="new-post-user-img"
          alt="user-avatar"
        />
      ) : (
        <UserDP className="new-post-user-fake-img" alt="user-avatar" />
      )}

      <form className="new-post-form" onSubmit={newPostForm.handleSubmit}>
        <textarea
          name="postContent"
          className="new-post-content-input"
          value={newPostForm.values.postContent}
          onChange={newPostForm.handleChange}
          onBlur={newPostForm.handleBlur}
          placeholder="Write something..."
        ></textarea>
        <div className="new-post-image-upload">
          <input
            id="postImageUpload"
            type="file"
            className="new-post-image-input"
            onChange={(e) => setPreview(e)}
            onClick={(e) => {
              if (e.target.files.length !== 0) {
                alert.info("Try removing the image first!");
                e.preventDefault();
              }
            }}
            accept="image/*"
            hidden
          />
          <label htmlFor="postImageUpload">
            <Attach className="new-post-attach-icon" />
          </label>
        </div>
        <div
          ref={imagePreviewContainer}
          className="new-post-image-preview-container"
        >
          <img
            ref={imagePreview}
            className="new-post-image-preview"
            alt="preview-post"
          />
          <div
            className="new-post-remove-preview-container"
            onClick={clearPreview}
          >
            <Close className="new-post-remove-preview-icon" />
          </div>
        </div>

        <div className="new-post-if-job">
          <label htmlFor="isJobPost">Is this job post?</label>
          <input
            id="isJobPost"
            name="isJobPost"
            type="checkbox"
            className="new-post-job-input"
            value={newPostForm.values.isJobPost}
            onChange={newPostForm.handleChange}
            onBlur={newPostForm.handleBlur}
          />
        </div>
        <button
          disabled={!newPostForm.dirty || !newPostForm.isValid}
          className="new-post-submit-btn"
          type="submit"
        >
          Post
        </button>
      </form>
      <div className="new-post-loading-container">
        <RingLoader
          css={"new-post-loader"}
          size={150}
          color={"#e63946"}
          loading={postUploading}
        />
      </div>
    </div>
  );
}

export default NewPost;
