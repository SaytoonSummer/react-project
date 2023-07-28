import React from 'react';

export const Catalog = () => {
  return (
    <section id="Catalogo">
      {/* Contenido de la sección 2 */}
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div className="card white lighten-5" style={{ borderRadius: '20px' }}>
              <div className="card-content center-align">
                <h2 style={{ fontSize: '48px', color: '#8d6e63', fontWeight: 'bold' }}>Catálogo</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col l4">
            <div className="card" style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '50px' }}>
              <div className="card-content center-align" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', color: '#1a1918' }}>
                <img className="responsive-img" src="/img/te1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col l4">
            <div className="card" style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '50px' }}>
              <div className="card-content center-align" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', color: '#1a1918' }}>
                <img className="responsive-img" src="/img/te2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col l4">
            <div className="card" style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '50px' }}>
              <div className="card-content center-align" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', color: '#1a1918' }}>
                <img className="responsive-img" src="/img/te3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card" style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '50px' }}>
            <div className="card-content center-align" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', color: '#1a1918' }}>
              <p>A exposición alguno de nuestros productos. Deleita nuestros sabores en una presentación simple y práctica, ideal para quienes disfrutan de tomar té a menudo. Formatos disponibles para toda la variedad de nuestras líneas Té Selección y Té Gourmet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};