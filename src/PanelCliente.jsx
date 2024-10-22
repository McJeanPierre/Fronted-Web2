import React, { useState } from 'react';
import { Edit, Save, Plus, Minus } from 'lucide-react';
import './PanelCliente.css';

const GRID_SIZE = 10;
const CELL_SIZE = 40;

export default function RestaurantDashboard() {
  const [restaurantName, setRestaurantName] = useState('Mi Restaurante');
  const [tables, setTables] = useState([
    { id: 1, name: 'Mesa 1', capacity: 3, x: 1, y: 1 },
    { id: 2, name: 'Mesa 2', capacity: 2, x: 5, y: 3 },
    { id: 3, name: 'Mesa 3', capacity: 6, x: 8, y: 7 },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  const handleAddTable = () => {
    const newTable = {
      id: tables.length + 1,
      name: `Mesa ${tables.length + 1}`,
      capacity: 2,
      x: 0,
      y: 0,
    };
    setTables([...tables, newTable]);
  };

  const handleRemoveTable = (id) => {
    setTables(tables.filter(table => table.id !== id));
  };

  const handleChangeCapacity = (id, increment) => {
    setTables(tables.map(table => 
      table.id === id ? { ...table, capacity: Math.max(1, table.capacity + increment) } : table
    ));
  };

  const handleMoveTable = (id, dx, dy) => {
    setTables(tables.map(table => 
      table.id === id ? { 
        ...table, 
        x: Math.max(0, Math.min(GRID_SIZE - 1, table.x + dx)),
        y: Math.max(0, Math.min(GRID_SIZE - 1, table.y + dy))
      } : table
    ));
  };

  const handleSave = () => {
    console.log('Guardando configuración:', { restaurantName, tables });
    setIsEditing(false);
  };

  return (
    <div className="restaurant-dashboard">
      <h1 className="restaurant-name">{restaurantName}</h1>
      
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="edit-button"
      >
        <Edit className="icon" size={20} />
        {isEditing ? 'Cancelar Edición' : 'Editar Configuración'}
      </button>

      {isEditing ? (
        <div className="edit-section">
          <h2 className="section-title">Configuración del Restaurante</h2>
          <input
            type="text"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="Nombre del Restaurante"
            className="restaurant-name-input"
          />

          <h3 className="subsection-title">Mesas y Capacidades</h3>
          <div className="tables-layout">
            <div className="tables-list">
              {tables.map(table => (
                <div key={table.id} className="table-item">
                  <span className="table-info">{table.name}: {table.capacity} personas</span>
                  <button onClick={() => handleChangeCapacity(table.id, 1)} className="capacity-button increase">
                    <Plus size={16} />
                  </button>
                  <button onClick={() => handleChangeCapacity(table.id, -1)} className="capacity-button decrease">
                    <Minus size={16} />
                  </button>
                  <button onClick={() => handleRemoveTable(table.id)} className="remove-button">
                    Eliminar
                  </button>
                </div>
              ))}
              <button onClick={handleAddTable} className="add-table-button">
                Agregar Nueva Mesa
              </button>
            </div>
            <div className="grid-container">
              <div className="grid" style={{ width: `${CELL_SIZE * GRID_SIZE + 2}px`, height: `${CELL_SIZE * GRID_SIZE + 2}px` }}>
                {tables.map(table => (
                  <div
                    key={table.id}
                    className={`grid-table ${selectedTable === table.id ? 'selected' : ''}`}
                    style={{
                      left: `${table.x * CELL_SIZE}px`,
                      top: `${table.y * CELL_SIZE}px`,
                      width: `${CELL_SIZE}px`,
                      height: `${CELL_SIZE}px`,
                    }}
                    onClick={() => setSelectedTable(table.id)}
                  >
                    <span className="table-number">{table.id}</span>
                  </div>
                ))}
              </div>
              {selectedTable && (
                <div className="move-buttons">
                  <button onClick={() => handleMoveTable(selectedTable, 0, -1)} className="move-button">↑</button>
                  <button onClick={() => handleMoveTable(selectedTable, -1, 0)} className="move-button">←</button>
                  <button onClick={() => handleMoveTable(selectedTable, 1, 0)} className="move-button">→</button>
                  <button onClick={() => handleMoveTable(selectedTable, 0, 1)} className="move-button">↓</button>
                </div>
              )}
            </div>
          </div>
          <button onClick={handleSave} className="save-button">
            <Save className="icon" size={20} />
            Guardar Cambios
          </button>
        </div>
      ) : (
        <div className="view-section">
          <h2 className="section-title">Configuración Actual</h2>
          <div className="tables-layout">
            <div className="tables-list">
              {tables.map(table => (
                <div key={table.id} className="table-item">
                  <h3 className="table-name">{table.name}</h3>
                  <p className="table-info">Capacidad: {table.capacity} personas</p>
                  <p className="table-info">Posición: ({table.x}, {table.y})</p>
                </div>
              ))}
            </div>
            <div className="grid-container">
              <div className="grid" style={{ width: `${CELL_SIZE * GRID_SIZE + 2}px`, height: `${CELL_SIZE * GRID_SIZE + 2}px` }}>
                {tables.map(table => (
                  <div
                    key={table.id}
                    className="grid-table"
                    style={{
                      left: `${table.x * CELL_SIZE}px`,
                      top: `${table.y * CELL_SIZE}px`,
                      width: `${CELL_SIZE}px`,
                      height: `${CELL_SIZE}px`,
                    }}
                  >
                    <span className="table-number">{table.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="reservations-section">
        <h2 className="section-title">Gestión de Reservas</h2>
        <div className="reservations-buttons">
          <button className="reservation-button view-reservations">
            Ver Todas las Reservas
          </button>
          <button className="reservation-button create-reservation">
            Crear Nueva Reserva
          </button>
        </div>
      </section>

      <section className="statistics-section">
        <h2 className="section-title">Estadísticas</h2>
        <div className="statistics-content">
          <p className="statistic-item">Total de mesas: {tables.length}</p>
          <p className="statistic-item">Capacidad total: {tables.reduce((sum, table) => sum + table.capacity, 0)} personas</p>
          <p className="statistic-item">Reservas pendientes: 5</p>
        </div>
      </section>
    </div>
  );
}