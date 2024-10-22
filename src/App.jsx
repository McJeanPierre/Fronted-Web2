import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Login from './Login';
import Registro from './Registro';
import PanelCliente from './PanelCliente';
import { AuthProvider } from './AuthContext'; // Importamos el AuthProvider

export default function App() {
  return (
    <AuthProvider> {/* Envolvemos la aplicación con AuthProvider */}
      <Router>
        <div className="app">
          <Navbar /> {/* El Navbar ahora se actualiza al cambiar el estado de autenticación */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/panel-cliente" element={<PanelCliente />} />
            {/* Puedes agregar más rutas según sea necesario */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
