import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a test <code>src/App.js</code> and save to reload.
        </p>
        <Router>
        <Link to="/about">About Test Page</Link>
          <Routes>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
