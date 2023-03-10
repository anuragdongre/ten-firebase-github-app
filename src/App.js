import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';

//toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

//firebase
import firebase from "firebase/app"
import "firebase/auth"
import firebaseconfig from './config/firebaseconfig';

//init firebase
firebase.initializeApp(firebaseconfig);

//components
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


const App = () => {

  const [user, setUser] = useState(null)


  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>
        <Header/>
        <Switch>
          <Route exact path="/" component= {Home }/>
          <Route exact path="/signin" component= {Signin}/>
          <Route exact path="/signup" component= {Signup}/>
          <Route exact path="*" component= {PageNotFound}/>
        </Switch>

         <Footer></Footer>
      </UserContext.Provider>
    </Router>
    
  );
}

export default App;
