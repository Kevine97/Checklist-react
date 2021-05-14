import React from "react";

const Li = ({ todo, index, handleToggle, handleDelete }) => {
  return (
    <li key={todo.id} className="list-group-item flex-todos">
      <p
        className={todo.done ? "complete" : "parrafo-pointers"}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {""} {todo.description}
      </p>
      <button
        className="badge badge-secondary"
        onClick={(e) => handleDelete(e, todo.id)}
      >
        Borrar{" "}
      </button>
    </li>
  );
};

export default Li;
