import React from "react";

const Todo = ({id, title, description, mongoId, complete, deleteTodo, completeTodo }) => {  return (
   
      <tr className="bg-white border-b ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
         {id + 1}
        </th>
        
        <td className={`px-6 py-4 ${complete ? "line-through": ""}`}>{title}</td>
        <td className={`px-6 py-4 ${complete ? "line-through": ""}`}>{description}</td>
        <td className={`px-6 py-4 ${complete ? "line-through": ""}`}>{complete ? "Completed" : "Pending"}</td>
        <td className="px-6 py-4 flex gap-1">
        <button onClick={() =>{deleteTodo(mongoId)}} className="bg-red-500 text-white px-4 py-2 ">
            Delete
          </button>
          <button onClick={()=>{completeTodo(mongoId)}} className={`bg-green-500 text-white px-4 py-2 ${complete ? "hidden" : ""}`}>
            Done
          </button>
          
          </td>

      </tr>
   
  );
};

export default Todo;
