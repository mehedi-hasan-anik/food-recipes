import { Route, Routes } from "react-router-dom";
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
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/recipes" element={<Recipes></Recipes>}></Route>
            <Route path="/settings" element={<Settings></Settings>}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
