import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import "../css/artistas.css";

function Artistas() {
  const names = [
    "paula rego",
    "santiago ribeiro",
    "vhils",
    "adriana molder",
    "julio sarmento",
    "pedro cabrita reis",
  ];

  return (
    <div id="PagDestaques">
      <Menu />
      {names.map((name) => (
        <div className="row artista-list-element">
          <div className="col-xs-12">
            <h1>{name}</h1>
            <hr />
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Artistas;
