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

export const signUpWithEmail = async (name, email, password) => {
  try {
    const userData = await auth.createUserWithEmailAndPassword(email, password);
    if (userData) {
      await userData.user.updateProfile({ displayName: name });
      await createUserInDB(userData.user);
      return new ResponseModel({ data: userData.user });
    }
  } catch (e) {
    return new ResponseModel({ errors: e });
  }
};

export const logInWithGoogle = async () => {
  try {
    const userData = await auth.signInWithPopup(googleProvider);
    if (userData) {
      await createUserInDB(userData.user);
      return new ResponseModel({ data: userData.user });
    }
  } catch (e) {
    return new ResponseModel({ errors: e });
  }
};

export const logInWithFacebook = async () => {
  try {
    const userData = await auth.signInWithPopup(facebookProvider);
    console.log(userData.user);
    if (userData) {
      await createUserInDB(userData.user);
      return new ResponseModel({ data: userData.user });
    }
  } catch (e) {
    return new ResponseModel({ errors: e });
  }
};

export const logInWithGithub = async () => {
  try {
    const userData = await auth.signInWithPopup(githubProvider);
    if (userData) {
      await createUserInDB(userData.user);
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
  const cu = auth.currentUser;
  return cu;
};

const createUserInDB = async (user) => {
  console.log(user);
  db.collection("users")
    .doc(user.uid)
    .get()
    .then(async (snapshot) => {
      if (snapshot.exists) {
        return;
      } else {
        await db
          .collection("users")
          .doc(user.uid)
          .withConverter(userConverter)
          .set(
            new UserDetails({
              userEmail: user.email,
              emailVerified: user.emailVerified,
              userName: user.displayName,
              userDPURL: user.photoURL ? user.photoURL : "",
            })
          );
      }
    });
};
