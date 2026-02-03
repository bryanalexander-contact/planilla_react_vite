import React from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* Configuración de SEO usando Helmet */}
      <Helmet>
        <title>Reserva Dental | Clínica Smile</title>
        <meta name="description" content="Agenda tu cita dental de forma rápida y sencilla." />
      </Helmet>

      {/* Aquí cargamos nuestra página de inicio */}
      <Home />

      <footer style={{ textAlign: 'center', padding: '40px', color: '#aaa', borderTop: '1px solid #eee' }}>
        <p>© 2026 Clínica Smile. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;