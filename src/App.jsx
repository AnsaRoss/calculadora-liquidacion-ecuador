import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ComoCalcular from './pages/ComoCalcular';
import DecimoTercero from './pages/DecimoTercero';
import Vacaciones from './pages/Vacaciones';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/como-calcular-liquidacion-ecuador"
          element={<ComoCalcular />}
        />
        <Route path="/decimo-tercero-ecuador" element={<DecimoTercero />} />
        <Route path="/vacaciones-ecuador" element={<Vacaciones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
