import React from 'react';
import "./style.sass"
import data from "../../helpers/data";
import starImage from "../../images/star.png"

function Testimonials() {

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
            <button className="button mt-30">Get your access</button>
        </div>
    );
}

export default Testimonials;