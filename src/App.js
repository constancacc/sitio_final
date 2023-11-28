//import logo from './logo.svg';

function Menu() {
  return (
    <div className="App">
      <div id="navBar">
      <div class="row" id="menu">
        <div class="col-lg-3 tab">
         <img src="imagens/sitio.svg" alt="sitio"></img>
          <button id="localButton">Coimbra</button>
          <img src="imagens/search.svg" alt="search"></img>
        </div>
        <div class="col-lg-3 tab" id="navLinks">
          <nav>
            <h5>galerias</h5>
          </nav>
          <nav>
            <h5>artistas</h5>
          </nav>
          <nav>
            <h5>agenda</h5>
          </nav>
        </div>
      </div>
    </div>
 
    </div>
  );
}

export default Menu;
