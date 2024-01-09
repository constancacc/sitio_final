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

        setExhibitions(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, []);

  const toggleCarousel = (month) => {
    setActiveMonth(month === activeMonth ? null : month);
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

  const filterExhibitionsByMonth = (exhibitions, targetMonth) => {
    return exhibitions.filter((exhibition) => {
      const exhibitionStartDate = exhibition.metadata.data_inicio;
      const exhibitionEndDate = exhibition.metadata.data_fim;

      const [exhibitionStartYear, exhibitionStartMonth] = exhibitionStartDate
        .split("-")
        .slice(0, 2);
      const [exhibitionEndYear, exhibitionEndMonth] = exhibitionEndDate
        .split("-")
        .slice(0, 2);

      const startMonth = parseInt(exhibitionStartMonth);
      const endMonth = parseInt(exhibitionEndMonth);

      return targetMonth >= startMonth && targetMonth <= endMonth;
    });
  };

  return (
    <div id="PagAgenda">
      <Menu page="agenda" />
      {months.map((month, index) => (
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
                  {filterExhibitionsByMonth(posts, index + 1).map((post) => (
                    <Link to={"/exposicao/" + post.slug} key={post.slug}>
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
