import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Authen from './pages/Authen'
import Header from './components/Header';
import Admin from './admin/Admin';
import Dashboard from './admin/Dashboard';
import Property from './pages/Property';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property' element={<Property />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Authen />} />
        <Route path='/register' element={<Authen register={true} />} />
        <Route path='/dashboard' element={< Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
    </>
  );
}
