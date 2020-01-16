import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar";
import SoftwarePortfolio from "./pages/SoftwarePortfolio/SoftwarePortfolio";
import Contact from "./pages/Contact/Contact";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={SoftwarePortfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
