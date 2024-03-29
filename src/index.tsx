import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "src/view/container/main/login/login";
import Home from "src/view/container/main/home/home";
import UserProfile from "src/view/container/main/User_profile/user_profile";
import projectPage from "src/view/container/main/projectPage/projectPage";
import SignUp from "src/view/container/main/Sign_up/sing_up";

ReactDOM.render((
    <Router>
        {/*<Route path = "/" component = {App}>*/}
        {/*</Route>*/}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path = "/home" component = {Home}/>
        <Route exact path = "/user/:userid" component = {UserProfile}/>
        <Route exact path = "/project/:porjectid" component = {projectPage}/>
    </Router>
), document.getElementById('root'));
// ReactDOM.render(<Router>
//         <Route exact path="/login" component={Login}/>{
//
//     }
//     </Router>,
//     <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
