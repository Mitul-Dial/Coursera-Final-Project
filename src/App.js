import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import Main from './Main'; // Home Page
import About from './About';
import Menu from './Menu';
import Order from './Order';
import Login from './Login';
import ConfirmedBooking from './ConfirmedBooking';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Nav />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/reservation" element={<Reservation />} /> */}
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
