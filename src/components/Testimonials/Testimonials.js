import {useState, useEffect} from 'react';
import "./style.sass"
import data from "../../helpers/data";
import starImage from "../../images/star.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 480);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    function stars(rating) {
        let starsArr = []
        for (let i = 0; i < rating; i++) {
            starsArr.push(<img key={i} className="star-img" src={starImage} alt=""/>)
        }
        return starsArr
    }

    return (
        <div className="testimonials-container d-flex flex-column">
            <h3 className="testimonial-h3">Hear success stories from our clients</h3>

            {isDesktop ? (
                <div className="testimonials-grid">
                    {data.testimonials.map((item, index) =>
                        <div key={index} className="testimonials-box d-flex flex-column ">
                            <h5>{item.name}, {item.age}</h5>
                            <p className="testimonials-city">{item.city}</p>
                            <div className="rating">{stars(item.rating)}</div>
                            <img className="testimonial-img" src={item.image} alt={item.name}/>
                            <p className="description">{item.description}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="slick-margin">
                    <Slider {...settings}>
                        {data.testimonials.map((item, index) =>
                            <div key={index} className="testimonials-box d-flex flex-column ">
                                <h5>{item.name}, {item.age}</h5>
                                <p className="testimonials-city">{item.city}</p>
                                <div className="rating">{stars(item.rating)}</div>
                                <img className="testimonial-img" src={item.image} alt={item.name}/>
                                <p className="description">{item.description}</p>
                            </div>
                        )}
                    </Slider>
                </div>
            )}
            <button className="button mt-30">Get your access</button>
        </div>
    );
}

export default Testimonials;