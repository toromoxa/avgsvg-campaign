import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Journal from './components/Journal'
import Main from './components/Main';
import Party from './components/Party'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Main />
        <Party />
        <Journal />
        <Footer />
      </div>
    </Router>
  );
}

export default App;