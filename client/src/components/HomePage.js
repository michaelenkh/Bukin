import React, { Component } from 'react';
import './HomePage.css'
import BackgroundVideo from './backgroundVideo'
import ModalWindow from './react-materialize';

// import LoginSignup from './LoginSignup'
// import ModalPopOut from './ModalPopOut'

class HomePage extends Component {

  render() {
    return (

      // <div className="video"> 
      //     <iFrame frameBorder="0" height="100%" width="100%" src='https://www.youtube.com/embed/NtCM2O9v9mQ?autoplay=1&amp;controls=0&amp;loop=1&amp;rel=0&amp;showinfo=0&amp;autohide=1&amp;wmode=transparent&amp;hd=1'></iFrame>
      // </div>
      <div>
        <BackgroundVideo />
        <button className="logo btn-flat">BÜKIN</button>
        <button className="help btn-flat">Help</button>
        <ModalWindow />
        {/* <a className="bookNow btn-flat waves-effect waves-light modal-trigger" href="#modal1">Book Now</a> */}
      </div>

    )
  }
}

export default HomePage;
