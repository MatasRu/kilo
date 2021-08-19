import "./style.sass"
import PlanProgram from "../PlanProgram/PlanProgram";


function FirstProgramPlan() {
    return (
        <div className="first-program-plan d-flex flex-column">
            <p className="first-plan-p">Over <b>52 147</b> plans ordered.</p>
            <h1 className="first-plan-h1">Get access to your yoga program now!</h1>
            <PlanProgram/>
        </div>
    );
}

export default FirstProgramPlan;