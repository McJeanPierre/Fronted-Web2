import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Utensils } from 'lucide-react';
import { AuthContext } from './AuthContext'; // Importa el contexto
import './Navbar.css';

export default function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <Utensils size={24} color="#0056b3" />
          <span className="logo-text">ReservaFácil</span>
        </div>
        <nav>
          {!isAuthenticated && (
            <ul className="nav-list">
              <li><Link to="/" className="nav-link">Inicio</Link></li>
              <li><Link to="/como-funciona" className="nav-link">Cómo funciona</Link></li>
              <li><Link to="/restaurantes" className="nav-link">Restaurantes</Link></li>
              <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
            </ul>
          )}
        </nav>
        <div className="auth-buttons">
          {isAuthenticated ? (
            <>
              <Link to="/panel-cliente" className="button button-primary">Panel Cliente</Link>
              <button onClick={handleLogout} className="button button-outline">Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link to="/login" className="button button-outline">Iniciar sesión</Link>
              <Link to="/registro" className="button button-primary">Registrarse</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
