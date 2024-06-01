import React from "react";

const Todo = () => {
  return (
   
      <tr className="bg-white border-b ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
         1
        </th>
        <td className="px-6 py-4">Learn</td>
        <td className="px-6 py-4">Learn Next Js</td>
        <td className="px-6 py-4">Pending</td>
        <td className="px-6 py-4 flex gap-1">
          <button className="bg-green-500 text-white px-4 py-2">
            Done
          </button>
          <button className="bg-red-500 text-white px-4 py-2 ">
            Delete
          </button>
          </td>

      </tr>
   
  );
};

export default Todo;
