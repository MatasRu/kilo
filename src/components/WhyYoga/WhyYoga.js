import "./style.sass"
import data from "../../helpers/data";
import mobileImg from "./../../images/app_screens-f46ae641ef820426c7f62e2de6266d48.jpg"
import Vector from "./../../images/Vector.png"

function WhyYoga() {
    return (
        <div className="why-container">
            <div className="why-grid">
                <div className="d-flex flex-column">
                    <h3>Start your yoga journey now!</h3>
                    <img className="app-img" src={mobileImg} alt=""/>
                </div>
                <div className="d-flex flex-column">
                    <h3>Is Positive Yoga right for me?</h3>
                    <ul className="why-ul why-ul-grid">
                        {data.whyYoga.map((item, index) =>
                            <li className="d-flex" key={index}>
                                <div>
                                    <img className="why-vector" src={Vector} alt=""/>
                                </div>
                                <p className="why-p">{item}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WhyYoga;