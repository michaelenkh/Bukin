import React, { Component } from 'react';
import './HomePage.css'
import LoginSignup from './LoginSignup'




class HomePage extends Component {
  render() {
    return (
  <div>
  <button className="logo btn-flat">BÜKIN</button>
  <button className="help btn-flat">Help</button>
  <button className="bookNow btn-large btn-flat">Book Now</button>
  <LoginSignup />
    </div>
    )
  }
}

export default HomePage;
