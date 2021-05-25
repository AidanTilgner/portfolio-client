//modules
import { Switch, Route, Redirect } from "react-router-dom";

//components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Porfolio";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";

//files
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route path="/resume">
                    <Resume/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
