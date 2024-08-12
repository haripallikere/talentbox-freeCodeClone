import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    password: '',
  })
 

  return (
    <div >
      <div >
        <div >logo</div>
      </div>
      <h1>Log in to freeCodeCamp Learn</h1>
      
      <button  >
        <img src="" alt="Google logo"  />
        Continue with Google
      </button>

      <form >
        <div >
          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            id="email"
            value={userData.email}
         
          />
          <label for="username">Name</label>
          <input
            type="text"
            id="username"
            value={userData.username}
          />
          <label for="password">Password*</label>
          <input
            type="password"
            id="password"
            value={userData.password}
      
          />
        </div>
        <button type="submit" >
          Continue with Email
        </button>
      </form>

      <p >
        Don't have an account yet? <Link href="#signup" >Sign up</Link>
      </p>
    </div>
  );
};


export default LoginForm;