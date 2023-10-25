import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { useParams, useNavigate } from "react-router-dom";

function FormEmpleados() {
  const initialState = {
    _id: "",
    nombre: "",
    correo: "",
    descripcion: "",
  };

  const [values, setValues] = useState(initialState);
  const [datos, setDatos] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const obtenerValue = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const GuardarEmpleado = async () => {
    const formularioEmpleado = document.getElementById("form-empleado");
    const formData = new FormData(formularioEmpleado);

    await Axios.post("/empleado/addEmpleado", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(() => {
      console.log("Datos guardados");
    });
  };

  const obtnerEmpleado = async (id) => {
    const buscar = await Axios.get(`/empleado/getEmpleado/` + id);
    setValues(buscar.data);
    //console.log(buscar.data);
  };

  /*const updateEmpleado=async()=>{
  await Axios.patch(`/empleado/updateEmpleado/${params.id}`,values).then(
    ()=>{
      console.log("Datos actualizados correctamente");
    }
  )
navigate("/listarem")
 }*/

  const Enviar = (e) => {
    e.preventDefault();
    GuardarEmpleado();
  };

  useEffect(() => {
    //obtnerEmpleado(params.id);
  }, []);

  return (
    <div class="card">
      <div class="card-header">Registro de empleados</div>
      <div class="card-body">
        <form
          class="row g-3"
          onSubmit={Enviar}
          id="form-empleado"
          encType="multipart/form-data"
        >
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
          <div class="input-group">
            <input
              type="file"
              class="form-control"
              id="image"
              name="image"
              onChange={obtenerValue}
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="inputGroupFileAddon04"
            >
              Button
            </button>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              {values._id === "" ? "Guardar" : "Actualizar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEmpleados;
