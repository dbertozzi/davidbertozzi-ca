import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

const App: React.FC = () => {
  let navItems: { label: string; path: string; class: string }[] = [
    { label: "About", path: "/", class: "" },
    { label: "Projects", path: "/projects", class: "" },
    { label: "Contact", path: "/contact", class: "" }
  ];
  return (
    <BrowserRouter>
      <Header navItems={navItems} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
