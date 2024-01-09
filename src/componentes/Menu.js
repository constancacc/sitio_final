import logo from "../imagens/sitio.svg";

import search from "../imagens/search2.svg";

import { Link, useLocation } from "react-router-dom";

import '../css/menu_mobile.css';

function Menu(props) {

  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";

  return (
    <div id="navBar">
      <div className="row" id="menu">
      <Link id="hamburguer" to="/menu">
      <svg  width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      
        <path d="M1 1H25" stroke="black" stroke-width="2" stroke-linecap="round"/>

        {!isMenuPage && (
            <>
              <path d="M1 11H25" stroke="black" strokeWidth="2" strokeLinecap="round" />
              <path d="M1 21H25" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </>
          )}

      </svg>
      </Link>
        <div className="col-lg-3 tab" id="logo_container_mobile">
          <Link id="logo_mobile" to="/">
            <img src={logo} alt="sitio"></img>
          </Link>
          <Link to="/destaques" id="botao_coimbra">
          <button id="localButton">Coimbra</button>
          </Link>
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
