import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./componentes/Footer.js";
import Destaques from "./Destaques.js";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Destaques />}></Route>
        <Route exact path="/artistas" element={<Footer />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
