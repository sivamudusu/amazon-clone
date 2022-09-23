import React, { useState } from 'react'
import "./Login.css"
import { Link,useNavigate } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");


  const signin=e=>{
    // some fancy firebase login shiiit
    auth.signInWithEmailAndPassword(email,password).then(auth=>{
      if(auth){
        navigate("/")
      }
    })
    .catch(error=>alert(error.message))

    e.preventDefault();
  }

  const register=e=>{
    // some fancy firebase register shiitt
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
      // it successfully creates user with email and password
      console.log(auth);
      if(auth){
        navigate("/")
      } 
    })
    .catch(error=>alert(error.message))

      
    e.preventDefault();
  }

  return (
    <div className='login'>
        <Link to="/">
        <img 
        className='login-image' 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00utTcttrMbklc3kbCfWW7KLFHP843iwHAQ&usqp=CAU"
        alt=''

        />
        </Link>
        <div className='login-container'>

          <h1>Sign in</h1>
          <form>
            <h5>Email</h5>
            <input onChange={e=>setEmail(e.target.value)} type="text" value={email} >

            </input>
            <h5>Password</h5>
            <input onChange={e=>setPassword(e.target.value)} type="password" value={password}>

            </input>
            <button type='submit' onClick={signin} className='signin-button'> Sign in</button>
          </form>
          <p>
            by signing in you are agree to amazon clone
            conditions of use sale . please see our
            privacy policy ,our cookie policy and 
            interest based ads notice
          </p>
          <button type='submit' onClick={register} className='signup-button'>Create your amazon account</button>
        </div>
        
    </div>
  )
}

export default Login