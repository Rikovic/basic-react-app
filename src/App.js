import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css';
import About from './About';

function Home() {
  return (      
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        This is a test <code>src/App.js</code> and save to reload.
      </p>
    </header>
  )
}

function App() {
  return (
    <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/basic-react-app">Home Page</Link>
            </li>
            <li>
              <Link to="/basic-react-app/about">About Test Page</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/basic-react-app" element={<Home/>}/>
            <Route exact path="/basic-react-app/about" element={<About/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
