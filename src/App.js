import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <div className="container main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
