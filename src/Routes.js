import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./componentes/Menu.js";
import Footer from "./componentes/Footer.js";
import Destaques from "./Destaques.js";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Destaques />}></Route>
        <Route exact path="/footer" element={<Footer />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
