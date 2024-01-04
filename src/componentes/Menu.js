import logo from '../imagens/sitio.svg';
import search from '../imagens/search.svg'


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
            <h5>galerias</h5>
            <h5>artistas</h5>
            <h5>agenda</h5>
        </div>
      </div>
    </div>
  );
}

export default Menu;
