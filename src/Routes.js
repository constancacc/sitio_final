import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Galerias from "./paginas/Galerias.js";
import GaleriaInfo from "./paginas/GaleriaInfo.js";
import Artistas from "./paginas/Artistas.js";
import ArtistaInfo from "./paginas/ArtistaInfo.js";
import Agenda from "./paginas/Agenda.js";
import ExposicaoInfo from "./paginas/ExposicaoInfo.js";
import Destaques from "./paginas/Destaques.js";
import Pesquisa from "./paginas/Pesquisa.js";
import Index from "./paginas/Paginicial.js";
import MenuMobile from "./paginas/Menu_mobile.js";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route exact path="/destaques" element={<Destaques />}></Route>
        <Route exact path="/galerias" element={<Galerias />}></Route>
        <Route exact path="/galeria/:slug" element={<GaleriaInfo />}></Route>
        <Route exact path="/artistas" element={<Artistas />}></Route>
        <Route exact path="/artista/:slug" element={<ArtistaInfo />}></Route>

        <Route exact path="/pesquisa" element={<Pesquisa />}></Route>
        <Route exact path="/agenda" element={<Agenda />}></Route>
        <Route
          exact
          path="/exposicao/:slug"
          element={<ExposicaoInfo />}
        ></Route>
        <Route exact path="/menu" element={<MenuMobile />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
