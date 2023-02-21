import React, { useState } from 'react';
import './Loginform.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    

    axios.post('http://localhost:8090/welcome/login',{username:username,password:password})
        .then(response => {
          //console.log(response.data);
          if(response.status===200 && Object.keys(response.data)[0]=="admin" || Object.keys(response.data)[0]=="user")
          {
            
            localStorage.setItem("token",response.data[Object.keys(response.data)[0]])
            localStorage.setItem("role",Object.keys(response.data))
            console.log(localStorage.getItem("token"))
            console.log(localStorage.getItem("role"))
            
            navigate("/welcome")
            //<PrivateRoute path="/welcome" component={Welcome} />
          }          
          else{
            alert("User not found!")
          }
        })
        .catch(error => {
          console.log("weeeer")
        });
    }
    
    
    // submit the form and send a request to the backend to authenticate the user's credentials
  

  return (
    <div>
      <header>
        <h1 id="heading-login-page">BOOKSTORE</h1>
      </header>
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit" className="login-button">Log in</button>
    </form>

    </div>
  );
}

export default LoginForm;
