import { useEffect, useState } from "react";
import { getExhibitionsBySlug } from "../lib/cosmic.js";
import { useParams } from "react-router-dom";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import location from "../imagens/location.svg";
import clock from "../imagens/Clock.svg";
import "../css/paginasInfo.css";

function ExposicaoInfo() {
  const { slug } = useParams();
  const [exhibition, setExhibition] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedExhibitions = await getExhibitionsBySlug(slug);

        console.log(fetchedExhibitions);

        setExhibition(fetchedExhibitions);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, [slug]);

  return (
    <div id="PagArtistaInfo">
      <Menu page="agenda" />
      <div className="info-container">
        <div className="row">
          <div className="col-lg-1 col-xs-1"></div>
          <div className="col-lg-10 col-xs-10">
            <div id="info-titulo">
              <h1>
                {exhibition.title}
                <br />
                <span>{exhibition.metadata?.artista.title}</span>
              </h1>
              <div
                id="info-rect"
                className={"info-rect-" + exhibition.type}
              ></div>
            </div>
            <div id="info-description" className={exhibition.type}>
              <p>{exhibition.metadata?.descricao}</p>
            </div>
          </div>
          <div className="col-lg-1 col-xs-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-xs-1"></div>
          <div className="col-lg-3 col-xs-10">
            <div id="info-gallery">
              <div id="info-location">
                <img src={location} alt="location" />
                <p>{exhibition.metadata?.localizacao}</p>
              </div>
              <div id="info-date">
                <img src={clock} alt="clock" />
                <p>{exhibition.metadata?.horario}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-xs-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-xs-1"></div>
          <div className="col-lg-10 col-xs-10">
            <div id="info-container">
              <div className="row middle-lg">
                <div className="col-lg-4">
                  <div id="info-imagem1" className={exhibition.type}>
                    <img src={exhibition.metadata?.imagem1.imagem.url} />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div id="info-imagem2">
                    <img src={exhibition.metadata?.imagem2.imagem.url} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-xs-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExposicaoInfo;
