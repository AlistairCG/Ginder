import React from "react";
import "./App.css";

//import for react-router-dom
import { Route, BrowserRouter as Router } from "react-router-dom";

//importing base components
import Home from "./components/views/home";
import Homepage from "./components/views/userHomePage";

//importing user components
import Profile from "./components/views/profile"
import Discover from "./components/views/discover";
import Chats from "./components/views/chats"
import Questionnaire from "./components/views/questionnaire"
import LinkAccounts from "./components/views/linkAccounts"
import Settings from "./components/views/settings"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/homepage" component={Homepage} />
      <Route path="/profile" component={Profile} />
      <Route path="/discover" component={Discover} />
      <Route path="/chats" component={Chats} />
      <Route path="/questionnaire" component={Questionnaire} />
      <Route path="/linkAccounts" component={LinkAccounts} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
}

export default App;
