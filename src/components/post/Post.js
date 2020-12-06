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

function Post() {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="post-main">
      <div className="post-left">
        <img
          className="post-user-dp"
          src="https://pbs.twimg.com/profile_images/1284410428479533063/evEEoeub_400x400.jpg"
          alt="user-dp"
        />
      </div>
      <div className="post-right">
        <div className="post-user-name">Akshay Priyadarshi</div>
        <div className="post-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde
          necessitatibu
        </div>
        <button className="post-attached-file-btn">
          Open Attachment
          <span>
            <Attach className="post-attach-file-icon" />
          </span>
        </button>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81HgVEqBVuL._SL1500_.jpg"
          alt="post-img"
          className="post-img"
        />
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
