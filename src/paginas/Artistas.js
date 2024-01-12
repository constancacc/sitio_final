import { useEffect, useState } from "react";
import { getAllArtists } from "../lib/cosmic.js"; // TODOS OS ARTISTAS
import { Link } from "react-router-dom";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import "../css/artistas.css";

function Artistas() {
  const [artists, setArtists] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 }); // POSIÇÃO DO RATO | VALOR INICIAL PARA ESCONDER IMAGENS

  // FETCH DOS ARTISTAS
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllArtists();

        fetchedPosts.forEach((artist) => {
          const img = new Image();
          img.src = artist.metadata.imagem_artista.url;
        });

        console.log(fetchedPosts);

        setArtists(fetchedPosts);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData();
  }, []);

  // POSIÇÃO DA IMAGEM RELATIVA AO RATO
  const imagePosition = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div id="PagArtistas" onMouseMove={imagePosition}>
      <Menu page="artistas" />
      {artists.map((artist) => (
        <Link to={"/artista/" + artist.slug} key={artist.slug}>
          <div
            key={artist.id}
            className="row artista-list-element"
            onMouseEnter={() => setHoveredIndex(artist.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="col-xs-12">
              {hoveredIndex === artist.id && (
                <img
                  className="artista-imagem"
                  src={artist.metadata.imagem_artista.url}
                  alt="imagem-artista"
                  style={{
                    top: mousePosition.y,
                    left: mousePosition.x,
                  }}
                />
              )}
              <h1>{artist.title}</h1>
              <hr />
            </div>
          </div>
        </Link>
      ))}
      <Footer />
    </div>
  );
}

export default Artistas;
