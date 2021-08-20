import StickyHeader from "./components/StickyHeader/StickyHeader";
import Header from "./components/Header/Header";
import FirstProgramPlan from "./components/FirstProgramPlan/FirstProgramPlan";
import Testimonials from "./components/Testimonials/Testimonials";
import FacebookCom from "./components/FacebookCom/FacebookCom";
import WhyYoga from "./components/WhyYoga/WhyYoga";
import Faq from "./components/Faq/Faq";
import SecondProgramPlan from "./components/SecondProgramPlan/SecondProgramPlan";

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
                <WhyYoga/>
            </div>
            <div className="wrapper">
                <Faq/>
            </div>
            <div className="wrapper">
                <FacebookCom/>
            </div>
            <div className="wrapper">
                <SecondProgramPlan/>
            </div>
        </div>
    );
}

export default App;
