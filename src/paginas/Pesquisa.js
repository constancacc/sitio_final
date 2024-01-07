import { useEffect, useState } from "react";
import { getAllArtists, getAllGalleries } from "../lib/cosmic.js";
import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";
import "../css/pesquisa.css";
import search from "../imagens/search2.svg";

function Pesquisa() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedGalleries = await getAllGalleries();
        const fetchedArtists = await getAllArtists();

        const combinedPosts = [...fetchedGalleries, ...fetchedArtists];

        setPosts(combinedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, []);

  const filteredPosts = posts.filter(post => {
    const searchTerm = value.toLowerCase();
    const title = post.title.toLowerCase();

    return title.includes(searchTerm);
  });

  return (
    <div id="PagDestaques" >
      <Menu />

      <div className="row">
        <div className="searchContainer">
        <img id="icone_pesquisa" src={search} alt="search"></img>
        <input className="barra_pesquisa"
          type="text" name="search" id="data-search"
          size="40" maxLength="256" value={value} onChange={onChange}
          placeholder="pesquisa por nome de artista ou de galeria" />
          </div>
      </div>
        {value && (
          filteredPosts
          .slice(0, 2)
          .map((post) => (
            <div
              key={post.id}
              className="row list-element"
            >
              <div className="col-xs-12">
                <h1>{post.title}</h1>
                <hr />
              </div>
            </div>
          ))
        )}
      
      <Footer />
      
    </div>
  );
}

export default Pesquisa;
