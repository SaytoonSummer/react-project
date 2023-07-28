//Archivo.tsx del Footer, nada muy importante.
import React from 'react';

export const Footer = () => {
  return (
    <footer className="page-footer" style={{ backgroundColor: '#3b271d' }}>
      <div className="container">
        <div className="row">
          <div className="col s12 m6 l3">
            <img src="/img/footer.png" alt="Logo de Newen Repu" className="responsive-img" style={{ marginTop: '10px', marginLeft: '-10px' }} />
          </div>
          <div className="col s12 m6 l3 offset-l6">
            <h5 className="white-text">Redes sociales</h5>
            <ul>
              <li>
                <a href="https://www.instagram.com/newenrepu_te_gourmet" className="white-text" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com/newenrepu" className="white-text" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=56920883198&text&type=phone_number&app_absent=0" className="white-text" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="container center">
            <div className="row">
              <div className="col s12">
                <p className="grey-text text-lighten-4">
                  Copyright © 2023 
                  <a href="#" className="white-text">Newen Repu</a> | Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};