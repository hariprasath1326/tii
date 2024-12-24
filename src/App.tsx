import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';



function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here to wrap the routing logic */}
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* Components below are outside of the routing system */}
      </div>
    </BrowserRouter>
  );
}

export default App;
