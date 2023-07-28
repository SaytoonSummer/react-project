import React from 'react';

export const Client = () => {
  return (
    <section id="Clientes">
      {/* Contenido de la sección 4 */}
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div className="card white lighten-5" style={{ borderRadius: '20px' }}>
              <div className="card-content center-align">
                <h2 style={{ fontSize: '48px', color: '#8d6e63', fontWeight: 'bold' }}>Clientes</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card" style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '50px' }}>
              <div className="card-content center-align" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', color: '#1a1918' }}>
                ¿Quieres tomar un té antes de trabajar? ¿Pasaste al supermercado y buscas buen té? Búscanos en los locales de nuestros clientes asociados. Newen Repü presente en todos lados. A continuación uno de nuestros locales:
                <br /><br />
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe title="Ubicación de Clientes" width={800} height={400} id="gmap_canvas" src="https://maps.google.com/maps?q=Av.%20Nueva%20Providencia%202214,%20Providencia,%20Santiago,%20Regi%C3%B3n%20Metropolitana&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};