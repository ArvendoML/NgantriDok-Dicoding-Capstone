import dummyImg from "../../public/images/rumah-sakit.png";
import { getHospitalFirstPatientQueue } from "./patientListData";
import { addNewUserOwner } from "./userData";

let hospitalList = [
  {
    id: 1,
    image_url: `${dummyImg}`,
    name: "Rumah Sakit Rustic",
    currQueue: 1,
    phoneNumber: "08112345678",
    city: "Jakarta",
    address: "Jalan Jalan Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor dicta reprehenderit ullam, commodi adipisci accusantium.",
  },
  {
    id: 2,
    name: "Rumah Sakit Lorem",
    image_url: `${dummyImg}`,
    currQueue: 1,
    phoneNumber: "08112345678",
    city: "Jakarta",
    address: "Jalan Jalan Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor dicta reprehenderit ullam, commodi adipisci accusantium.",
  },
  {
    id: 3,
    name: "Rumah Sakit Plastik",
    image_url: `${dummyImg}`,
    currQueue: 1,
    phoneNumber: "08112345678",
    city: "Jakarta",
    address: "Jalan Jalan Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor dicta reprehenderit ullam, commodi adipisci accusantium.",
  },
  {
    id: 4,
    name: "Rumah Sakit Kakiku",
    image_url: `${dummyImg}`,
    currQueue: 1,
    phoneNumber: "08112345678",
    city: "Jakarta",
    address: "Jalan Jalan Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor dicta reprehenderit ullam, commodi adipisci accusantium.",
  },
];

const getAllHospitalList = () => {
  return hospitalList;
};

const getOneHospital = (id) => {
  const hospital = hospitalList.filter((data) => data.id === parseInt(id));

  return hospital[0];
};

const addNewHospital = (name, email, password, phoneNumber, city, address, description) => {
  const hospital = {
    id: +new Date(),
    name,
    image_url: `${dummyImg}`,
    currQueue: 0,
    phoneNumber,
    city,
    address,
    description,
  };

  addNewUserOwner(name, email, password, hospital.id);

  hospitalList = [...hospitalList, hospital];
};

const changeOneHospitalCurrQueue = (hospital_id) => {
  const hospitalIdx = hospitalList.findIndex((hospital) => hospital.id === hospital_id);
  let trueQueue = getHospitalFirstPatientQueue(hospital_id);
  if (!trueQueue) {
    trueQueue = 0;
  }

  hospitalList[hospitalIdx].currQueue = trueQueue;
};

export { getAllHospitalList, getOneHospital, addNewHospital, changeOneHospitalCurrQueue };
