import { useEffect, useState } from "react";
import { getAllExhibitions } from "../lib/cosmic.js";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import "../css/agenda.css";

function Agenda() {
  const [posts, setExhibitions] = useState([]);
  const [activeMonth, setActiveMonth] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllExhibitions();

        console.log(fetchedPosts);

        setExhibitions(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, []);

  const toggleCarousel = (month) => {
    setActiveMonth(activeMonth === month ? null : month);
  };

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 1500,
    focusOnSelect: true,
    centerPadding: "2%",
    dots: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  return (
    <div id="PagAgenda">
      <Menu page="agenda" />
      {months.map((month) => (
        <div key={month} className="month">
          <div
            className={`row agenda-list-element ${
              activeMonth === month ? "active-month" : ""
            }`}
            onClick={() => toggleCarousel(month)}
          >
            <div className="col-xs-12">
              <h1>{month}</h1>
            </div>
          </div>

          {activeMonth === month && (
            <>
              <div className="row">
                <div className="col-xs-12">
                  <hr />
                </div>
              </div>

              <div className="row agenda-carousel">
                <Slider {...settings}>
                  {posts.map((post) => (
                    <Link to={"/exposicao/" + post.slug} key={post.slug}>
                      <div>
                        <div>
                          <img
                            src={post.metadata.imagem1.imagem.url}
                            alt="exposição"
                            className="agenda-imagem"
                          />
                          <div className="agenda-nome-exposicao">
                            <h6>{post.title}</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Slider>
              </div>
            </>
          )}

          <div className="row">
            <div className="col-xs-12">
              <hr />
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Agenda;
