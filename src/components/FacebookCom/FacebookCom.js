import "./style.sass"
import {useState, useEffect} from 'react';
import data from "../../helpers/data"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FacebookCom() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.7,
        slidesToScroll: 1
    }

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 480);
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    })

    return (
        <div className="facebook-container d-flex flex-column">
            <h3>Facebook comments</h3>
            {isDesktop ? (
                <div className="facebook-grid">
                    {data.fbTestimonials.map((item, index) =>
                        <img className="fb-testimonial-img" key={index} src={item} alt=""/>
                    )}
                </div>
            ) : (
                <div>
                    <Slider {...settings}>
                        {data.fbTestimonials.map((item, index) =>
                            <img className="fb-testimonial-img" key={index} src={item} alt=""/>
                        )}
                    </Slider>
                </div>
            )}
        </div>
    );
}

export default FacebookCom;