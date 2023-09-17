import HolbertonLogo from './HolbertonLogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
       <img className='App-logo' src={HolbertonLogo} alt='logo'></img>
       <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
								<div className='Emailpassword'>
          <label className="label_email" for="email">
            Email:
          </label>
          <input type="email" id="email" name="email"></input>
          <label className="label_password" for="password" >
            Password:
          </label>
          <input type="password" id="pass" name="password"></input>
          <button className='label-button'>
            OK
          </button>
        </div>
      </div>
      <footer className="App-footer">
        <p>
          {getFullYear()} {getFooterCopy()}
        </p>
      </footer>
    </div>

    
  );
}

export default App;