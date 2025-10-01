import {BrowserRouter, Routes, Route, Link} from 'react-router';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CareerPage from './pages/member/CareerPage';
import LoginPage from './pages/member/LoginPage';
import RegisterPage from './pages/member/RegisterPage';
import BookingPage from './pages/member/BookingPage';

import { HeaderComponent } from './components/common/Header';
import { FooterComponent } from './components/common/Footer';

function App() {

  return (
    <BrowserRouter>
    <HeaderComponent></HeaderComponent>
      
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />

          <Route path="/member/login" element={<LoginPage />} />
          <Route path="/member/register" element={<RegisterPage />} />
          <Route path="/member/booking" element={<BookingPage />} />
          <Route path="/member/career" element={<CareerPage />} />
        </Routes>
      </main>

    <FooterComponent></FooterComponent>
    </BrowserRouter>
  )
}

export default App
