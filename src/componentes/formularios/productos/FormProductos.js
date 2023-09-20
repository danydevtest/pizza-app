import React from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./FormProductos.form";

function FormProductos() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <div class="card">
      <div class="card-header">Registro de productos</div>
      <div class="card-body">
        <form class="row g-3 needs-validation" onSubmit={formik.handleSubmit}>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              nombre
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
              error={formik.errors.nombre}
            />
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">
              Precio
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              name="precio"
              onChange={formik.handleChange}
              value={formik.values.precio}
              error={formik.errors.precio}
            />
          </div>

          <div class="col-md-4">
            <span class="input-group-text">Descripcion</span>
            <textarea
              class="form-control"
              aria-label="With textarea"
              name="descripcion"
              onChange={formik.handleChange}
              value={formik.values.descripcion}
              error={formik.errors.descripcion}
            ></textarea>
          </div>

          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProductos;
