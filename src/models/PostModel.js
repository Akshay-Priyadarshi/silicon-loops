import UserModel from "./UserModel";
import FirebaseApp from "../services/firebaseApp";

export default class PostModel {
  postTitle;
  postContent;
  postImageUrl;
  postedBy;
  upVoteCount;
  downVoteCount;
  popularityRatio;
  comments;
  fb = new FirebaseApp();

  savePost() {
    console.log(this);
    // this.fb.db.collection("posts").add(this);
  }

  constructor({
    postTitle = "",
    postContent = "",
    postImageUrl = "",
    postedBy = {},
    upVoteCount = 0,
    downVoteCount = 0,
    comments = [], //store id of comments
  }) {
    this.postTitle = postTitle.trim();
    this.postContent = postContent.trim();
    this.postImageUrl = postImageUrl.trim();
    this.postedBy = postedBy;
    this.upVoteCount = upVoteCount;
    this.downVoteCount = downVoteCount;
    this.popularityPercentage = (upVoteCount / downVoteCount) * 100;
    if (downVoteCount === 0) {
      popularityPercentage = 100;
    } else {
      if (upvoteCount === 0) {
        popularityPercentage = 0;
      } else {
        popularityPercentage =
          (upvoteCount / (downvoteCount + upvoteCount)) * 100;
      }
    }
    this.comments = comments;
  }
}

const post1 = new PostModel();
