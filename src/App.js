import './App.css';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Plans from './pages/Plans';
import About from './components/About';
import Services from './components/Services'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <HomePage/>
    </>
  );
}

export default App;
