import { useEffect, useState } from "react";
import { getAllArtists } from "../lib/cosmic.js";
import { useParams } from "react-router-dom";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import galeria from "../imagens/galeria.png";
import "../css/paginasInfo.css";

function ArtistaInfo() {
  //   const { slug } = useParams();
  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const fetchedPosts = await getAllArtists();

  //         console.log(fetchedPosts);

  //         setPosts(fetchedPosts);
  //       } catch (error) {
  //         console.error("Error fetching posts:", error);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  return (
    <div id="PagArtistaInfo">
      <Menu page="artistas" />
      <div className="info-container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div id="info-container">
              <div className="row middle-lg">
                <div className="col-lg-6">
                  <div id="info-titulo">
                    <h1>Vhils</h1>
                    <div id="info-rect"></div>
                  </div>
                  <div id="info-description">
                    <p>
                      O trabalho de Vhils faz parte da chamada Street Art ou
                      arte urbana, cuja popularidade explodiu justamente graças
                      ao graffiti dos anos 1970 em Nova York.
                      <br />
                      <br />
                      Como toda arte, o graffiti é uma expressão pessoal e
                      subjetiva que pode assumir a forma de rubrica, protesto
                      político-social ou procurar um propósito puramente
                      estético.
                    </p>
                  </div>
                  <div id="info-imagem1">
                    <img src={galeria} />
                    <p>exposição tal e tal</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div id="info-imagem2">
                    <img src={galeria} />
                    <p>exposição tal e tal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="row end-lg">
              <div className="col-lg-8">
                <div id="info-imagem3">
                  <img src={galeria} />
                  <p>exposição tal e tal</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ArtistaInfo;
