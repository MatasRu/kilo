import "./style.sass"

function PlanProgram() {
    return (
        <div className="plan-program-grid">
            <div className="d-flex flex-column">
                <h3 className="plan-h3">Choose your plan and get <span className="colored-text">7 days free trial</span>
                </h3>
                {/*PLAN 1*/}
                <div className="plan-select-box">
                    <h5>6 months plan</h5>
                    <div className="d-flex align-items-center">
                        <h1 className="plan-h1">$9.99 </h1><p> / month</p>
                    </div>
                    <p className="plan-p">$119.94 <b>$59.94</b> billed every 6 months</p>
                </div>
                {/*PLAN 2*/}
                <div className="plan-select-box">
                    <h5>3 months plan</h5>
                    <div className="d-flex align-items-center">
                        <h1 className="plan-h1">$14.99 </h1><p> / month</p>
                    </div>
                    <p className="plan-p">$59.97 <b>$44.97</b> billed every 3 months</p>
                </div>
                {/*PLAN 3*/}
                <div className="plan-select-box">
                    <h5>1 month plan</h5>
                    <div className="d-flex align-items-center">
                        <h1 className="plan-h1">$19.99 </h1><p> / month</p>
                    </div>
                    <p className="plan-p"><b>$19.99</b> billed every month</p>
                </div>
            </div>
            <div className="d-flex flex-column">
                <h3 className="plan-h3">What's in my program?</h3>
                <div className="program-grid">
                    <ul>
                        <li>asfasafs</li>
                        <li>asfasasfasf</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PlanProgram;