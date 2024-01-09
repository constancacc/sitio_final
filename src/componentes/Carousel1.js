import { useEffect, useState } from "react";
import { getAllGalleries } from "../lib/cosmic.js";

import { Link } from "react-router-dom";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel1.css";

import location from "../imagens/location.svg";
import clock from "../imagens/Clock.svg";
import Divider from "./Divider.js";

const Carousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1500,
    focusOnSelect: true,
    centerPadding: "2%",
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllGalleries();
        console.log("Fetched Posts:", fetchedPosts);

        const destaquesPosts = fetchedPosts.filter(post => post.metadata.destaque === true);

        setPosts(destaquesPosts);
        console.log("Destaques Posts:", destaquesPosts);

      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, []);

  return (

    <Slider {...settings}>
      {posts.map((post) => (
        <Link to={"/galeria/" + post.slug} className="button-link">
          <div key={post.id} className="carousel-item">
            <div className="carousel-content">
              <img src={post.metadata.imagem_galeria.url} alt='galeria' className="galeriaImage" />
              <div className="galeria">
                <h3>{post.title}</h3>
              </div>
              <Divider />
              <div className="dados">
                <img src={location} alt="location" className="icons" />
                <p>{post.metadata.localizacao_galeria}</p>
                <img src={clock} alt="clock" className="iconsClock" />
                <p>{post.metadata.horario_galeria}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}

    </Slider>


  );
};

export default Carousel;
