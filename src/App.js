import logo from './logo.svg';
import './App.css';
// import Navbar from './components/navbar/Navbar';
// import Header from './components/header/Header';
// import Feature from './components/features/Feature';
// import Download from './components/download/Download';
// import Subscribe from './components/subscribe/Subscribe';
// import Faq from './components/faq/Faq';
// import Footer from './components/footer/Footer';

import {Navbar, Header, Feature, Download, Subscribe, Faq, Footer} from "./components";
import Features from './components/features/Features';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';

function App() {
  return (
    <>
    <header className="header-bg">
      <Navbar />
      
    </header>
    {/* <WhatWeDo /> */}
    <Hero />
      <Header />
      <Service />
    <Download />
    <Features data-aos="fade-up" />
    <Subscribe />
    <Faq />
    <Footer />
  </>
  );
}

export default App;
