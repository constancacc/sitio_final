import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Carousel2.css'; // Importe um arquivo de estilo para personalização opcional

import galeria from './imagens/galeria.png';
import location from './imagens/location.svg';
import clock from './imagens/Clock.svg';

const Carousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1500,
    focusOnSelect: true,
    centerPadding: '2%', // Ajuste conforme necessário
    dots: true, // Ativação dos pontos de navegação
    autoplay: true, // Ativação da passagem automática
    autoplaySpeed: 5000, // Velocidade de transição automática em milissegundos
   
  };

  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <div className="carouselcontent2">
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
      </div>

      <div className="carousel-item">
        <div className="carouselcontent2">
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
      </div>

      <div className="carousel-item">
        <div className="carouselcontent2">
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
      </div>

      {/* Adicione mais itens conforme necessário */}
    </Slider>
  );
};

export default Carousel;