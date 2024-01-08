import { useEffect, useState } from "react";
import { getArtistBySlug } from "../lib/cosmic.js";
import { useParams } from "react-router-dom";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import "../css/paginasInfo.css";

function ExposicaoInfo() {
  const { slug } = useParams();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedArtist = await getArtistBySlug(slug);

        console.log(fetchedArtist);

        setArtist(fetchedArtist);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, [slug]);

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
                    <img src={artist.metadata?.imagem1.imagem.url} />
                    <p>{artist.metadata?.imagem1.legenda}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div id="info-imagem2">
                    <img src={artist.metadata?.imagem2.imagem.url} />
                    <p>{artist.metadata?.imagem2.legenda}</p>
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
                  <img src={artist.metadata?.imagem3.imagem.url} />
                  <p>{artist.metadata?.imagem3.legenda}</p>
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
