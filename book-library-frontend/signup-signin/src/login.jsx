import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import book from './book2.jpg';
import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);

  const handleLogin = async () => {
    try {
      const userCredentials = { email, password };
      const res = await axios.post("http://localhost:3000/login", userCredentials);
      console.log(res.data.status);
      if (res.data.status==true) {
        console.log("Login successful");
      
        window.location.href = '/Home';
        
        
      
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  


  return (
    <>
      <div className="background-image">
        <img src={book} alt="book" />
      </div>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="email" placeholder="email id" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit" onClick={handleLogin}>Login</div>
          <Link to="/signup" className="submit">Sign Up</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
