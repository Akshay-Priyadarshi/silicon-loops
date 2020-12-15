import React, { useState, useEffect } from "react";
import "./AuthFeeds.css";
import Post from "../../../../components/post/Post";
import NewPost from "../../../../components/new-post/NewPost";
import { ReactComponent as Write } from "../../../../assets/write.svg";
import { ReactComponent as Close } from "../../../../assets/close.svg";
import Modal from "react-modal";
import { db } from "../../../../services/firebaseApp";
import { postConverter } from "../../../../models/PostModel";

function AuthFeeds() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .withConverter(postConverter)
      .orderBy("postedAt", "desc")
      .onSnapshot((res) => {
        const recievedPosts = res.docs.map((post) => {
          return { id: post.id, data: post.data() };
        });
        setPosts(recievedPosts);
      });

    return () => unsubscribe();
  }, []);

  return (
    <div className="auth-feeds-main">
      <div
        className="auth-feeds-write-button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Write className="auth-feeds-write-icon" />
      </div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={() => setIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Write Post"
        ariaHideApp={false}
      >
        <div
          className="auth-feeds-modal-close-container"
          onClick={() => setIsOpen(false)}
        >
          <Close className="auth-feeds-modal-close" />
        </div>
        <NewPost setIsOpen={setIsOpen} />
      </Modal>
      {posts.map((post) => {
        return <Post key={post.id} post={post.data} />;
      })}
      <h3 className="auth-feeds-end-text">That's all for now!</h3>
    </div>
  );
}

export default AuthFeeds;
