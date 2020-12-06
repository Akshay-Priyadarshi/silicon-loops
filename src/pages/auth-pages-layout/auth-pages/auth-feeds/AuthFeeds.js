import React from "react";
import "./AuthFeeds.css";
import Post from "../../../../components/post/Post";

function AuthFeeds() {
  return (
    <div className="auth-feeds-main">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default AuthFeeds;
