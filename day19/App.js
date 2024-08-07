
import React, { Component } from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css'; 
import logo from './earth1.avif';
import video from './video1.mp4';
import audio from './audio.mp3';


class Fruits extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <Apple />
        <Banana />
        <Pineapple />
        <LoginForm />
      </div>
    );
  }
}
class Apple extends Component {
  render() {
    return (
      <div>
        <video src={video} className="video" controls width="100%" /> 
      </div>
    );
  }
}

class Banana extends Component {
  render() {
    return (
      <div style={{padding:'0px 260px 0px 60px'}}>
        <img src={logo} className="logo" alt="logo" width="400%" height="100%"/>
      </div>
    );
  }
}

class Pineapple extends Component {
  render() {
    return (
      <div>
        <audio src={audio} className="audio" controls /> 
      </div>
    );
  }
}

class LoginForm extends Component {
  

  render() {
    return (
      <form id="registerForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
        <div style={{ display: 'grid', justifyContent: 'space-evenly', border: '10px', padding: '10px 30px 10px 35px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button">Login</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}



export default Fruits;
