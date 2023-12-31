import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Client } from '../Interfaces/IForm';
import { obtenerClientes, actualizarCliente } from '../Firebase/Promises';

export const Update = () => {
  // Obtenemos el parámetro de la URL para identificar al usuario a actualizar
  const { id } = useParams<{ id: string }>();
  // Definimos los estados locales para los campos del formulario y el usuario a actualizar
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoEnvio, setTipoEnvio] = useState("");
  const [usuario, setUsuario] = useState<Client | null>(null);

  // Al cargar el componente, buscamos al usuario con el ID proporcionad
  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const clientes = await obtenerClientes();
        const usuarioEncontrado = clientes.find((u) => u.idCliente === id);
        // Si encontramos al usuario, actualizamos los estados locales con sus datos
        if (usuarioEncontrado) {
          setUsuario(usuarioEncontrado);
          setNombre(usuarioEncontrado.nombre);
          setApellido(usuarioEncontrado.apellido);
          setEdad(usuarioEncontrado.edad.toString());
          setFechaNacimiento(usuarioEncontrado.fechaNacimiento);
          setTelefono(usuarioEncontrado.telefono.toString());
          setEmail(usuarioEncontrado.email);
          setMensaje(usuarioEncontrado.mensaje);
          setTipoEnvio(usuarioEncontrado.tipoEnvio);
        }
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    fetchUsuario();
  }, [id]);

  // Función para manejar la actualización del usuario en la base de datos
  const handleActualizar = async () => {
    try {
      if (usuario && usuario.idCliente) {
        // Creamos un objeto con los datos actualizados
        const updatedUsuario: Client = {
          ...usuario,
          nombre,
          apellido,
          edad: parseInt(edad),
          fechaNacimiento,
          telefono: parseInt(telefono),
          email,
          mensaje,
          tipoEnvio,
        };

        // Llamamos a la función que actualiza al usuario en la base de datos
        await actualizarCliente(usuario.idCliente, updatedUsuario);
        alert("¡Usuario actualizado con éxito!");
      } else {
        alert("No se encontró el usuario para actualizar.");
      }
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      alert("Hubo un error al actualizar el usuario. Por favor, inténtalo de nuevo.");
    }
  };

  // Si no se ha encontrado el usuario aún, mostramos un mensaje de carga
  if (!usuario) {
    return <div>Cargando...</div>;
  }
  
  // Renderizamos el formulario de actualización con los datos del usuario
  return (
    <section className="background-section" id="Contacto">
      <div className="container">
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
                <h2>Actualizar Usuario</h2>
                <form>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="validate"
                      />
                      <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <input
                        id="apellido"
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
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
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
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
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                        className="validate"
                      />
                      <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        id="telefono"
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        className="validate"
                      />
                      <label htmlFor="telefono">Teléfono</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
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
                          checked={tipoEnvio === "normal"}
                          onChange={() => setTipoEnvio("normal")}
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
                          checked={tipoEnvio === "express"}
                          onChange={() => setTipoEnvio("express")}
                        />
                        <span>Envío express</span>
                      </label>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col s12 center-align">
                      <button
                        className="btn waves-effect waves-light"
                        type="button"
                        name="action"
                        onClick={handleActualizar}
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