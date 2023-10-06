import "./App.css";
import Hero from "./components/Hero/Hero";
import Plan from "./components/Plan/Plan";
import Programs from "./components/Programs/Programs";
import Reason from "./components/Reasons/Reason";

function App() {
    return (
        <div className="App">
            <Hero />
            <Programs />
            <Reason />
            <Plan />
        </div>
    );
}

export default App;
