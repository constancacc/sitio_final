import { useEffect, useState } from "react";
import { getPrincipalArtists } from "../lib/cosmic.js";

import '../css/carousel2.css';
import { ImageGallery } from "react-image-grid-gallery";


export default function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedPosts = await getPrincipalArtists();
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
            {posts.map((post) => (
                <ImageGallery
                    imagesInfoArray={[
                        {
                            src: post.metadata.imagem_artista.url,
                            thumbnail: post.metadata.imagem_artista.url,
                            caption: post.title,
                        }
                    ]}
                    columnWidth={200}
                    gapSize={15}
                />
            ))}

        </div>
    );
}