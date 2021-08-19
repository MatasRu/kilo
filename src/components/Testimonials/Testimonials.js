import React from 'react';
import "./style.sass"
import data from "../../helpers/data";

function Testimonials() {
    return (
        <div className="testimonials-container d-flex flex-column">
            <h3>Hear success stories from our clients</h3>
            <div className="testimonials-grid">
                {data.testimonials.map((item, index) =>
                    <div key={index} className="testimonials-box d-flex flex-column ">
                        <h5>{item.name}, {item.age}</h5>
                        <p className="testimonials-city">{item.city}</p>
                        <div className="rating">{item.rating}</div>
                        <img className="testimonial-img" src={item.image} alt={item.name}/>
                        <p className="description">{item.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Testimonials;