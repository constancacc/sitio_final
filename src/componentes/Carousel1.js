import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Carousel1.css"; 

import galeria from "../imagens/galeria.png";
import location from "../imagens/location.svg";
import clock from "../imagens/Clock.svg";

const Carousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1500,
    focusOnSelect: true,
    centerPadding: "2%", // Ajuste conforme necessário
    dots: true, // Ativação dos pontos de navegação
    autoplay: true, // Ativação da passagem automática
    autoplaySpeed: 5000, // Velocidade de transição automática em milissegundos
  };

  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <div className="carousel-content">
          <div className="col-lg-9">
            <img src={galeria} alt='galeria'/>
            <div className="galeria">
              <h4>Nome da Galeria</h4>
              <hr />
              <div className="dados">
                <img src={location} alt="location" className="icons" />
                <p>Rua de Miguel Bombarda</p>
                <img src={clock} alt="clock"  className="icons" />
                <p>Rua de Miguel Bombarda</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-content">
          <div className="col-lg-9 tabLink">
            <img src={galeria} alt='galeria'/>
            <div className="galeria">
              <h4>Nome da Galeria</h4>
              <hr />
              <div className="dados">
                <img src={location} alt="location" className="icons"/>
                <p>Rua de Miguel Bombarda</p>
                <img src={clock} alt="clock" className="icons"/>
                <p>Rua de Miguel Bombarda</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-content">
          <div className="col-lg-9 tabLink">
            <img src={galeria} alt='galeria'/>
            <div className="galeria">
              <h4>Nome da Galeria</h4>
              <hr />
              <div className="dados">
                <img src={location} alt="location" className="icons"/>
                <p>Rua de Miguel Bombarda</p>
                <img src={clock} alt="clock"className="icons" />
                <p>Rua de Miguel Bombarda</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Slider>
  );
};

export default Carousel;
