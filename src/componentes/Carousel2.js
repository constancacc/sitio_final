import '../css/Carousel2.css';
import image1 from '../imagens/image1.png';
import image2 from '../imagens/image2.png';
import image3 from '../imagens/image3.png';
import image4 from '../imagens/image4.png';
import image5 from '../imagens/image5.png';

const Carousel = () => {
    return (
        <div className="container">
            <div className='image'>
                <img src={image1} alt="image1" />
            </div>

            <div className='image'>
                <img src={image4} alt="image4" />
            </div>

            <div className='image'>
                <img src={image5} alt="image5" />
            </div>

            <div className='image'>
                <img src={image3} alt="image3" />
            </div>

            <div className='image'>
                <img src={image1} alt="image1" />
            </div>

            <div className='image'>
                <img src={image4} alt="image4" />
            </div>

            <div className='image'>
                <img src={image2} alt="image2" />
            </div>

            <div className='image'>
                <img src={image3} alt="image3" />
            </div>

            <div className='image'>
                <img src={image1} alt="image1" />
            </div>

            <div className='image'>
                <img src={image4} alt="image4" />
            </div>
            <div className='image'>
                <img src={image2} alt="image2" />
            </div>

            <div className='image'>
                <img src={image3} alt="image3" />
            </div>

            

   

        </div>
    )
}

export default Carousel;