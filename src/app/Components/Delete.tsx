import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Client } from '../Interfaces/IForm';
import { obtenerClientes, eliminarCliente } from '../Firebase/Promises';

export const Delete = () => {
  // Obtenemos el parámetro de la URL para identificar al usuario a eliminar
  const { id } = useParams<{ id: string }>();
  // Definimos el estado local para almacenar la información del usuario
  const [usuario, setUsuario] = useState<Client | null>(null);

  // Al cargar el componente, buscamos al usuario con el ID proporcionado
  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const clientes = await obtenerClientes();
        const usuarioEncontrado = clientes.find((u) => u.idCliente === id);
        setUsuario(usuarioEncontrado || null);
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUsuario();
  }, [id]);

  // Función para manejar la eliminación del usuario en la base de datos
  const handleEliminar = async () => {
    try {
      if (usuario && usuario.idCliente) {
        // Llamamos a la función que elimina al usuario de la base de datos
        await eliminarCliente(usuario.idCliente);
        alert('¡Usuario eliminado con éxito!');
      } else {
        alert('No se encontró el usuario para eliminar.');
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      alert('Hubo un error al eliminar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  if (!usuario) {
    return <div>Cargando...</div>;
  }
  
  // Renderizamos el formulario de eliminación con los datos del usuario
  return (
    <section className="background-section" id="Contacto">
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div
              className="card"
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                padding: '50px',
              }}
            >
              <div
                className="card-content center-align"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '24px',
                  color: '#1a1918',
                }}
              >
                <h2>Eliminar Usuario</h2>
                <form>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        id="nombre"
                        type="text"
                        value={usuario.nombre}
                        readOnly
                      />
                      <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <input
                        id="apellido"
                        type="text"
                        value={usuario.apellido}
                        readOnly
                      />
                      <label htmlFor="apellido">Apellido</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        id="edad"
                        type="number"
                        value={usuario.edad}
                        readOnly
                      />
                      <label htmlFor="edad">Edad</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        id="fechaNacimiento"
                        type="date"
                        value={usuario.fechaNacimiento}
                        readOnly
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
                        value={usuario.telefono}
                        readOnly
                      />
                      <label htmlFor="telefono">Teléfono</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <input
                        id="email"
                        type="email"
                        value={usuario.email}
                        readOnly
                      />
                      <label htmlFor="email">Correo Electrónico</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="mensaje"
                        className="materialize-textarea"
                        value={usuario.mensaje}
                        readOnly
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
                          checked={usuario.tipoEnvio === 'normal'}
                          readOnly
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
                          checked={usuario.tipoEnvio === 'express'}
                          readOnly
                        />
                        <span>Envío express</span>
                      </label>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col s12 center-align">
                      <button
                        className="btn waves-effect waves-light red"
                        type="button"
                        name="action"
                        onClick={handleEliminar}
                      >
                        Eliminar
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