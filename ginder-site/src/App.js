import React from 'react';
import './App.css';

//import for react-router-dom
import { Route, BrowserRouter as Router} from 'react-router-dom'

//importing all components
import Home from './components/views/home';
import Discover  from './components/views/discover';
import Groups  from './components/views/groups.js';
import Homepage  from './components/views/userHomePage';
import Login  from './components/views/login';
import MyGroups  from './components/views/myGroups';
import NewGroup  from './components/views/newGroups';
import Registration  from './components/views/registration';
import Profile from './components/views/profile';

function App() {
  return (
    <Router>
            <Route exact path="/" component={Home} />
            <Route path="/discover" component={Discover} />
            <Route path="/groups" component={Groups} />
            <Route path="/homepage" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/mygroups" component={MyGroups} />
            <Route path="/newGroup" component={NewGroup} />
            <Route path="/registration" component={Registration} />
            <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
