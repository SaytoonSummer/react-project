import React, { useState, useEffect } from "react";
import { Client } from "../Interfaces/IForm";
import { obtenerClientes } from "../Firebase/Promises";
import { Link } from "react-router-dom";

export const Users = () => {
  const [usuarios, setUsuarios] = useState<Client[]>([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const clientes = await obtenerClientes();
        setUsuarios(clientes);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <section className="background-section" id="Video">
      {/* Contenido de la sección 5 */}
      <div className="container">
        <div className="row">
          <div className="col s12 m10 offset-m1">
            <div
              className="card"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "20px",
                overflow: "hidden",
              }}
            >
              <div
                className="card-content center-align"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "18px",
                  color: "#1a1918",
                }}
              >
                <h2>Usuarios Registrados</h2>
                <table className="striped">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Edad</th>
                      <th>Fecha Nacimiento</th>
                      <th>Teléfono</th>
                      <th>Email</th>
                      <th>Mensaje</th>
                      <th>Tipo de Envío</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios.map((usuario, index) => (
                      <tr key={index}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.edad}</td>
                        <td>{usuario.fechaNacimiento}</td>
                        <td>{usuario.telefono}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.mensaje}</td>
                        <td>{usuario.tipoEnvio}</td>
                        <td>
                          <Link to={`/actualizar/${usuario.idCliente}`}>
                            <button>Actualizar</button>
                          </Link>
                          <Link to={`/eliminar/${usuario.idCliente}`}>
                            <button>Eliminar</button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};
