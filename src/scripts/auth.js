import { checkUser } from "./userData";

const login = async (emailVal, passwordVal) => {
  const user = await checkUser(emailVal)[0];
  let result = false;

  if (user.length !== 0) {
    if (user.password === passwordVal) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
      result = true;
    }
  }

  return result;
};

const logout = () => {
  localStorage.removeItem("loggedUser");
};

export { login, logout };
