import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { AdopterRegister } from "./pages/AdopterRegister";
import { AnimalRegister } from "./pages/AnimalRegister";
import { AdopterDashboard } from "./pages/AdopterDashboard";
import { OngDashboard } from "./pages/OngDashboard";
import { AnimalDossier } from "./pages/AnimalDossier";
import { MatchExplanation } from "./pages/MatchExplanation";
// 1. ADICIONE ESTA IMPORTAÇÃO:
import { OngRegister } from "./pages/OngRegister"; 

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-adotante" element={<AdopterRegister />} />
          <Route path="/cadastro-animal" element={<AnimalRegister />} />
          <Route path="/dashboard-adotante" element={<AdopterDashboard />} />
          <Route path="/dashboard-ong" element={<OngDashboard />} />
          <Route path="/dossie/:animalId" element={<AnimalDossier />} />
          <Route path="/como-funciona" element={<MatchExplanation />} />
          {/* 2. ADICIONE ESTA ROTA AQUI: */}
          <Route path="/cadastro-ong" element={<OngRegister />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}