import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Product/Product';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className='app-container-routes'>
          <Routes>
            <Route path="/product" element={<Product />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
