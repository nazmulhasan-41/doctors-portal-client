import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from "react-bootstrap";
import Footer from './components/Footer/Footer';
import FullHeader from './components/Home/FullHeader/FullHeader';
import Services from './components/services/Services';
import Care from './components/Care/Care';
import AppointmentHome from './components/AppointmentHome/AppointmentHome';
import MainPage from './components/Home/MainPage/MainPage';


function App() {
  return (

      <Container className='mainContainer'>
        
        
        
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer></Footer>

      </Container>

  );
}

export default App;
