import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <div>
          <img
            src=''
            alt='freeCodeCamp'
         
          />
          <span>freeCodeCamp</span>
          <input
            type='text'
            placeholder='Search 8,000+ tutorial'
      
          />
        </div>
        <div>
          <button>Menu</button>
          <button onClick={handleLogin}>
            Sign in
          </button>
        </div>
      </nav>

      <section>
        <h1>Learn to code — for free.</h1>
        <h2>Build projects.</h2>
        <h2>Earn certifications.</h2>

        <p>
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>

        <div>
          <img
            src=''
            alt='Apple'
          />
          <img
            src=''
            alt='Google'
          />
          <img
            src=''
            alt='Microsoft'
   
          />
          <img
            src=''
            alt='Spotify'
          
          />
          <img
            src=''
            alt='Amazon'
       
          />
        </div>
        <button>Get started (it's free)</button>
      </section>
    </div>
  );
};

export default HomePage;
