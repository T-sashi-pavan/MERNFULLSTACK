import React, { Component } from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css'; 
class Task extends Component {
  render() {
    
    return (
       <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <Services/>        
      </div>
    );
  }
  class Service extends Component {
  login() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('Password').value;
    if (username && password) {
      window.location.href = 'Table';
    } else {
      alert('Please enter both username and password.');
    }import React, { Component } from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css'; 
class Task extends Component {
  render() {
    
    return (
       <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <Service/>        
      </div>
    );
  }
  class Service extends Component {


  render() {
    return (
      <form id="registerForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2><br />
        <div style={{ display: 'grid', justifyContent: 'space-evenly',border:'10px solid',  padding: '10px 10px 10px 15px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Enter the day:</label>
            <input type="number" id="day" name="day" required /><br /><br />
            <label htmlFor="newUsername">Enter number of calls:</label>
            <input type="number" id="calls" name="calls" required /><br /><br />
            <label htmlFor="newUsername">Enter number of messages:</label>
            <input type="number" id="messages" name="messages" required /><br /><br />
            <label htmlFor="newUsername">Enter usaged data:</label>
            <input type="number" id="data" name="data" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={() => this.login()}>Login</button>
            </div>
          </div>
        </div>
      </form>

    );
  }
}
export default Task;
  }

  render() {
    return (
      <form id="registerForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2><br />
        <div style={{ display: 'grid', justifyContent: 'space-evenly',border:'10px solid',  padding: '10px 10px 10px 15px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={() => this.login()}>Login</button>
            </div>
          </div>
        </div>
      </form>

    );
  }
}
export default Service;import React, { Component } from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css'; 
class Task extends Component {
  render() {
    
    return (
       <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <Service/>        
      </div>
    );
  }
  class Service extends Component {


  render() {
    return (
      <form id="registerForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2><br />
        <div style={{ display: 'grid', justifyContent: 'space-evenly',border:'10px solid',  padding: '10px 10px 10px 15px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Enter the day:</label>
            <input type="number" id="day" name="day" required /><br /><br />
            <label htmlFor="newUsername">Enter number of calls:</label>
            <input type="number" id="calls" name="calls" required /><br /><br />
            <label htmlFor="newUsername">Enter number of messages:</label>
            <input type="number" id="messages" name="messages" required /><br /><br />
            <label htmlFor="newUsername">Enter usaged data:</label>
            <input type="number" id="data" name="data" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={() => this.login()}>Login</button>
            </div>
          </div>
        </div>
      </form>

    );
  }
}
export default Task;