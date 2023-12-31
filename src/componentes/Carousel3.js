import React, { useState, useEffect } from "react";
import { getAllExhibitions } from "../lib/cosmic.js";

import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel3.css";

import location from "../imagens/location.svg";
import clock from "../imagens/Clock.svg";
import Divider from "./Divider.js";

const Carousel = () => {
  const [posts, setPosts] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  const settings = {
    centerMode: true,
    centerPadding: "20%",
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

    if (windowWidth <= 700) {
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

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllExhibitions();
        console.log("Fetched Posts:", fetchedPosts);

        const destaquesPosts = fetchedPosts.filter(
          (post) => post.metadata.destaque === true,
        );
        console.log("Destaques Posts:", destaquesPosts);

        setPosts(destaquesPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Slider {...settings}>
      {posts.map((post) => (
        <Link to={"/exposicao/" + post.slug} key={post.slug}>
        <div key={post.id} className="carousel-item">
          <div className="carousel-content3">
            <div className="tabLink">
              <img
                src={post.metadata.imagem1.imagem.url}
                alt="exposicao"
                className="exposicao"
              />
              <div className="galeria">
                {slidesToShow <= 1 ? (
                  <h3>{post.title}</h3>
                ) : (
                  <h4>{post.title}</h4>
                )}
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
      ))}
    </Slider>
  );
};

export default Carousel;
