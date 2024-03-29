import React, { useState, useEffect } from "react";
import { getAllExhibitions } from "../lib/cosmic.js"; //ir buscar as exposições

import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel3.css";

import location from "../imagens/location.svg";
import clock from "../imagens/Clock.svg";
import Divider from "./Divider.js";

//terceiro carrossel da página dos destaques

const Carousel = () => {
  const [posts, setPosts] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: slidesToShow,
    speed: 1500,
    focusOnSelect: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  function calculateSlidesToShow() {
    const windowWidth = window.innerWidth;

    //redimensionar a quantidade de slides a mostrar
    if (windowWidth <= 767) {
      return 1;
    } else if (windowWidth <= 1300) {
      return 2;
    } else {
      return 3;
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

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllExhibitions();
        console.log("Fetched Posts:", fetchedPosts);

        //ir buscar as exposições em destaque
        const destaquesPosts = fetchedPosts.filter(
          (post) => post.metadata.destaque === true
        );
        console.log("Destaques Posts:", destaquesPosts);

        setPosts(destaquesPosts);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Slider {...settings}>
      {posts.map((post) => (
        <div className="row">
          <Link to={"/exposicao/" + post.slug} key={post.slug}>
            <div key={post.id} className="carousel-item">
              <div className="carousel-content3">
                <div className="tabLink">
                  <img
                    src={post.metadata.imagem1.imagem.url}
                    alt="exposicao"
                    className="exposicao"
                  />
                  <div className="galeria3">
                    <h3>{post.title}</h3>
                  </div>

                  <Divider />

                  <div className="dados3">
                    <div className="dados-itens3Location">
                      <img src={location} alt="location" className="icons" />
                      <p>{post.metadata.localizacao}</p>
                    </div>
                    <div className="dados-itens3">
                      <img src={clock} alt="clock" className="icons" />
                      <p>{post.metadata.horario}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
