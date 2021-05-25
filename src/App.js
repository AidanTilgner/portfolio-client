//modules
import { Switch, Route, Redirect } from "react-router-dom";

//components
import Home from "./pages/Home/Home";

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
            </Switch>
        </div>
    );
}

export default App;
