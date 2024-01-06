import { useEffect, useState } from "react";
import { getAllGalleries } from "../lib/cosmic.js";

import { Link } from "react-router-dom";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import location from '../imagens/location.svg';
import clock from '../imagens/Clock.svg';
import arrow from '../imagens/arrow.svg';

import "../css/galerias.css";

function Galerias() {
  const [posts, setPosts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const [clicked, setClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllGalleries();

        fetchedPosts.forEach((post) => {
          const img = new Image();
          img.src = post.metadata.imagem_galeria.url;
        });

        console.log(fetchedPosts);

        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, []);

  const imagePosition = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const toggleColor = () => {
    setClicked(!clicked);
  };

  return (
    <div id="PagDestaques" onMouseMove={imagePosition}>
      <Menu />
      {posts.map((post) => (
        <div
          key={post.id}
          className={`row galeria-list-element ${selectedIndex === post.id ? 'clicked' : ''}`}
          onMouseEnter={() => setHoveredIndex(post.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setSelectedIndex(post.id)}
        >
          <div className="col-xs-12">
            {hoveredIndex === post.id && (
              <img
                className="galeria-imagem"
                src={post.metadata.imagem_galeria.url}
                alt="imagem-galeria"
                style={{
                  top: mousePosition.y,
                  left: mousePosition.x,
                }}
              />
            )}
            <h1>{post.title}</h1>
            <hr />
            {selectedIndex === post.id && (
              <div className="galeria-list-element-expanded">
                <div className="galeria-list-content-expanded">
                  <img src={location} alt="location" className="icons" />
                  <p>{post.metadata.localizacao_galeria}</p>
                  <img src={clock} alt="clock" className="icons" />
                  <p>{post.metadata.horario_galeria}</p>
                  <Link to="/galeria" className="button-link">
                    <img src={arrow} alt="arrow" className="button" />
                  </Link>
                </div>

              </div>
            )}

          </div>

        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Galerias;
