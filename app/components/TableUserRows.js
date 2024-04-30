import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TableUserRow({ user, i }) {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4">{i}</td>
      <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {user.role}
      </td>
      <td className="whitespace-nowrap  px-6 py-4">
        <FontAwesomeIcon icon={faEye} className="w-5 text-gray-700" />
        <FontAwesomeIcon
          onClick={"users/create/_id"}
          icon={faEdit}
          className="w-5 text-green-500"
        />
        <FontAwesomeIcon icon={faTrash} className="w-5 text-red-500" />
      </td>
    </tr>
  );
}
