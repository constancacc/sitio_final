import { useEffect, useState } from "react";
import { getArtistBySlug } from "../lib/cosmic.js"; // ARTISTA CORRESPONDENTE À SLUG
import { useParams } from "react-router-dom";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import "../css/paginasInfo.css";

function ArtistaInfo() {
  const { slug } = useParams();
  const [artist, setArtist] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false); // CARREGAR LEGENDAS APENAS QUANDO IMAGEM É CARREGADA

  // FETCH DO ARTISTA CORRESPONDENTE
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedArtist = await getArtistBySlug(slug);
        setArtist(fetchedArtist);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData();
  }, [slug]); // NOVO FETCH QUANDO A SLUG É ALTERADA

  return (
    <div id="PagArtistaInfo">
      <Menu page="artistas" />
      <div className="info-container">
        <div className="row">
          <div className="col-lg-1 col-xs-1"></div>
          <div className="col-lg-10 col-xs-10">
            <div id="info-container">
              <div className="row middle-lg">
                <div className="col-lg-6">
                  <div id="info-titulo">
                    <h1>{artist.title}</h1>
                    <div id="info-rect"></div>
                  </div>
                  <div id="info-description">
                    <p>{artist.metadata?.biografia}</p>
                  </div>
                  <div id="info-imagem1">
                    <img
                      src={artist.metadata?.imagem1.imagem.url}
                      onLoad={() => setImageLoaded(true)}
                    />
                    {imageLoaded && <p>{artist.metadata?.imagem1.legenda}</p>}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div id="info-imagem2">
                    <img
                      src={artist.metadata?.imagem2.imagem.url}
                      onLoad={() => setImageLoaded(true)}
                    />
                    {imageLoaded && <p>{artist.metadata?.imagem2.legenda}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-xs-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-xs-1"></div>
          <div className="col-lg-10 col-xs-10">
            <div className="row end-lg">
              <div className="col-lg-8">
                <div id="info-imagem3">
                  <img
                    src={artist.metadata?.imagem3.imagem.url}
                    onLoad={() => setImageLoaded(true)}
                  />
                  {imageLoaded && <p>{artist.metadata?.imagem3.legenda}</p>}
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

export default ArtistaInfo;
