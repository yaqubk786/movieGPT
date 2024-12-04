export const CheckValid = (email, password, name, isSignIn) => {
  const isEmailValid =
    /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/.test(password);
  const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isSignIn && !isNameValid) return "Name is not valid";

  return null;
};
