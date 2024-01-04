import logo from "../imagens/sitio.svg";
import search from "../imagens/search.svg";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <div id="navBar">
      <div className="row" id="menu">
        <div className="col-lg-3 tab">
          <img src={logo} alt="sitio"></img>
          <button id="localButton">Coimbra</button>
          <img src={search} alt="search"></img>
        </div>
        <div className="col-lg-3 tab" id="navLinks">
          <Link to="/galerias">
            <h5>galerias</h5>
          </Link>
          <Link to="/artistas">
            <h5>artistas</h5>
          </Link>
          <Link to="/agenda">
            <h5>agenda</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
