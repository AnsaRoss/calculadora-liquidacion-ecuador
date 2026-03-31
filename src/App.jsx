import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ComoCalcular from './pages/ComoCalcular';
import DecimoTercero from './pages/DecimoTercero';
import Vacaciones from './pages/Vacaciones';
import Finiquito from './pages/Finiquito';
import RenunciaVoluntaria from './pages/RenunciaVoluntaria';
import DespidoIntempestivo from './pages/DespidoIntempestivo';
import ActaFiniquito from './pages/ActaFiniquito';
import JubilacionPatronal from './pages/JubilacionPatronal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import TerminosCondiciones from './pages/TerminosCondiciones';
import Contacto from './pages/Contacto';
import CalculadoraDecimoTercero from './pages/CalculadoraDecimoTercero';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora-decimo-tercero-ecuador" element={<CalculadoraDecimoTercero />} />
        <Route path="/como-calcular-liquidacion-ecuador" element={<ComoCalcular />} />
        <Route path="/decimo-tercero-ecuador" element={<DecimoTercero />} />
        <Route path="/vacaciones-ecuador" element={<Vacaciones />} />
        <Route path="/finiquito-ecuador" element={<Finiquito />} />
        <Route path="/renuncia-voluntaria-ecuador" element={<RenunciaVoluntaria />} />
        <Route path="/despido-intempestivo-ecuador" element={<DespidoIntempestivo />} />
        <Route path="/acta-de-finiquito-ecuador" element={<ActaFiniquito />} />
        <Route path="/jubilacion-patronal-ecuador" element={<JubilacionPatronal />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
