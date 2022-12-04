import './App.css';
// import {Navbar, Header, Feature, Download, Subscribe, Faq, Footer} from "./components";
import Features from './components/features/Features';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import Navbar from './pages/Shared/Navbar';
import About from './pages/about/About';
import Expertise from './pages/expertise/Expertise';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contacts';
import Privacy from './pages/privacy/Privacy';
import Home from './pages/home/Home';
import Footer from './pages/Shared/Footer';
import NotFound from './pages/Shared/NotFound';

function App() {
  return (
    <div className=''>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/expertise' element={<Expertise />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </div>
  );
}


export default App;
