import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from "react-bootstrap";
import Footer from './components/Footer/Footer';
import MainPage from './components/Home/MainPage/MainPage';
import AppointmentPage from './components/AppointmentSection/AppointmentPage/AppointmentPage';
import Header from './components/Header/Header';
import Modaltest from './components/AppointmentSection/AppointmentPage/APoointmentsAvailable/Modaltest';

function App() {
  return (

    <Container className='mainContainer'>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/service" element={<Header />} />
      </Routes>
      <Footer></Footer>

    </Container>

  );
}

export default App;
