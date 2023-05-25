import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Plans from './pages/Plans';
import About from './components/About';
import Services from './components/Services'
import Navigationbar from './components/Navigationbar';
import OffcanvasNavbar from './components/OffcanvasNavbar'
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
    <BrowserRouter>
    {/* <Navigationbar/> */}
    <OffcanvasNavbar/>
    <Routes>
        
          <Route path="/" element={ <App /> }></Route>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/plans" element={<Plans />}/>
          <Route path="*" element={<p>Page not found!</p>} />
        
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
