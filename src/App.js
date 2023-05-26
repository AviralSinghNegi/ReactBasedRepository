import './App.css';
import { Router, Routes, Route } from "react-router-dom";

import Gallery from './pages/Gallery';
import Plans from './pages/Plans';
import About from './components/About';
import Services from './components/Services'
import Navigationbar from './components/Navigationbar';
import OffcanvasNavbar from './components/OffcanvasNavbar'
import Footer from './components/Footer';

import HomePage from './pages/HomePage';

import React from 'react'

export default function App() {
  return (
    <>
      <OffcanvasNavbar/>
        <Routes >
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/plans" element={<Plans />}/>
            <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      <Footer/>
    </>
  )
}


