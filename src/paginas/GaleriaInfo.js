import { useEffect, useState } from "react";
import { getGalleryBySlug } from "../lib/cosmic.js"; // GALERIA CORRESPONDENTE À SLUG
import { useParams } from "react-router-dom";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import location from "../imagens/location.svg";
import clock from "../imagens/Clock.svg";
import "../css/paginasInfo.css";

function GaleriaInfo() {
  const { slug } = useParams();
  const [gallery, setGallery] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false); // CARREGAR LEGENDAS APENAS QUANDO IMAGEM É CARREGADA

  // FETCH DA GALERIA CORRESPONDENTE
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedArtist = await getGalleryBySlug(slug);
        setGallery(fetchedArtist);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData();
  }, [slug]); // NOVO FETCH QUANDO A SLUG É ALTERADA

  return (
    <div id="PagArtistaInfo">
      <Menu page="galerias" />
      <div className="info-container">
        <div className="row">
          <div className="col-lg-1 col-xs-1"></div>
          <div className="col-lg-10 col-xs-10">
            <div id="info-container">
              <div className="row">
                <div className="col-lg-6">
                  <div id="info-titulo">
                    <h1>{gallery.title}</h1>
                    <div
                      id="info-rect"
                      className={"info-rect-" + gallery.type}
                    ></div>
                  </div>
                  <div id="info-description">
                    <p>{gallery.metadata?.sobre_galeria}</p>
                  </div>
                  <div id="info-gallery">
                    <div id="info-location">
                      <img src={location} alt="location" />
                      <p>{gallery.metadata?.localizacao_galeria}</p>
                    </div>
                    <div id="info-date">
                      <img src={clock} alt="clock" />
                      <p>{gallery.metadata?.horario_galeria}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div id="info-imagem2">
                    <img
                      src={gallery.metadata?.imagem_galeria.url}
                      onLoad={() => setImageLoaded(true)}
                    />
                    {imageLoaded && (
                      <p>{gallery.metadata?.imagem_galeria.legenda}</p>
                    )}
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

export default GaleriaInfo;
