import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('Password').value;
    if (username && password) {
      this.setState({ isLoggedIn: true });
    } else {
      alert('Please enter both username and password.');
    }
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div style={{ display: 'grid', justifyContent: 'space-evenly' }}>
        {!isLoggedIn ? (
          <RegisterForm handleLogin={this.handleLogin} />
        ) : (
          <Table handleLogout={this.handleLogout} />
        )}
      </div>
    );
  }
}

class RegisterForm extends Component {
  render() {
    return (
      <form id="registerForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2><br />

        <div style={{ display: 'grid', justifyContent: 'space-evenly', border: '10px solid', padding: '10px 30px 10px 35px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={this.props.handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 60,
    };
  }

  componentDidMount() {a
    this.interval = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timer <= 1) {
          clearInterval(this.interval);
          alert('Time is up!');
          this.props.handleLogout();
          return { timer: 0 };
        }
        return { timer: prevState.timer - 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  editRow = (button) => {
    const row = button.closest('tr');
    const inputs = row.querySelectorAll('input');
    const isReadOnly = inputs[0].readOnly;
    inputs.forEach(input => input.readOnly = !isReadOnly);
    button.textContent = isReadOnly ? 'Save' : 'Edit';
  };

  deleteRow = (button) => {
    const row = button.closest('tr');
    row.remove();
  };

  render() {
    const { timer } = this.state;
    const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
    const seconds = (timer % 60).toString().padStart(2, '0');

    return (
      <div style={{ display: 'grid', justifyContent: 'space-evenly', padding: '70px 10px 140px', background: 'transparent' }}>
        <h1 style={{ textAlign: 'center' }}>Employee details</h1>

        <table border="10" style={{ background: 'pink' }}>
          <thead>
            <tr>
              <th>Empid</th>
              <th>Empname</th>
              <th>Age</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="number" name="empid" value="1" readOnly /></td>
              <td><input type="text" name="empname" value="Sashi" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="sessi@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="guntur" readOnly /></td>
              <td><input type="number" name="salary" value="8765456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="2" readOnly /></td>
              <td><input type="text" name="empname" value="Aslam" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="sei@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="tirupati" readOnly /></td>
              <td><input type="number" name="salary" value="764356" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="3" readOnly /></td>
              <td><input type="text" name="empname" value="Ali" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="sasmi@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="narasarao" readOnly /></td>
              <td><input type="number" name="salary" value="6543456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="4" readOnly /></td>
              <td><input type="text" name="empname" value="ranbir" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="barfi@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="dubai" readOnly /></td>
              <td><input type="number" name="salary" value="8783456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="5" readOnly /></td>
              <td><input type="text" name="empname" value="shah rukh" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="shan@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="delhi" readOnly /></td>
              <td><input type="number" name="salary" value="8765456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="6" readOnly /></td>
              <td><input type="text" name="empname" value="Salman" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="salmai@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="bombay" readOnly /></td>
              <td><input type="number" name="salary" value="8765456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table><br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ width: '55px' }} onClick={this.props.handleLogout}>Logout</button>
        </div>
        <div id="time" style={{ textAlign: 'center', fontSize: '24px' }}>
          {minutes}:{seconds}
        </div>
      </div>
    );
  }
}

export default App;
