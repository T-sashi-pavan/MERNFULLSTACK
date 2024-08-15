import React, { Component } from 'react';
import './index.css'; 
class Registerdetails extends React.Component {
  render() {
    return (
      <div style={{ display: 'grid', justifyContent: 'space-evenly'}}>
        <RegisterForm/>
        <Table/>
        
      </div>
    );
  }
}
class RegisterForm extends React.Component {
  

  render() {
    return (
      <form id="registerForm">
                    <h2 style="text-align: center;">LOGIN</h2><br>

        <div style="display:grid;justify-content: space-evenly;border:10;padding: 10px 30px 10px 35px;">
            <div style="border-style: ridge;padding: 40px;">
            <label for="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required><br><br>
            <label for="Password">Password:</label>
            <input type="password" id="Password" name="Password" required><br><br>
            <div style="display:flex;justify-content: center;">
                        <button type="button" onclick="login()">Login</button></div>
        </div>
        </div>
    </form>
    <script>
        function login() {
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('Password').value;
            if (username && password) {
                window.location.href = 'empdetails.html';
            } else {
                alert('Please enter both username and password.');
            }
        }
    </script>
    );
  }
}

class Table extends React.Component {
  

  render() {
    return (
      <div style="display:grid;justify-content: space-evenly;padding: 70px 10px 140px;background: transparent;">
    <h1 style="text-align: center;">Employee details</h1>

<table border="10"  style="background: pink;">
    <tr>
        <th>Empid</th>
        <th>Empname</th>
        <th>Age</th>
        <th>Email</th>
        <th>Address</th>
        <th>Salary</th>
        <th>Options</th>
    </tr>
    
    <tr>
                    <td><input type="number" name="empid" value="1" readonly></td>
                    <td><input type="text" name="empname" value="Sashi" readonly></td>
                    <td><input type="number" name="age" value="19" readonly></td>
                    <td><input type="email" name="email" value="sessi@gmail.com" readonly></td>
                    <td><input type="text" name="address" value="guntur" readonly></td>
                    <td><input type="number" name="salary" value="8765456" readonly></td>
                    <td>
                        <button onclick="editRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                        <button onclick="deleteRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="number" name="empid" value="2" readonly></td>
                    <td><input type="text" name="empname" value="Aslam" readonly></td>
                    <td><input type="number" name="age" value="19" readonly></td>
                    <td><input type="email" name="email" value="sei@gmail.com" readonly></td>
                    <td><input type="text" name="address" value="tirupati" readonly></td>
                    <td><input type="number" name="salary" value="764356" readonly></td>
                    <td>
                        <button onclick="editRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                        <button onclick="deleteRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="number" name="empid" value="3" readonly></td>
                    <td><input type="text" name="empname" value="Ali" readonly></td>
                    <td><input type="number" name="age" value="19" readonly></td>
                    <td><input type="email" name="email" value="sasmi@gmail.com" readonly></td>
                    <td><input type="text" name="address" value="narasarao" readonly></td>
                    <td><input type="number" name="salary" value="6543456" readonly></td>
                    <td>
                        <button onclick="editRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                        <button onclick="deleteRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="number" name="empid" value="4" readonly></td>
                    <td><input type="text" name="empname" value="ranbir" readonly></td>
                    <td><input type="number" name="age" value="19" readonly></td>
                    <td><input type="email" name="email" value="barfi@gmail.com" readonly></td>
                    <td><input type="text" name="address" value="dubai" readonly></td>
                    <td><input type="number" name="salary" value="8783456" readonly></td>
                    <td>
                        <button onclick="editRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                        <button onclick="deleteRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="number" name="empid" value="5" readonly></td>
                    <td><input type="text" name="empname" value="shah rukh" readonly></td>
                    <td><input type="number" name="age" value="19" readonly></td>
                    <td><input type="email" name="email" value="shan@gmail.com" readonly></td>
                    <td><input type="text" name="address" value="delhi" readonly></td>
                    <td><input type="number" name="salary" value="8765456" readonly></td>
                    <td>
                        <button onclick="editRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                        <button onclick="deleteRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="number" name="empid" value="6" readonly></td>
                    <td><input type="text" name="empname" value="Salman" readonly></td>
                    <td><input type="number" name="age" value="19" readonly></td>
                    <td><input type="email" name="email" value="salmai@gmail.com" readonly></td>
                    <td><input type="text" name="address" value="bombay" readonly></td>
                    <td><input type="number" name="salary" value="8765456" readonly></td>
                    <td>
                        <button onclick="editRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                        <button onclick="deleteRow(this)" style="color: skyblue; display: inline;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                    </td>
                </tr>
</table></br>
<div style="display: flex;justify-content: center;">
<button style="width: 55px;">submit</button>
</div>

    );
  }
}




export default Registerdetails;
