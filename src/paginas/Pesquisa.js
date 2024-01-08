import { useEffect, useState } from "react";
import { getAllArtists, getAllGalleries } from "../lib/cosmic.js";
import { Link } from "react-router-dom";

import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import search from "../imagens/search2.svg";

import "../css/pesquisa.css";



function Pesquisa() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedGalleries = await getAllGalleries();
        const fetchedArtists = await getAllArtists();

        const galleriesWithType = fetchedGalleries.map(galeria => ({ ...galeria, type: 'galeria' }));
        const artistsWithType = fetchedArtists.map(artista => ({ ...artista, type: 'artista' }));

        const combinedPosts = [...galleriesWithType, ...artistsWithType];

        setPosts(combinedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const searchTerm = value.toLowerCase();
    const title = post.title.toLowerCase();

    return title.includes(searchTerm);
  });

  return (
    <div id="PagDestaques">
      <Menu page="index" />

      <div className="row">
        <div className="searchContainer">
          <img id="icone_pesquisa" src={search} alt="search"></img>
          <input
            className="barra_pesquisa"
            type="text"
            name="search"
            id="data-search"
            size="40"
            maxLength="256"
            value={value}
            onChange={onChange}
            placeholder="pesquisa por nome de artista ou de galeria"
          />
        </div>
      </div>
      <div id="resultados_pesquisa">
      {value &&
        filteredPosts.map((post) => (
          console.log(post),
          <Link to={"/"+ post.type + "/" + post.slug} key={post.slug}>
          <div key={post.id} className="row list-element">
            <div className="col-xs-12">
              <h1>{post.title}</h1>
              <hr />
            </div>
          </div>
          </Link>
        ))}
    </div>
      <Footer />
    </div>
  );
}

export default Pesquisa;
