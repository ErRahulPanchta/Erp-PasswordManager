import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Manager from './components/Manager';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 bg-gradient-to-br from-green-100 via-blue-100 to-purple-200">
          <Routes>
            <Route path="/" element={<Manager />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
