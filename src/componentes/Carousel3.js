import React, { useState, useEffect } from "react";import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Carousel3.css"; // Importe um arquivo de estilo para personalização opcional

import exposicao from '../imagens/exposicao.png';
import location from '../imagens/location.svg';
import clock from '../imagens/Clock.svg';
import Divider from './Divider.js'

const Carousel = () => {

  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  function calculateSlidesToShow() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 600) {
      return 1; // Small screens
    } else if (windowWidth <= 1400) {
      return 2; 
    } else {
      return 3; // Larger screens
    }
  }

  useEffect(() => {
    function handleResize() {
      setSlidesToShow(calculateSlidesToShow());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const settings = {
    centerMode: true,
    centerPadding: '20%',
    infinite: true,
    slidesToShow: slidesToShow,
    speed: 1500,
    focusOnSelect: true,
    dots: true, // Ativação dos pontos de navegação
    autoplay: true, // Ativação da passagem automática
    autoplaySpeed: 5000, // Velocidade de transição automática em milissegundos
  };

  return (
    <Slider {...settings}>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="carousel-item">
          <div className="carousel-content3">
            <div className="col-lg-9 tabLink">
              <img src={exposicao} alt='exposicao' />
              <div className="galeria">
                {slidesToShow <= 1 ? (
                  <h3>Nome da Galeria</h3>
                ) : (
                  <h4>Nome da Galeria</h4>
                )}
                <Divider />
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
      ))}
    </Slider>
  );
};

export default Carousel;
