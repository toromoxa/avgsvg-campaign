import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Journal from './pages/Journal'
import Main from './components/Main';
import Party from './pages/Party'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <Router>
          <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="party" element={<Party />} />
          <Route path="journal" element={<Journal />} />
        </Routes>
          <Footer />
    </Router>
  );
}

export default App;