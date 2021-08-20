import "./style.sass"
import PlanProgram from "../PlanProgram/PlanProgram";


function SecondProgramPlan() {
    return (
        <div className="second-program-plan d-flex flex-column">
            <h1 className="second-plan-h1">Start your yoga program today!</h1>
            <PlanProgram/>
        </div>
    );
}

export default SecondProgramPlan;