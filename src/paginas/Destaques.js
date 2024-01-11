
import "../css/destaques.css";
import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import Carousel1 from "../componentes/Carousel1.js";
import Carousel2 from "../componentes/Carousel2.js";
import Carousel3 from "../componentes/Carousel3.js";

function Destaques() {
  return (
    <div id="PagDestaques">
      <Menu page="index" />
      <div className="row">
        <div className="col-lg-1 col-xs-1"></div>
        <div className="row col-lg-11 col-xs-11">
          <div className="title">
            <h3>Galerias Principais
              <div className="rect rect1" />
            </h3>
          </div>
        </div>
      </div>
    
        <div className="carousel1">
        <Carousel1 />
        </div>


      <div className="row">
        <div className="col-lg-1 col-xs-1"></div>
        <div className="row col-lg-11 col-xs-11">
          <div className="title">
            <h3>Artistas em Destaque
              <div className="rect rect2"></div>
            </h3>
          </div>
        </div>
      </div>

      <Carousel2 />

      <div className="row">
        <div className="col-lg-1 col-xs-1"></div>
        <div className="row col-lg-11 col-xs-10">
          <div className="title">
            <h3>Exposições em Destaque
              <div className="rect rect3"></div>
            </h3>
          </div>
        </div>
      </div>


      <div className="carousel3">
      <Carousel3 />
        </div>
      

      {/* <div className="row tab1">
                <div className="col-lg-1"></div>
                <div className="col-lg-3 expoDestaque">
                    <img src={exposicao} alt="exposicao" />
                    <h4>Nome da Exposição</h4>
                    <p>Nome do Artista</p>

                    <h6>Local da Exposição</h6>
                    <p>data da exposição</p>
                </div>
                <div className='col-div' />
                <div className="col-lg-3 expoDestaque">
                    <img src={exposicao} alt="exposicao" />
                    <h4>Nome da Exposição</h4>
                    <p>Nome do Artista</p>

                    <h6>Local da Exposição</h6>
                    <p>data da exposição</p>
                </div>
                <div className='col-div' />
                <div className="col-lg-3 expoDestaque">
                    <img src={exposicao} alt="exposicao" />
                    <h4>Nome da Exposição</h4>
                    <p>Nome do Artista</p>

                    <h6>Local da Exposição</h6>
                    <p>data da exposição</p>
                </div>
            </div> */}

      <Footer />
    </div>
  );
}

export default Destaques;
