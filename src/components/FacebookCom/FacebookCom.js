import "./style.sass"
import data from "../../helpers/data"

function FacebookCom() {
    return (
        <div className="facebook-container d-flex flex-column">
            <h3>Facebook comments</h3>
            <div className="facebook-grid">
                {data.fbTestimonials.map((item, index) =>
                    <img className="fb-testimonial-img" key={index} src={item} alt=""/>
                )}
            </div>
        </div>
    );
}

export default FacebookCom;