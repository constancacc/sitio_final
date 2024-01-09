import { useEffect, useState } from "react";
import { getAllArtists } from "../lib/cosmic.js";

import { Link } from "react-router-dom";

import '../css/carousel2.css';

export default function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedPosts = await getAllArtists();
                console.log("Fetched Posts:", fetchedPosts);

                const destaquesPosts = fetchedPosts.filter(post => post.metadata.destaque === true);

                setPosts(destaquesPosts);
                console.log("Destaques Posts:", destaquesPosts);

            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='image-gallery-container'>
            <div className='image-grid'>
                {posts.map((post) => {

                    return (
                        <Link to={"/artista/" + post.slug}
                            key={post.slug}
                            className='grid-item'>
                            <img
                                src={post.metadata.imagem_artista.url}
                                alt={post.title}
                            />
                            <div className='col-lg-12 caption'>
                                <div className='textCaption'>
                                    <h5>{post.title}</h5>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
