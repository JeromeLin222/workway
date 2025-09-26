import {BrowserRouter, Routes, Route, Link} from 'react-router';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CareerPage from './pages/member/CareerPage';
import LoginPage from './pages/member/LoginPage';
import RegisterPage from './pages/member/RegisterPage';
import BookingPage from './pages/member/BookingPage';



function App() {

  return (
    <BrowserRouter>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">
              WorkWay
            </div>
            <div className="space-x-4">
              <Link to="/" className="text-gray-600 hover:text-primary">首頁</Link>
              <Link to="/services" className="text-gray-600 hover:text-primary">服務方案</Link>
              <Link to="/about" className="text-gray-600 hover:text-primary">關於我們</Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary">聯絡我們</Link>
              <Link to="/member/login" className="text-gray-600 hover:text-primary">會員登入</Link>
            </div>
          </div>
        </div>
      </nav>
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
    </BrowserRouter>
  )
}

export default App
