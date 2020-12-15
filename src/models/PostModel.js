export default class PostDetails {
  postContent;
  postImageURL;
  isJobPost;
  postedBy;
  postedAt;

  constructor({
    postContent = "",
    postImageURL = "",
    isJobPost = false,
    postedBy = {
      userId: "",
      userName: "",
      userDPURL: "",
    },
    postedAt = "",
  }) {
    this.postContent = postContent.trim();
    this.postImageURL = postImageURL.trim();
    this.isJobPost = isJobPost;
    this.postedBy = postedBy;
    this.postedAt = postedAt;
  }
}

export const postConverter = {
  toFirestore: function (post) {
    // console.log("to firebase", post);
    return {
      ...post,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    // console.log("from firebase", data);
    return new PostDetails({
      ...data,
    });
  },
};
