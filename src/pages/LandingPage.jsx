import React from 'react';
import './styles/LandingPage.css';
import { useNavigate, Link } from 'react-router-dom';

const LandingPage = () => {


  return (
    <div className="landing-container">
      <div className="background-image"></div>
      <div className="boulevard-highlight"></div> {/* Add this line for the red rectangle */}
      <div className="content-container">
        <div className="text-container">
          <h1 className='one'>Book Boulevard</h1>
          <h2 className='two'>Embark on a Reading Adventure</h2>
          <p className='parag'>Explore Our Vast Library of Stories, Genres, and Authors <br /> Await Your Discovery.</p>
          <p className='parag'>Start Browsing Now</p>
        </div>
        <div className="button-container">
          <Link to={"/"}><button className="btn" data="Browse Library"></button></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
