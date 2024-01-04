import logo from "../imagens/sitio.svg";
import search from "../imagens/search.svg";

function Artistas() {
  return (
    <div id="navBar">
      <div className="row" id="menu">
        <div className="col-lg-3 tab">
          <img src={logo} alt="sitio"></img>
          <button id="localButton">Coimbra</button>
          <img src={search} alt="search"></img>
        </div>
        <div className="col-lg-3 tab" id="navLinks">
          <a href="#galerias">
            <h5>galerias</h5>
          </a>
          <a href="#artistas">
            <h5>artistas</h5>
          </a>
          <a href="#agenda">
            <h5>agenda</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Artistas;
