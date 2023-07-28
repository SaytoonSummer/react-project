import React from 'react';

export const Video = () => {
  return (
    <section className="background-section" id="Video">
      {/* Contenido de la sección 5 */}
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div className="card white lighten-5" style={{ borderRadius: '20px' }}>
              <div className="card-content center-align">
                <h2 style={{ fontSize: '48px', color: '#8d6e63', fontWeight: 'bold' }}>Vídeo</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card" style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '50px', overflow: 'hidden' }}>
              <div className="card-content center-align" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '18px', color: '#1a1918' }}>
                <h4>En este apartado, se mostrará a una de nuestras colaboradoras hablando sobre la exposición que se hizo en una anterior feria sobre nuestros productos</h4>
              </div>
              <div className="responsive-video card-content center-align">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/UJUF8tQXkLM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

