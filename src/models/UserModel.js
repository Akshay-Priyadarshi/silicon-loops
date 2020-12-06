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
    dob = "",
    userDPURL = "",
    userName = "",
    workingAt = "",
  }) {
    this.emailVerified = emailVerified;
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
