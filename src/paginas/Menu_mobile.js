
import Menu from "../componentes/Menu.js";/* componente */
import { Link } from "react-router-dom";/*links*/

import '../css/menu_mobile.css'; /*css*/

function MenuMobile() {
  return (
    <div id="menucontainer">
      <Menu />

    {/*Menu Mobile */}
    <div id="gradiente">
    <div id="container_lista">
    
        <Link to={"/galerias"}>
          <div className="row separar">
              <h1 className="position" > galerias </h1>
          </div>
        </Link>


        <Link to={"/artistas"}>
          <div className="row separar">
              <h1 className="position" > artistas </h1>
          </div>
        </Link>

        <Link to={"/agenda"}>
          <div className="row separar">
              <h1 className="position"> agenda </h1>
          </div>
        </Link>

        <Link to={"/pesquisa"}>
          <div className="row separar">
              <h1 className="position"> pesquisa </h1>
          </div>
        </Link>

        <Link to={"/destaques"}>
          <div className="row">
              <h1 className="position"> destaques </h1>
          </div>
        </Link>
      </div>
    </div>

    </div>
  );
}

export default MenuMobile;
