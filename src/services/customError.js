export default function customError(error) {
  switch (error.code) {
    case "auth/user-not-found":
      return "User with given credentials was not found";
    case "auth/network-request-failed":
      return "You aren't connected to the internet, Sorry!";
    case "auth/account-exists-with-different-credential":
      return "An account already exists with same email address but different provider. Try different provider. Sorry!";
    default:
      return error.message;
  }
}
