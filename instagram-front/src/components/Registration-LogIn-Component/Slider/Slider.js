import Carousel from 'react-bootstrap/Carousel'
import "./Slider.css"

import img1 from "../../../images/1.jpg"
import img2 from "../../../images/2.jpg"
import img3 from "../../../images/3.jpg"
import img4 from "../../../images/4.jpg"

const Slider = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <div className='slider-image'><img
                className='img'
                src={img4}
                alt="img4"
                /></div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='img'
                src={img2}
                alt="img2"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='img'
                src={img3}
                alt="img3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='img'
                src={img1}
                alt="img1"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider