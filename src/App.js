import StickyHeader from "./components/StickyHeader/StickyHeader";
import Header from "./components/Header/Header";
import Testimonials from "./components/Testimonials/Testimonials";
import FacebookCom from "./components/FacebookCom/FacebookCom";
import FirstProgramPlan from "./components/FirstProgramPlan/FirstProgramPlan";

function App() {
    return (
        <div>
            <StickyHeader/>
            <Header/>
            <div className="wrapper">
                <FirstProgramPlan/>
            </div>
            <div className="wrapper">
                    <Testimonials/>
            </div>
            <div className="wrapper">
                    <FacebookCom/>
            </div>
            <div className="wrapper">
                    <Testimonials/>
            </div>


        </div>
    );
}

export default App;
