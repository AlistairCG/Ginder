import React from 'react';
import './App.css';

//import for react-router-dom
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'

//importing all components
import Home from './components/views/home';
import Discover  from './components/views/discover';
import Groups  from './components/views/groups';
import Homepage  from './components/views/userHomePage';
import Login  from './components/views/login';
import MyGroups  from './components/views/mygroups';
import NewGroup  from './components/views/newgroup';
import Registration  from './components/views/registration';

function App() {
  return (
    <Router>
            <Route path="/" component={Home} />
            <Route path="/discover" component={Discover} />
            <Route path="/groups" component={Groups} />
            <Route path="/homepage" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/myGroups" component={MyGroups} />
            <Route path="/newGroup" component={NewGroup} />
            <Route path="/registration" component={Registration} />
    </Router>
  );
}

export default App;
