import "./style.sass"
import safePayment from "./../../images/safe_payment-23fda9d35a9b235a92b7fce376d0d489.jpg"
import circle from "./../../images/circle.png"
import checkCircle from "./../../images/mdi_check_circle.png"
import data from "../../helpers/data"
import {useState} from "react";

function PlanProgram() {

    const [selectedBox, setSelectedBox] = useState([true, false, false])

    function selectPlan(index) {
        let select = [...selectedBox]
        select.forEach((item, num) => {
            select[num] = false
        })
        select[index] = true
        setSelectedBox(select)
    }

    return (
        <div className="plan-program-grid">
            <div className="d-flex flex-column">
                <h3 className="plan-h3">Choose your plan and get <span className="colored-text">7 days free trial</span>
                </h3>
                {data.plans.map((item, index) =>
                    selectedBox[index] ?
                        <div key={index} className="plan-select-box plan-selected " onClick={() => selectPlan(index)}>
                            <h5>{item.plan} <span className="discount-span">{item.discount}</span></h5>
                            <div className="d-flex align-items-center">
                                <h1 className="plan-h1">{item.price} </h1>
                                <p> / month</p>
                                <img className="circle-img" src={checkCircle} alt=""/>
                            </div>
                            <p className="plan-p"><span className="line-through">{item.underlined}</span>
                                <b>{item.bold}</b> {item.plain}</p>
                        </div>
                        :
                        <div key={index} className="plan-select-box" onClick={() => selectPlan(index)}>
                            <h5>{item.plan} <span className="discount-span">{item.discount}</span></h5>
                            <div className="d-flex align-items-center">
                                <h1 className="plan-h1">{item.price} </h1>
                                <p> / month</p>
                                <img className="circle-img" src={circle} alt=""/>
                            </div>
                            <p className="plan-p"><span className="line-through">{item.underlined}</span>
                                <b>{item.bold}</b> {item.plain}</p>
                        </div>
                )}
                <button className="button mt-30">Get your plan</button>
                <p className="small-p">Your free trial will automatically become a paid subscription on the 8th day
                    after you begin your trial. To cancel your subscription, please contact us at least 24 hours before
                    the end of the trial period.</p>
                <p className="small-p">By choosing a payment method you, agree to the T&Cs and Privacy Policy</p>
                <img className="safe-payment-img" src={safePayment} alt="payment-safe"/>
            </div>
            <div className="d-flex flex-column">
                <h3 className="program-h3">What's in my program?</h3>
                <ul className="program-grid">
                    {data.programInfo.map((item, index) =>
                        <li className="d-flex program-grid" key={index}>
                            <div className="d-flex">
                                <div className="icons">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div>
                                    <h5 className="program-h5">{item.title}</h5>
                                    <p className="program-p">{item.description}</p>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default PlanProgram;