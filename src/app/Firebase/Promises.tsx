//Funciones involucradas con el manejo de datos hacía Firebase
import { Client } from "../Interfaces/IForm";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./FirebaseApp";

// Función para registrar un nuevo cliente en Firebase
export const registrarCliente = async (p: Client) => {
  //Si todo sale bien, el documento se ingresa a la colección "clientes" de Firebase
  const docRef = await addDoc(collection(db, "clientes"), p);
};

// Función para obtener todos los clientes almacenados en Firebase
export const obtenerClientes = async () => {
  const querySnapshot = await getDocs(collection(db, "clientes"));
  console.log(querySnapshot);
  var clientes: Client[] = [];
  // Recorremos cada documento para construir un array de objetos "Client" con los datos de los clientes
  querySnapshot.forEach((d) => {
    console.log(d.id);
    console.log(d.data());
    var p: Client = {
      nombre: d.data().nombre,
      apellido: d.data().apellido,
      edad: parseInt(d.data().edad),
      fechaNacimiento: d.data().fechaNacimiento, 
      telefono: parseInt(d.data().telefono), 
      email: d.data().email,
      mensaje: d.data().mensaje,
      tipoEnvio: d.data().tipoEnvio,
      idCliente: d.id,
    };
    clientes.push(p);
  });
  return clientes;
};

// Función para actualizar la información de un cliente en Firebase
export const actualizarCliente = async(idCliente:string,p:Client)=>{
  // Obtenemos una referencia al documento del cliente que queremos actualizar
  const docRef = doc(db, "clientes", idCliente);
  // Actualizamos el documento con los nuevos valores del cliente "p"
  await updateDoc(docRef, {...p});
}

// Función para eliminar un cliente de la colección en Firebase
export const eliminarCliente = async(idCliente:string)=>{
  // Obtenemos una referencia al documento del cliente que queremos eliminar
  await deleteDoc(doc(db, "clientes", idCliente));
}
