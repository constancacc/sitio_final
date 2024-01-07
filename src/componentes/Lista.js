import { React, useEffect, useState } from "react";
import { getAllArtists, getAllGalleries} from "../lib/cosmic.js";


function Lista(props) {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const fetchedGalleries = await getAllGalleries();
          const fetchedArtists = await getAllArtists();
  
          const combinedPosts = [...fetchedGalleries, ...fetchedArtists];
  
          const filteredData = combinedPosts.filter((el) => {
            if (props.input === '') {
                return el;
            } else {
                return el.text.toLowerCase().includes(props.input)
            }
        });
    
          setPosts(filteredData);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
      fetchData();
    }, []);

  
    return (
      <div id="PagDestaques" >
        <div className="row" style={{height: "5vw"}}></div>
        
          
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
      </div>
    );
  }
  
  export default Lista;