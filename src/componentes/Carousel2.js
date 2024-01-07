import '../css/carousel2.css';
import image1 from '../imagens/image1.png';
import image2 from '../imagens/image2.png';
import image3 from '../imagens/image3.png';
import image4 from '../imagens/image4.png';
import image5 from '../imagens/image5.png';
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
    {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: image1,
    },
    {
        alt: "Image2's alt text",
        caption: "Image2's description",
        src: image2,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: image3,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: image4,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: image5,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: image4,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: image5,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: image4,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: image5,
    },
    {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: image1,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: image4,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: image5,
    },
    {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: image1,
    },
];


  export default function App() {
    return (
      <div className='image-gallery-container'>
        <ImageGallery
          imagesInfoArray={imagesArray}
          columnWidth={200}
          gapSize={15}
        />
      </div>
    );
  }