import * as Yup from "yup";

export function initialValues(){
   return{
    nombre:"",
    precio:"",
    descripcion:""
   }
}

export function validationSchema(){
    return Yup.object({
        nombre: Yup.string().required(true),
        precio: Yup.number().required(true),
        descripcion: Yup.string().required(true)
        
    })
}