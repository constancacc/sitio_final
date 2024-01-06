import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artistas from "./paginas/Artistas.js";
import Destaques from "./Destaques.js";
import Index from "./paginas/index.js";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* */}
        
        <Route exact path="/index" element={<Index />}></Route>
        <Route exact path="/" element={<Destaques />}></Route>
        <Route exact path="/artistas" element={<Artistas />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
