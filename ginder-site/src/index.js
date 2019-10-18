import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import for react-router-dom
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'

//importing all components
import  Discover  from './components/discover';
import  Groups  from './components/groups';
import  Homepage  from './components/homepage';
import  Login  from './components/login';
import  MyGroups  from './components/mygroups';
import  NewGroup  from './components/newgroup';
import  Registration  from './components/registration';

import * as serviceWorker from './serviceWorker';

//configure routing
const routing = (
    <Router>
            <Route path="/" component={App} />
            <Route path="/discover" component={Discover} />
            <Route path="/groups" component={Groups} />
            <Route path="/homepage" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/myGroups" component={MyGroups} />
            <Route path="/newGroup" component={NewGroup} />
            <Route path="/registration" component={Registration} />
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
