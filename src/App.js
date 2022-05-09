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
import Dash_addService from './components/DashboardSection/Dash_addService/Dash_addService';
import Dash_addDoctor from './components/DashboardSection/Dash_addDoctor/Dash_addDoctor';
import AddDocAppointment from './components/DashboardSection/AddDocAppointment/AddDocAppointment';
import Dash_docsAppmointment from './components/DashboardSection/Dash_docsAppmointment/Dash_docsAppmointment';
import ContactPage from './components/ContactPage/ContactPage';
import AppointmentDetails from './components/AppointmentDetails/AppointmentDetails';

function App() {
 

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
          <Route path="d_addService" element={<Dash_addService />} />
          <Route path="d_addDoctor" element={<Dash_addDoctor />} />
          <Route path="d_addDocAppmnt" element={<AddDocAppointment />} />
          <Route path="d_docsAppmnt" element={<Dash_docsAppmointment />} />


        </Route>
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/appmntDetails/:id" element={<AppointmentDetails />} />



        
      </Routes>
      <Footer></Footer>

    </Container>

  );
}

export default App;
