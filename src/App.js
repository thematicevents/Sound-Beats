import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Clients from './pages/Clients';

function App() {
  return (
    // Add the basename prop here to catch the subdirectory
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/Sound-Beats" element={<Home />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;