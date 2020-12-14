import React, { useState } from "react";
import "./Post.css";
import { ReactComponent as Comment } from "../../assets/comment.svg";
import { ReactComponent as Upvote } from "../../assets/upvote.svg";
import { ReactComponent as UpvoteFilled } from "../../assets/upvote-filled.svg";
import { ReactComponent as Downvote } from "../../assets/downvote.svg";
import { ReactComponent as DownvoteFilled } from "../../assets/downvote-filled.svg";
import { ReactComponent as Bookmark } from "../../assets/bookmark.svg";
import { ReactComponent as BookmarkFilled } from "../../assets/bookmark-filled.svg";
import { ReactComponent as Attach } from "../../assets/attach.svg";
import { ReactComponent as UserDP } from "../../assets/user.svg";
import useDataLayerValue from "../../store/dataLayer";

function Post({ post }) {
  const [{ authUser }] = useDataLayerValue();
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="post-main">
      <div className="post-left">
        {post.postedBy.userDPURL ? (
          <img
            src={post.postedBy.userDPURL}
            className="post-user-dp"
            alt="post-user-dp"
          />
        ) : (
          <UserDP className="post-user-fake-img" alt="user-avatar" />
        )}
      </div>
      <div className="post-right">
        <div className="post-user-name">{post.postedBy.userName}</div>
        <div className="post-content">{post.postContent}</div>
        {/* <button className="post-attached-file-btn">
          Open Attachment
          <span>
            <Attach className="post-attach-file-icon" />
          </span>
        </button> */}
        {console.log("url ", post.postImageURL)}
        {post.postImageURL === "" ? null : (
          <img src={post.postImageURL} alt="post-img" className="post-img" />
        )}
        <div className="post-actions-container">
          <div className="post-action">
            <div className="post-action-icon">
              <Comment className="post-action-img" />
            </div>
            <div className="post-action-count">12</div>
          </div>
          <div className="post-action">
            <div className="post-action-icon">
              {upvoted ? (
                <UpvoteFilled
                  className="post-action-img"
                  onClick={() => setUpvoted(false)}
                />
              ) : (
                <Upvote
                  className="post-action-img"
                  onClick={() => {
                    setDownvoted(false);
                    setUpvoted(true);
                  }}
                />
              )}
            </div>
            <div className="post-action-count">50</div>
          </div>

          <div className="post-action">
            <div className="post-action-icon">
              {downvoted ? (
                <DownvoteFilled
                  className="post-action-img"
                  onClick={() => setDownvoted(false)}
                />
              ) : (
                <Downvote
                  className="post-action-img"
                  onClick={() => {
                    setUpvoted(false);
                    setDownvoted(true);
                  }}
                />
              )}
            </div>
            <div className="post-action-count">10</div>
          </div>
          <div className="post-action">
            <div className="post-action-icon">
              {saved ? (
                <BookmarkFilled
                  className="post-action-img"
                  onClick={() => setSaved(false)}
                />
              ) : (
                <Bookmark
                  className="post-action-img"
                  onClick={() => setSaved(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
