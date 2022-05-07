import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from "react-bootstrap";
import Footer from './components/Footer/Footer';
import MainPage from './components/Home/MainPage/MainPage';
import AppointmentPage from './components/AppointmentSection/AppointmentPage/AppointmentPage';
import Login from './components/AppointmentSection/AppointmentPage/Login/Login';
import DashboardSection from './components/DashboardSection/DashboardSection';
import Dashboard from './components/DashboardSection/Dashboard/Dashboard';
import Dash_appointments from './components/DashboardSection/Dash_appointments/Dash_appointments';
import Dash_prescriptions from './components/DashboardSection/dash_prescriptions/Dash_prescriptions';
import DoctorLogin from './components/AppointmentSection/AppointmentPage/Login/DoctorLogin';

function App() {
  var doc_email = localStorage.getItem('doctorEmail');
  console.log(doc_email);

  return (

    <Container className='mainContainer'>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/login" element={<Login />} >
          <Route path='doctorlogin' element={<DoctorLogin />} />
        </Route>
        <Route path="/dashboard" element={<DashboardSection />} >
          <Route index element={<Dashboard />} />
          <Route path='d_dashboard' element={<Dashboard />} />
          <Route path="d_appnm" element={<Dash_appointments />} />
          <Route path="d_pres" element={<Dash_prescriptions />} />
        </Route>



      </Routes>
      <Footer></Footer>

    </Container>

  );
}

export default App;
