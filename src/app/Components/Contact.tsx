import React, { useState } from "react";
import { Client } from "../Interfaces/IForm"; 
import { registrarCliente } from "../Firebase/Promises";

export const Contact = () => {
  // Estados para almacenar los valores de los campos del formulario
  const [nombre, setNombre] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoEnvio, setTipoEnvio] = useState("");

   // Funciones para manejar los cambios en los campos del formulario
   const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Expresión regular para buscar dígitos numéricos
    const hasNumbers = /\d/.test(value);
  
    // Si el valor contiene dígitos numéricos, no lo actualizamos
    if (!hasNumbers) {
      setNombre(value);
    }
    else{
      alert("Este campo no puede contener números")
    }
  };
  
  const handleApellidoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Expresión regular para buscar dígitos numéricos
    const hasNumbers = /\d/.test(value);
  
    // Si el valor contiene dígitos numéricos, no lo actualizamos
    if (!hasNumbers) {
      setApellido(value);
    }
    else{
      alert("Este campo no puede contener números")
    }
  };

  const handleEdadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setEdad(value.toString());
    }
  };


  const handleFechaNacimientoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFechaNacimiento(event.target.value);
  };

  const handleTelefonoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const onlyNums = value.replace(/[^0-9]/g, ''); // Eliminar cualquier caracter que no sea número
    const validPhoneNumber = onlyNums.slice(0, 9); // Tomar solo los primeros 9 dígitos
  
    setTelefono(validPhoneNumber);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMensaje(event.target.value);
  };

  const handleTipoEnvioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTipoEnvio(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    if (nombre.trim() === "") {
      setErrorNombre("El campo Nombre no puede estar en blanco");
      alert("El campo Nombre no puede estar en blanco")
      return;
    } else {
      setErrorNombre("");
    }

    if (apellido.trim() === "") {
      alert("El campo Apellido no puede estar en blanco")
      return;
    }

    if (telefono.trim() === "") {
      alert("El campo de teléfono es obligatorio")
      return;
    }

    if (fechaNacimiento.trim() === "") {
      alert("El campo de fecha de nacimiento es obligatorio")
      return;
    }

    if (telefono.length !== 9) {
      alert("El número de teléfono debe tener 9 dígitos")
      return;
    }
  
    if (edad.trim() === "" || parseInt(edad) < 18) {
      alert("Por favor, ingrese una edad válida (mayor o igual a 18 años).");
      return;
    }
  
    if (!tipoEnvio) {
      alert("Por favor, seleccione un tipo de envío");
      return;
    }
  
    const clientData: Client = {
      nombre,
      apellido,
      edad: parseInt(edad),
      fechaNacimiento,
      telefono: parseInt(telefono),
      email,
      mensaje,
      tipoEnvio,
    };
    registrarCliente(clientData);
  
    alert("¡Formulario enviado con éxito!");
  };

// Componente de formulario de contacto. Regresa todo el formulario con los datos para que el usuario registre, y se guarden con un onChange. Se hizo uso especial de un checked para el radio.
  return (
    <section className="background-section" id="Contacto">
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div
              className="card white lighten-5"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-content center-align">
                <h2
                  style={{
                    fontSize: "48px",
                    color: "#8d6e63",
                    fontWeight: "bold",
                  }}
                >
                  Contacto
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div
              className="card"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "50px",
              }}
            >
              <div
                className="card-content center-align"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "24px",
                  color: "#1a1918",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        id="nombre"
                        type="text"
                        onChange={handleNombreChange}
                        value={nombre}
                        className="validate"
                      />
                      <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <input
                        id="apellido"
                        type="text"
                        onChange={handleApellidoChange}
                        value={apellido}
                        className="validate"
                      />
                      <label htmlFor="apellido">Apellido</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        id="edad"
                        type="number"
                        onChange={handleEdadChange}
                        value={edad}
                        className="validate"
                      />
                      <label htmlFor="edad">Edad</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        id="fechaNacimiento"
                        type="date"
                        onChange={handleFechaNacimientoChange}
                        value={fechaNacimiento}
                        className="validate"
                      />
                      <label htmlFor="fechaNacimiento">
                        Fecha de Nacimiento
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        id="telefono"
                        type="tel"
                        onChange={handleTelefonoChange}
                        value={telefono}
                        className="validate"
                      />
                      <label htmlFor="telefono">Teléfono</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <input
                        id="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                        className="validate"
                      />
                      <label htmlFor="email">Correo Electrónico</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="mensaje"
                        className="materialize-textarea"
                        onChange={handleMensajeChange}
                        value={mensaje}
                      ></textarea>
                      <label htmlFor="mensaje">Mensaje</label>
                    </div>
                  </div>
                  <div className="input-field">
                    <p>
                      <label>
                        <input
                          type="radio"
                          name="envio"
                          value="normal"
                          onChange={handleTipoEnvioChange}
                          checked={tipoEnvio === "normal"}
                        />
                        <span>Envío normal</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input
                          type="radio"
                          name="envio"
                          value="express"
                          onChange={handleTipoEnvioChange}
                          checked={tipoEnvio === "express"}
                        />
                        <span>Envío express</span>
                      </label>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col s12 center-align">
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
