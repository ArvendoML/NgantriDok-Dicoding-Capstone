import { getOneHospital } from "./hospitalListData";

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "123123",
    role: "member",
    hospital_id: null,
  },
  {
    id: 2,
    name: "Owner Example",
    email: "owner@example.com",
    password: "123123",
    role: "owner",
    hospital_id: 1,
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

const getUserHospitalData = () => {
  const user = getUserData();
  const hospitalData = getOneHospital(user.hospital_id);
  
  return hospitalData;
};

export { userData, checkUser, getUserData, getUserHospitalData };
