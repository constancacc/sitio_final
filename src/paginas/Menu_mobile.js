
import Menu from "../componentes/Menu.js";
import { Link } from "react-router-dom";



import '../css/menu_mobile.css';

function MenuMobile() {
  return (
    <div id="menucontainer">
      <Menu id="sobrepor"/>

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

        <Link to={"/contactos"}>
          <div className="row">
              <h1 className="position"> contactos </h1>
          </div>
        </Link>

      </div>
    </div>

    </div>
  );
}

export default MenuMobile;
