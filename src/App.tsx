import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar";
import SoftwarePortfolio from "./pages/SoftwarePortfolio/SoftwarePortfolio";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/software" component={SoftwarePortfolio} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
