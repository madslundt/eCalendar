import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, Event, Settings } from "./pages";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header
        title="e-Calendar"
      />

      <Route exact path="/" component={Home} />
      <Route exact path="/event" component={Event} />
      <Route path="/event/:id" component={Event} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
};

export default hot(App);
