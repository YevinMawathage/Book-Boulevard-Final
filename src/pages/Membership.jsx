import React from 'react'
import './styles/Membership.css'

export default function About() {
  return (
    <div className='whole'>

      <div className="title">
        <h1>
          Welcome to our <br />
          <span className='highlight'>Membership </span>Program!
        </h1>
      </div>

      <div className="title-description">
        <p className='paraone'>
          As a member, 
          you'll unlock a world of exclusive benefits, resources, 
          and opportunities tailored to your needs and interests.
        </p>
        <p className='paratwo'>
          Choose from our range of membership packages below to find the perfect fit for you. 
          Whether you're looking to connect with like-minded individuals, access premium content, or take 
          advantage of professional development opportunities, we have a membership option 
          designed to meet your requirements.
        </p>
        <p className='parathree'>     
          Thank you for choosing to be part of our community!
        </p>
      </div>
      
       
      <div class="container">

          <div class="cards">
            <h2>Basic Membership</h2>
            <p className='para'>This package is designed for individuals who primarily want to access and read eBooks from the platform. It offers essential features for a seamless reading experience.</p>
         
            <button class="but" onclick="window.location.href='another-page.html'">view</button>
          </div>

          <div class="cardtwo">
            <h2>Standard Membership</h2>
            <p className='para'>You'll receive exclusive access to our carefully curated newsletter, delivering insights, updates, and invitations to upcoming events directly to your inbox every month.</p>
           
            <button class="but" onclick="window.location.href='another-page.html'">view</button>
          </div>

          <div class="cardthree">
            <h2>Premium Membership</h2>
            <p className='para'>Gain access to our dynamic forums where you can connect with peers, exchange ideas, and participate in and participate in discussions on various topics.</p>
            
            <button class="but" onclick="window.location.href='another-page.html'">view</button>         
          </div>
      </div>
    </div>
  )
}
