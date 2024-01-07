import { useEffect, useState } from "react";
import { getAllArtists } from "../lib/cosmic.js";
import { Link } from "react-router-dom";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import "../css/artistas.css";

function Artistas() {
  const [posts, setPosts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await getAllArtists();

        fetchedPosts.forEach((post) => {
          const img = new Image();
          img.src = post.metadata.imagem_artista.url;
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
    <div id="PagArtistas" onMouseMove={imagePosition}>
      <Menu page="artistas" />
      {posts.map((post) => (
        <Link to={"/artista/" + post.slug} key={post.slug}>
          <div
            key={post.id}
            className="row artista-list-element"
            onMouseEnter={() => setHoveredIndex(post.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="col-xs-12">
              {hoveredIndex === post.id && (
                <img
                  className="artista-imagem"
                  src={post.metadata.imagem_artista.url}
                  alt="imagem-artista"
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
        </Link>
      ))}
      <Footer />
    </div>
  );
}

export default Artistas;
