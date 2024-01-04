import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import "../css/artistas.css";

function Artistas() {
  return (
    <div id="PagDestaques">
      <Menu />
      <div className="row artista-list-element">
        <div className="col-xs-12">
          <h1>Nome Artista</h1>
          <hr />
        </div>
      </div>
      <div className="row artista-list-element">
        <div className="col-xs-12">
          <h1>Nome Artista</h1>
          <hr />
        </div>
      </div>
      <div className="row artista-list-element">
        <div className="col-xs-12">
          <h1>Nome Artista</h1>
          <hr />
        </div>
      </div>
      <div className="row artista-list-element">
        <div className="col-xs-12">
          <h1>Nome Artista</h1>
          <hr />
        </div>
      </div>
      <div className="row artista-list-element">
        <div className="col-xs-12">
          <h1>Nome Artista</h1>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Artistas;
