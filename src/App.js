import "./App.css";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plan from "./components/Plan/Plan";
import Programs from "./components/Programs/Programs";
import Reason from "./components/Reasons/Reason";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
    return (
        <div className="App">
            <Hero />
            <Programs />
            <Reason />
            <Plan />
            <Testimonials />
            <Join />
        </div>
    );
}

export default App;
