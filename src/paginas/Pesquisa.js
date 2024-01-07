import { useEffect, useState } from "react";
import { getAllArtists, getAllGalleries} from "../lib/cosmic.js";


import Menu from "../componentes/Menu.js";
import Footer from "../componentes/Footer.js";

import "../css/pesquisa.css";

function Pesquisa() {
  const [posts, setPosts] = useState([]);

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




  return (
    <div id="PagDestaques" >
      <Menu />
      <div className="row" style={{height: "5vw"}}></div>
      
      <input 
        type="text" name="search" id="data-search"
        size="40" maxlength="256" value=""
        placeholder="Pesquisa por nome da obra ou tipo de arte"/>
        
      {posts.map((post) => (
        <div
          key={post.id}
          className="row list-element"
        >
          <div className="col-xs-12">
            <h1>{post.title}</h1>
            <hr />
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Pesquisa;
