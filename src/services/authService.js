import {
  auth,
  db,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "./firebaseApp";
import { userConverter, UserDetails } from "../models/UserModel";
import ResponseModel from "../models/ResponseModel";

export const logInWithEmail = async (email, password) => {
  try {
    const userData = await auth.signInWithEmailAndPassword(email, password);
    if (userData) {
      return new ResponseModel({ data: userData.user });
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

export const logInWithGoogle = async (email, password) => {
  try {
    const userData = await auth.signInWithPopup(googleProvider);
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

export const logInWithFacebook = async (email, password) => {
  try {
    const userData = await auth.signInWithPopup(facebookProvider);
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
      console.log(userData.user);
      return new ResponseModel({ data: userData.user });
    }
  } catch (e) {
    return new ResponseModel({ errors: e });
  }
};

export const logInWithGithub = async (email, password) => {
  try {
    const userData = await auth.signInWithPopup(githubProvider);
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

export const logOut = async (props) => {
  try {
    await auth.signOut();
  } catch (e) {
    console.log(e.message);
  }
};

export const currentUser = () => {
  return auth.currentUser();
};
