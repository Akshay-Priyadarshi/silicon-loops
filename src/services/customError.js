export default function customError(error) {
  switch (error.code) {
    case "auth/user-not-found":
      return "User with given credentials is not found";
    default:
      return error.message;
  }
}
