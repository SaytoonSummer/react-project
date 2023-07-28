//Archivo.tsx correspondiente al nav de la página. En este se hace uso especial de los Link, para dirrecionarnos a la ruta especificada
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="nav-wrapper" style={{ backgroundColor: '#C0803A', height: '80px', zIndex: 9999, width: '100%', position: 'fixed' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="logo-text" style={{ backgroundColor: '#ffffff', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0, width: '30%' }}>
            <img src="https://img.icons8.com/ios-filled/50/000000/tea.png" style={{ width: '30px', marginRight: '10px', position: 'relative', zIndex: 1 }} alt="logo" />
            <h5 style={{ fontFamily: 'Montserrat', fontSize: '36px', margin: 0 }}>
              <span style={{ color: '#5B5B5B' }}>Newen</span><span style={{ color: '#eaa45a' }}>repü</span>
            </h5>
          </div>
        </div>
        <div className="nav-items" style={{ display: 'flex', alignItems: 'center' }}>
          <ul>
            <li><Link to="home" className="smooth-scroll" style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }}>Home</Link></li>
            <li><Link to="catalog" className="smooth-scroll" style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }}>Catálogo</Link></li>
            <li><Link to="contact" className="smooth-scroll" style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }}>Contacto</Link></li>
            <li><Link to="client" className="smooth-scroll" style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }}>Clientes</Link></li>
            <li><Link to="video" className="smooth-scroll" style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }}>Vídeo</Link></li>
            <li><Link to="users" className="smooth-scroll" style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }}>Usuarios</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};