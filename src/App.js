// import logo from "./logo.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Functional/HomePage";
// import CardComp from "./Components/Functional/Card";
import NavbarComp from "./Components/Functional/NavbarComp";
import AboutPage from "./Components/Functional/AboutPage";
// import DetailPage from "./Components/Functional/DetailPage";
import DetailComp from "./Components/Functional/DetailComp";
import Blog from "./Components/Functional/Blog";
// import NavbarComp from "./Components/Functional/NavbarComp";
// import Home from "./Components/Functional/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/detail/:id" component={DetailComp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
