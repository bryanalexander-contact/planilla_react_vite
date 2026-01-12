import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Page404 from '@/pages/Page404/Page404.jsx';

// Importa un componente Home básico para que el template funcione al iniciar
// import Home from '@/pages/Home/Home'; 

function App() {
  return (
    <Router>
      <Helmet>
        <title>Nombre Proyecto | Template</title>
        <meta name="description" content="Descripción base del proyecto" />
      </Helmet>

      {/* Aquí puedes importar y colocar tu <Navbar /> cuando lo tengas */}

      <Routes>
        {/* Ruta principal: cámbiala por tu componente real cuando lo crees */}
        <Route path="/" element={<div>Planilla Lista - Empieza a construir</div>} />
        
        {/* Ruta 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>

      {/* Aquí puedes colocar tu <Footer /> global */}
    </Router>
  );
}

export default App;