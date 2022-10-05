import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/about">About Test Page</a>
        <Router>
          <Routes>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
