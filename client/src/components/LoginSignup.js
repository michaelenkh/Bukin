import React, { Component } from 'react';
// import './loginSignup.css'



class LoginSignup extends Component {
  render() {
    return (
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
        <i className="material-icons prefix">person</i>
          <input placeholder="Fullname" id="fullname" type="text" className="validate" />
          <label for="full_name">Fullname</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
        <i className="material-icons prefix">phone</i>
          <input placeholder="Phonenumber" id="phoneNumber" type="tel" className="validate" />
          <label for="phone_number">Phone Number</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
        <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">message</i>
          <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
          <label for="icon_prefix2">message</label>
        </div>
      </div>
      <button className="btn">Book Now</button>
    </form>
  </div>

    </form>
  </div>
    )
  }
}

export default LoginSignup;
