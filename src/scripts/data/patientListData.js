import { changeOneHospitalCurrQueue } from "./hospitalListData";

let patientList = [
  {
    id: 1,
    hospital_id: 1,
    user_id: 1,
    queue: 1,
    name: "Jonathan",
    age: 22,
    phoneNumber: "081234765634",
    symptom: "Demam dan sakit kepala",
  },
  {
    id: 2,
    hospital_id: 1,
    user_id: 3,
    queue: 2,
    name: "Jerry",
    age: 20,
    phoneNumber: "081231235123",
    symptom: "Batuk dan pilek",
  },
  {
    id: 3,
    hospital_id: 1,
    user_id: 4,
    queue: 3,
    name: "Luci",
    age: 21,
    phoneNumber: "081245573462",
    symptom: "Sakit maag",
  },
  {
    id: 4,
    hospital_id: 1,
    user_id: 5,
    queue: 4,
    name: "Mario",
    age: 16,
    phoneNumber: "081245573462",
    symptom: "Batuk dan pilek",
  },
  {
    id: 5,
    hospital_id: 2,
    user_id: 6,
    queue: 1,
    name: "Ales",
    age: 27,
    phoneNumber: "081234765634",
    symptom: "Demam dan sakit kepala",
  },
  {
    id: 6,
    hospital_id: 2,
    user_id: 7,
    queue: 2,
    name: "Brodin",
    age: 29,
    phoneNumber: "081231235123",
    symptom: "Batuk dan pilek",
  },
  {
    id: 7,
    hospital_id: 3,
    user_id: 8,
    queue: 1,
    name: "Lucas",
    age: 20,
    phoneNumber: "081245573462",
    symptom: "Sakit maag",
  },
  {
    id: 8,
    hospital_id: 4,
    user_id: 9,
    queue: 1,
    name: "Maria",
    age: 22,
    phoneNumber: "081245573462",
    symptom: "Batuk dan pilek",
  },
];

const getHospitalPatientList = (hospital_id) => {
  const patientListData = patientList.filter((patient) => patient.hospital_id === hospital_id);

  return patientListData;
};

const getHospitalPatientLength = (hospital_id) => {
  const patientListData = patientList.filter(
    (patient) => patient.hospital_id === parseInt(hospital_id)
  );

  return patientListData.length;
};

const getHospitalPatientDetail = (user_id) => {
  const patientData = patientList.filter((patient) => patient.user_id === user_id);

  return patientData[0];
};

const getHospitalFirstPatientQueue = (hospital_id) => {
  const firstPatientQueue = patientList.find(
    (patient) => patient.hospital_id === parseInt(hospital_id)
  );

  let result;
  if (firstPatientQueue) {
    result = firstPatientQueue.queue;
  } else {
    return;
  }

  return result;
};

const cancelHospitalPatient = (user_id, hospital_id) => {
  const patientListData = patientList.filter((patient) => patient.user_id !== user_id);
  patientList = patientListData;

  changeOneHospitalCurrQueue(hospital_id);
};

const deleteHospitalPatient = (user_id, hospital_id) => {
  cancelHospitalPatient(user_id, hospital_id);
  const hospitalPatientList = patientList.filter((patient) => patient.hospital_id === hospital_id);

  return hospitalPatientList;
};

const addNewPatient = (hospital_id, user_id, name, age, phoneNumber, symptom) => {
  hospital_id = parseInt(hospital_id);
  const queueList = getHospitalPatientList(hospital_id);

  let queue = 0;

  if (queueList.length === 0) {
    queue = 1;
  } else {
    for (let i = 0; i < queueList.length; i++) {
      if (queue < queueList[i].queue) {
        queue = queueList[i].queue;
      }
    }
  }

  const patient = {
    id: +new Date(),
    hospital_id,
    user_id,
    queue: queue + 1,
    name,
    age,
    phoneNumber,
    symptom,
  };

  patientList = [...patientList, patient];

  changeOneHospitalCurrQueue(hospital_id);
};

export {
  getHospitalPatientList,
  getHospitalPatientLength,
  deleteHospitalPatient,
  getHospitalPatientDetail,
  cancelHospitalPatient,
  addNewPatient,
  getHospitalFirstPatientQueue,
};
