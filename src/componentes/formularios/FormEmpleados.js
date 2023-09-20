import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";

function FormEmpleados() {

  const initialState = {
    nombre: "",
    correo: "",
    descripcion: "",
  };

  const [values, setValues] = useState(initialState);

  const obtenerValue = (e) => {
    const {name, value} = e.target;
    setValues({ ...values, [name]: value });
  };

  const GuardarEmpleado=async()=>{
   
    const guardar= await Axios.post('/empleado/addEmpleado',values);
    console.log(guardar);

  }

  const Enviar = (e) => {
    e.preventDefault();
    GuardarEmpleado();
  };

  return (
    
      <div class="card">
        <div class="card-header">Registro de empleados</div>
        <div class="card-body">
          <form class="row g-3" onSubmit={Enviar}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Nombre completo"
                name="nombre"
                value={values.nombre}              
                onChange={obtenerValue}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Dirección de correo
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="correo"
                value={values.correo}
                onChange={obtenerValue}
              />
            </div>
            <div class="input-group">
              <span class="input-group-text">With textarea</span>
              <textarea
                class="form-control"
                aria-label="With textarea"
                name="descripcion"
                value={values.descripcion}
                onChange={obtenerValue}
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary" >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    
  );
}

export default FormEmpleados;
