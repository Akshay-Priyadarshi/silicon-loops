export function validateEmail(email) {
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return emailRegex.test(email);
}
export function validatePassword(password) {
  const passwordRegex = new RegExp(/^[a-zA-Z0-9-@_]{8,}$/);
  return passwordRegex.test(password.trim());
}

export function validateNotBlank(text) {
  return text.trim() === "" ? false : true;
}

export function validatePasswordMatch(password, cPassword) {
  return password.trim() === cPassword.trim() ? true : false;
}
