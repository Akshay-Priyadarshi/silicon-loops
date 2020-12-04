export default class UserModel {
  userDetails;
  upvotedPosts;
  downvotedPosts;
  savedPosts;

  constructor({
    userDetails = new UserDetails(),
    upvotedPosts = [],
    downvotedPosts = [],
    savedPosts = [],
  }) {
    this.userDetails = userDetails;
    this.upvotedPosts = upvotedPosts;
    this.downvotedPosts = downvotedPosts;
    this.savedPosts = savedPosts;
  }
}

export class UserDetails {
  userEmail;
  emailVerified;
  batchOf;
  branch;
  dob;
  userDPURL;
  userName;
  workingAt;

  constructor({
    emailVerified = false,
    userEmail = "",
    batchOf = "",
    branch = "",
    dob = null,
    userDPURL = "",
    userName = "",
    workingAt = "",
  }) {
    this.userEmail = userEmail;
    this.batchOf = batchOf;
    this.branch = branch;
    this.dob = dob;
    this.userDPURL = userDPURL;
    this.userName = userName;
    this.workingAt = workingAt;
  }
}

export const userConverter = {
  toFirestore: function (user) {
    console.log("to firebase", user);
    return {
      ...user,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    console.log("from firebase", data);
    return new UserDetails({
      ...data,
    });
  },
};
