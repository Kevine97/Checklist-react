import React from "react";

const Formulario = ({handleSubmit, description , handleInputChange }) => {
  return (
    <div className="col-lg-5 col-md-12 col-sm-12 mx-auto">
      <h4 className="text-center">Agregar</h4>
      <form id="formulario" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Agregue su tarea"
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <div className="d-grid gap-2 mt-3 mb-5">
          <button type="submit" className=" btn btn-primary btn-block">
            Nueva tarea
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
