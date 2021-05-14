import React from "react";
import Li from "./Li";

const Lista = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush ">
      {todos.length === 0 ? (
        <h4 className="text-center">No tiene tarea en su lista</h4>
      ) : (
        todos.map((todo, index) => (
          <Li
            todo={todo}
            index={index}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))
      )}
    </ul>
  );
};

export default Lista;
