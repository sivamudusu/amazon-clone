import logo from './logo.svg';
import React,{useEffect} from "react"
import './App.css';
import Header  from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './Stateprovider';


function App() {

  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    // will only listen when the app components load..

    auth.onAuthStateChanged(authUser=>{
      console.log("the user is ",authUser);

      if(authUser){
        // the user logged in 
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        // the user logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })

  },[])
  return (
    <Router>

    <div className="app">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}>
      {/* <Header/>
      <Home/> */}

      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={<Checkout/>}></Route>
    </Routes>
      
    </div>

    </Router>
    
  );
}

export default App;
