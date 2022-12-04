const hospitalList = [
  {
    id: 1,
    name: "Rumah Sakit Rustic",
    totalQueue: 5,
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
    totalQueue: 1,
    currQueue: 2,
    phoneNumber: "08112345678",
    city: "Jakarta",
    address: "Jalan Jalan Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor dicta reprehenderit ullam, commodi adipisci accusantium.",
  },
  {
    id: 3,
    name: "Rumah Sakit Plastik",
    totalQueue: 5,
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
    totalQueue: 5,
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

export { getAllHospitalList, getOneHospital };
