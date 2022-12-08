import React from "react";
import { BsCheckLg, BsTrashFill } from "react-icons/bs";

const OwnerPagePatientList = ({
  handleDeletePatient,
  user_id,
  hospital_id,
  queue,
  name,
  age,
  phoneNumber,
  symptom,
}) => {
  return (
    <tr>
      <td className="align-middle">{queue}</td>
      <td className="align-middle">{name}</td>
      <td className="align-middle text-center">{age}</td>
      <td className="align-middle">{phoneNumber}</td>
      <td className="align-middle">{symptom}</td>
      <td className="align-middle owner-table-col-action">
        <button
          type="button"
          onClick={() => handleDeletePatient(user_id, hospital_id)}
          className="btn btn-success btn-patient-finish"
        >
          <BsCheckLg />
        </button>
        <button
          type="button"
          onClick={() => handleDeletePatient(user_id, hospital_id)}
          className="btn btn-danger btn-patient-delete"
        >
          <BsTrashFill />
        </button>
      </td>
    </tr>
  );
};

export default OwnerPagePatientList;
