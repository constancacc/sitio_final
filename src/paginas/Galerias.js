import { useEffect, useState } from "react";
import { getAllGalleries } from "../lib/cosmic.js";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import "../css/galerias.css";

function Galerias() {
  const [posts, setPosts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

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

  return (
    <div id="PagDestaques" onMouseMove={imagePosition}>
      <Menu />
      {posts.map((post) => (
        <div
          key={post.id}
          className="row galeria-list-element"
          onMouseEnter={() => setHoveredIndex(post.id)}
          onMouseLeave={() => setHoveredIndex(null)}
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
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Galerias;
