export default class PostDetails {
  postContent;
  postImageUrl;
  postAttachmentUrl;
  isJobPost;
  postedBy = {
    userId,
    userName,
    userDPURL,
  };
  postedAt;

  constructor({
    postContent = "",
    postImageUrl = "",
    postAttachmentUrl = "",
    isJobPost = false,
    postedBy = {
      userId: "",
      userName: "",
      userDPURL: "",
    },
    postedAt = "",
  }) {
    this.postContent = postContent.trim();
    this.postImageUrl = postImageUrl.trim();
    this.postAttachmentUrl = postAttachmentUrl.trim();
    this.isJobPost = isJobPost;
    this.postedBy = postedBy;
    this.postedAt = postedAt;
  }
}

export const postConverter = {
  toFirestore: function (post) {
    console.log("to firebase", post);
    return {
      ...post,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    console.log("from firebase", data);
    return new postDetails({
      ...data,
    });
  },
};

// this.upVoteCount = upVoteCount;
//     this.downVoteCount = downVoteCount;
//     this.popularityPercentage = (upVoteCount / downVoteCount) * 100;
//     if (downVoteCount === 0) {
//       popularityPercentage = 100;
//     } else {
//       if (upvoteCount === 0) {
//         popularityPercentage = 0;
//       } else {
//         popularityPercentage =
//           (upvoteCount / (downvoteCount + upvoteCount)) * 100;
//       }
//     }
