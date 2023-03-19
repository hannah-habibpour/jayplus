import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BookingProvider } from './context/BookingContext';

import Booking from './pages/Booking';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  return (
    <BookingProvider>
      <Router>
        <main>
            <Routes>
              <Route path='/' element={<Booking />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/payment-success' element={<PaymentSuccess />} />
            </Routes>
        </main>
      </Router>
    </BookingProvider>
  );
}

export default App;
