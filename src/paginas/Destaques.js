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
        <div className="col-lg-1"></div>
        <div className="row col-lg-11">
          <div className="title">
            <h3 className="galPrin">Galerias Principais
            <div className="rect rect1" />
            </h3>
            
          </div>
        </div>
      </div>

      <Carousel1 />

      {/* <Carousel
                onChange={onChange}
                onClickItem={onClickItem}
                onClickThumb={onClickThumb}
                showArrows={false}
                infiniteLoop={true}
                emulateTouch={true}
                showStatus={false}
                selectedItem={1}>
                <div>
                    <tab className="col-lg-9 tabLink">
                        <img src={galeria} />
                        <div className="galeria">
                            <h4>Nome da Galeria</h4>
                            <hr style={{ color: '#000000', backgroundColor: '#000000', height: 0.5 }} />
                            <div className="dados">
                                <img src={location} alt="location" />
                                <p>Rua de Miguel Bombarda</p>
                                <img src={clock} alt="clock" />
                                <p>Rua de Miguel Bombarda</p>
                            </div>
                        </div>
                    </tab>

                </div>

                <div>
                    <tab className="col-lg-9 tabLink">
                        <img src={galeria} />
                        <div className="galeria">
                            <h4>Nome da Galeria</h4>

                            <div className="dados">
                                <img src={location} alt="location" />
                                <p>Rua de Miguel Bombarda</p>
                                <img src={clock} alt="location" />
                                <p>Rua de Miguel Bombarda</p>
                            </div>
                        </div>
                    </tab>
                </div>
                <div>
                    <tab className="col-lg-9 tabLink">
                        <img src={galeria} />

                        <div className="galeria">
                            <h4>Nome da Galeria</h4>

                            <div className="dados">
                                <img src={location} alt="location" />
                                <p>Rua de Miguel Bombarda</p>
                                <img src={clock} alt="location" />
                                <p>Rua de Miguel Bombarda</p>
                            </div>
                        </div>
                    </tab>
                </div>

            </Carousel> */}

      <div className="row">
        <div className="col-lg-1"></div>
        <div className="row col-lg-11">
          <div className="title">
            <h3 className="galPrin">Artistas em Destaque
            <div className="rect rect2"></div>
            </h3>
          </div>
        </div>
      </div>

      <Carousel2 />

      <div className="row">
        <div className="col-lg-1"></div>
        <div className="row col-lg-11">
          <div className="title">
            <h3 className="galPrin">Exposições em Destaque
            <div className="rect rect3"></div>
            </h3>
          </div>
        </div>
      </div>
      <Carousel3 />

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
