/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;*/


/*import React from 'react';
function App() {
  
  return (
    <div>
      <h1>Pick a color</h1>
      <input type="color" name="colour" id="colour" onChange={picker}  />
    </div>
    
  );
}
function picker() {
  const colour = document.getElementById("colour");
  document.body.style.backgroundColor = colour.value;

}
  
export default App; */



/*import React, { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  const incre = () => {
    return setCount(count+1);
  };

  const decre = () => {
    return setCount(count-1);
  };
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
    </div>
  );
}

export default App;*/

/*
import React, { Fragment } from 'react';
import './App.css';
function App() {
  const newclass = 'myclass';
  return (
    <div className='App'>
      <h1>React app</h1>
      <p>Below is a list</p>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Mango</li>
      </ul>
      <Fragment>
        <div className={newclass}>
          <h2>head2</h2>
          <p style={{ color: 'green', backgroundColor: 'beige' }}>Something....</p>
        </div>
      </Fragment>
    </div>

  );
}

export default App; 

*/

import React from 'react';
import './register.css';
function App() {
  return (
    <div className='container'>
      <h1>Registration Form</h1>
      
      <form>
        <table>
          <tbody>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;First Name:</td>
              <td><input type='text' name="fname" id="fname" required /></td>
            </tr>
            <br/>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;Last Name:</td>
              <td><input type='text' name="lname" id="lname" /></td>
            </tr>
            <br/>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:</td>
              <td><input type='email' name="mail" id="mail" required /></td>
            </tr>
            <br/>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password:</td>
              <td><input type='password' name="pass" id="pass" pattern="[0-9][A-Z][a-z]{8}"  required /></td>
            </tr>
            <br/>
            <tr>
              <td>&nbsp;Ph-Number:</td>
              <td><input type='phone' name="mobile" id="mobile" maxLength={10} required /></td>
            </tr>
            <br/>
            <tr>
              <td>Date of Birth:</td>
              <td><input type='date' name="dob" id="dob"  required /></td>
            </tr>
            <br/>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gender:</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' name="gender" id="male" required /> Male
              <input type='radio' name="gender" id="female" required /> Female
              <input type='radio' name="gender" id="other" required /> Others</td>
            </tr>
            <br/>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Courses:</td>
              <td><input list="technologies" name="tech" id="tech" required />
                <datalist id="technologies">
                  <option value="AI"></option>
                  <option value="ML"></option>
                  <option value="DL"></option>
                </datalist>
              </td>
            </tr>
            <br/>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hobbies:</td>
              <td><textarea rows={3} cols={21}></textarea></td>
            </tr>
            <br/>
            <tr>
              <td><input type="submit" name="submit" value="Submit" className="btn" /></td>
              <td><input type='reset' name="clear" className='btn' /></td>
            </tr>
          </tbody>
        </table>

      </form>
    
    </div>
  );
}
export default App;
