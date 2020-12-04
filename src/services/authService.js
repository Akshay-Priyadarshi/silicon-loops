import { auth, db } from "./firebaseApp";
import { userConverter, UserDetails } from "../models/UserModel";
import ResponseModel from "../models/ResponseModel";

export const logInWithEmail = async (email, password) => {
  try {
    const userData = await auth.signInWithEmailAndPassword(email, password);
    if (userData) {
      const userFromDB = await db
        .collection("users")
        .doc(userData.user.uid)
        .withConverter(userConverter)
        .get();
      return new ResponseModel({ data: userFromDB.data() });
    }
  } catch (e) {
    return new ResponseModel({ errors: e });
  }
};

export const signUpWithEmail = async (email, password) => {
  try {
    const userData = await auth.createUserWithEmailAndPassword(email, password);
    console.log(userData.user);
    if (userData) {
      await db
        .collection("users")
        .doc(userData.user.uid)
        .withConverter(userConverter)
        .set(
          new UserDetails({
            userEmail: userData.user.email,
            emailVerified: userData.user.emailVerified,
          })
        );
      return new ResponseModel({ data: userData.user });
    }
  } catch (e) {
    return new ResponseModel({ errors: e });
  }
};

export const currentUser = () => {
  return auth.currentUser();
};
