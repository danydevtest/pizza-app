import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";

function ListarEmpleados() {
  const [empleados, setEmpleados] = useState([]);

  const consultarEmpleados = async () => {
    const consultar = await Axios.get("/empleado/getEmpleados");
    setEmpleados(consultar.data);
    console.log(consultar.data);
  };

  useEffect(() => {
    consultarEmpleados();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
          <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        {
            empleados.map((empleado,index)=>{
                return(
                    <tbody>
                    <tr>
                      <th scope="row">{index+1}</th>
                      <td>{empleado.nombre}</td>
                      <td>{empleado.correo}</td>
                      <td>{empleado.descripcion}</td>
                      <td><button type="button" class="btn btn-info"><i class="bi bi-pencil-fill"></i></button></td>
                      <td><button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                    
                  </tbody>
                )
            })
        }
        
       
      </table>
    </div>
  );
}

export default ListarEmpleados;
