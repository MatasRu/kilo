import "./style.sass"
import data from "../../helpers/data";
import {useState} from "react";
import expandMore from "./../../svg/expand_more.svg"
import expandLess from "./../../svg/expand_less.svg"

function Faq() {

    const [expanded, setExpanded] = useState([false, true, true, true])

    function changeExpanded(index) {
        let newExpanded = [...expanded]
        newExpanded[index] = !expanded[index]
        setExpanded(newExpanded)
    }

    return (
        <div className="d-flex flex-column faq-container">
            <h3 className="faq-h3">Frequently Asked Questions</h3>
            <div className="faq-grid">
                {data.faq.map((item, index) =>
                    expanded[index] ?
                        <div key={index} className="faq-box" onClick={() => changeExpanded(index)}>
                            <div className="d-flex">
                                <h5>{item.question}</h5>
                                <img className="expand-img" src={expandMore} alt=""/>
                            </div>

                        </div>
                        :
                        <div key={index} className="faq-box" onClick={() => changeExpanded(index)}>
                            <div className="d-flex">
                                <h5>{item.question}</h5>
                                <img className="expand-img" src={expandLess} alt=""/>
                            </div>
                            <p className="faq-p">{item.answer}</p>
                        </div>
                )}
            </div>
            <button className="button">Get your access</button>
        </div>
    );
}

export default Faq;