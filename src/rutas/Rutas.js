import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contactos from "../pages/Contactos";
import FormEmpleados from "../componentes/formularios/FormEmpleados";
import FormProductos from "../componentes/formularios/productos/FormProductos";
import ListarEmpleados from "../componentes/formularios/ListarEmpleados";
import NotFound from "../pages/NotFound";
//Layout
import Layout from "../layout/Layout";


function Rutas() {
  return (
    <>
    <Layout>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/contactos" element={<Contactos/>}/>
        <Route path="/fempleado" element={<FormEmpleados/>}/>
        <Route path="/fempleado/:id" element={<FormEmpleados/>}/>
        <Route path="/fproducto" element={<FormProductos/>}/>
        <Route path="/listarem" element={<ListarEmpleados/>}/>
        <Route path="*" element={<NotFound/>}/>       
      </Routes>
      </Layout>
    </>
  );
}

export default Rutas;
