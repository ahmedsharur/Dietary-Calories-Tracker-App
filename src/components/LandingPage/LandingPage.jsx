import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          Dietary tracker app is an app that users can use in-order to track 
          the amount of fats, proteins, carbohydrates, and calories in their food. 
          They can track the total amount of calories they consume in their 
          daily meals whether it’s breakfast, lunch and dinner. 
          The app will help the users to lose weight and stay healthy 
          if they regularly calculate the total amount of 
          calories that they consume in every meal. 
          They will be able to add their food portions consumed for each meal 
          of the day, and nutrition totals will update accordingly.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
