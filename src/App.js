import './App.css';
import About from './pages/about/About';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contacts';
import Privacy from './pages/privacy/Privacy';
import Home from './pages/home/Home';
import NotFound from './pages/Shared/NotFound';
import Service from './pages/Service/Service';
import TermsCondition from './pages/terms/TermsCondition';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carrer from './pages/Career/Carrer';

function App() {
  return (
    <div className=''>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Carrer />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        
        <Route path='/terms-condition' element={<TermsCondition />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}


export default App;
