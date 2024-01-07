import logo from "../imagens/sitio.svg";
import search from "../imagens/search.svg";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <div id="navBar">
      <div className="row" id="menu">
        <div className="col-lg-3 tab">
          <Link to="/">
            <img src={logo} alt="sitio"></img>
          </Link>
          <button id="localButton">Coimbra</button>
          <Link to="/pesquisa">
          <img src={search} alt="search"></img>
          </Link>
        </div>
        <div className="col-lg-3 tab" id="navLinks">
          <Link to="/galerias" className="nav-link">
            <h5>galerias</h5>
          </Link>
          <Link to="/artistas" className="nav-link">
            <h5>artistas</h5>
          </Link>
          <Link to="/agenda" className="nav-link">
            <h5>agenda</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
