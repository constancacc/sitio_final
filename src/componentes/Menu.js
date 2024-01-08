import logo from "../imagens/sitio.svg";
import mobile from "../imagens/menu_mobile.svg";
import search from "../imagens/search2.svg";

import { Link } from "react-router-dom";

import '../css/menu_mobile.css';

function Menu(props) {
  return (
    <div id="navBar">
      <div className="row" id="menu">

      <img id="hamburguer" src={mobile} alt="sitio"/>

        <div className="col-lg-3 tab">
          <Link  id="logo_mobile" to="/">
            <img src={logo} alt="sitio"></img>
          </Link>

          <button id="localButton">Coimbra</button>
          <Link id="pesquisa_mobile" to="/pesquisa">
            <img src={search} alt="search"></img>
          </Link>
        </div>
        <div className="col-lg-3 tab" id="navLinks">
          <Link to="/galerias" className={`nav-link-${props.page}`}>
            <h5>galerias</h5>
          </Link>
          <Link to="/artistas" className={`nav-link-${props.page}`}>
            <h5>artistas</h5>
          </Link>
          <Link to="/agenda" className={`nav-link-${props.page}`}>
            <h5>agenda</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
