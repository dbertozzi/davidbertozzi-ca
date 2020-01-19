import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

const App: React.FC = () => {
  const navItems: { label: string; path: string }[] = [
    { label: "About", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" }
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
