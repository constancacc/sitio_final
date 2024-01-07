import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galerias from "./paginas/Galerias.js";
import Artistas from "./paginas/Artistas.js";
import Destaques from "./paginas/Destaques.js";
import Pesquisa from "./paginas/Pesquisa.js";
import Index from "./paginas/index.js";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* */}
        
        <Route exact path="/index" element={<Index />}></Route>
        <Route exact path="/" element={<Destaques />}></Route>
        <Route exact path="/galerias" element={<Galerias />}></Route>
        <Route exact path="/artistas" element={<Artistas />}></Route>
        <Route exact path="/galeria"></Route>
        <Route exact path="/pesquisa" element={<Pesquisa />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
