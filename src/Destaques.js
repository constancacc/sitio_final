import './css/destaques.css';



import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';


function Destaques() {


    return (
        <div className="PagDestaques">

            <div className="row">
                <div className="col-lg-1"></div>
                <div className="row col-lg-11">
                    <div className="title">
                        <h3 className="galPrin">Galerias Principais</h3>
                        <div className="rect1"></div>
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
                        <h3 className="galPrin">Artistas em Destaque</h3>
                        <div className="rect2"></div>
                    </div>
                </div>
            </div>
            <div className="row artistas">

            </div>

            <div className="row">
                <div className="col-lg-1"></div>
                <div className="row col-lg-11">
                    <div className="title">
                        <h3 className="galPrin">Exposições em Destaque</h3>
                        <div className="rect3"></div>
                    </div>
                </div>
            </div>
            <Carousel2 />

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
        </div>

    );
}

export default Destaques; 