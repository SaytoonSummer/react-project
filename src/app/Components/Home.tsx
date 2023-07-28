import React from 'react';

export const Home = () => {
  return (
    <>
      {/* Sección Main */}
      <section id="seccionmain">
        {/* Contenido de la sección main */}
        <div className="container">
          <div className="row">
            <div
              className="col s12"
              style={{
                backgroundImage: `url(/img/fondo.jpg)`,
                backgroundSize: "cover",
                height: "780px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  opacity: 0.8,
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  textAlign: "center",
                }}
              >
                <img
                  src="/img/fondo2.png"
                  alt="Newen Repü"
                  style={{ maxWidth: "20%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 1 */}
      <section className="background-section" id="Nosotros">
        {/* Contenido de la sección 1 */}
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
                    Nosotros
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
                  <p>
                    Newen Repü es una empresa dedicada a producir té de máxima
                    calidad a precios accesibles para todo público. Nuestra
                    producción tiene como base elaborar té y blends de forma
                    sustentable, ya que integramos un modelo de economía
                    circular, recolectando cáscaras y otros elementos vegetales
                    de colaboradores que en primera instancia desecharían
                    únicamente por no tener dónde utilizarlas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
