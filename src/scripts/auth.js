import { checkUser } from "./data/userData";

const login = async (emailVal, passwordVal) => {
  let result = false;
  const user = (await checkUser(emailVal)[0]) || [];

  if (user) {
    if (user.password === passwordVal.toString()) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
      result = true;
    }
  } else {
    alert("Akun belum terdaftar!");
  }

  return result;
};

const logout = () => {
  localStorage.removeItem("loggedUser");
};

export { login, logout };
