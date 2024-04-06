import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import books from './english-fiction-books.jpg';
import { Link } from 'react-router-dom'


function Signup() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const dbobj = { username, email, password };
      const res = await axios.post("http://localhost:3000/signup", dbobj);
      if (res.status) {
        
        console.log("signup successful");
        window.location.href = '/';
        
      }
      else{
        console.log("invalid cresenrtisa ")
      }
    } catch (error) {

      console.error('Error during signup:', error);
    }
  };

  
  

  return (
    <>
      <div className="background-image">
        <img src={books} alt="books" />
      </div>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="name" value={username} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input">
            <input type="email" placeholder="email id" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="submit-container">
        <div className="submit" onClick={handleSignup}>Sign Up</div>
        </div>
      </div>
    </>
  );
}

export default Signup;
