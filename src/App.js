import React, { useReducer, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import TodoReducer from "./components/TodoReducer";
import useForm from "./hooks/useForm";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

  const { values, handleInputChange, rest } = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const { description } = values;

  const handleDelete = (e, todoId) => {
    e.preventDefault();

    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.description.length < 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    rest();
    // document.querySelector("#formulario").reset();
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "update",
      payload: todoId,
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">
        Lista de tareas: ( <span className="contador">{todos.length}</span> )
      </h1>
      <div className="line-mf "></div>
      <div className="row">
        <Formulario
          handleSubmit={handleSubmit}
          description={description}
          handleInputChange={handleInputChange}
        />
        <div className="col-lg-7 col-md-12 col-sm-12">
          <Lista
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
