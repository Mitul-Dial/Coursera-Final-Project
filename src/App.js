import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import Main from './Main'; // Home Page
import About from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import Order from './Order';
import Login from './Login';

import { Routes, Route } from 'react-router-dom'; // ❌ Remove BrowserRouter

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
