import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import {useNavigate} from "react-router-dom";

function ListarEmpleados() {
  const [empleados, setEmpleados] = useState([]);

  const navigate=useNavigate();

 

  const consultarEmpleados = async () => {
    const consultar = await Axios.get("/empleado/getEmpleados");
    setEmpleados(consultar.data);
    console.log(consultar.data);
  };

  const deleteEmpleado=async(id)=>{
    if(window.confirm("¿Esta seguro de eliminar el dato?")){
     const eliminar= await Axios.delete(`/empleado/deleteEmpleado/${id}`);
     console.log("Se eliminó el dato", eliminar);
    }  
consultarEmpleados();
    
  }

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
                      <td><button type="button" class="btn btn-info" onClick={()=>navigate(`/fempleado/${empleado._id}`)}><i class="bi bi-pencil-fill"></i></button></td>
                      <td><button type="button" class="btn btn-danger" onClick={()=>deleteEmpleado(empleado._id)}><i class="bi bi-trash-fill"></i></button></td>
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
