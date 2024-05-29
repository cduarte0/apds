import React from 'react'

export default function ActivityTableRows({activity, i}) {
  return (
    <tr className="items-center justify-center border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4">{i}</td>
      <td className="whitespace-nowrap px-6 py-4">{activity?.description_activity}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {activity.local_activity}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        {activity?.project_id}
      </td>
      {/* <td className="whitespace-nowrap  px-6 py-4">
        <FontAwesomeIcon icon={faEye} className="w-5 text-gray-700" />
        <FontAwesomeIcon
          onClick={"users/create/id"}
          icon={faEdit}
          className="w-5 text-green-500"
        />
        <Link href={"/users/"+user.id}><FontAwesomeIcon icon={faTrash} className="w-5 text-red-500" /></Link>
      </td> */}
    </tr>
  );
}