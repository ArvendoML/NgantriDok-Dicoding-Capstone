const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "123123",
  },
];

const checkUser = (emailVal) => {
  const user = userData.filter((data) => data.email === emailVal);
  return user;
};

const getUserData = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  return user;
};

export { userData, checkUser, getUserData };
