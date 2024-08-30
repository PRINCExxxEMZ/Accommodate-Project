import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from "./Pages/Hero";
import Hostel from "./Pages/Hostel";
import PaymentD from './Pages/PaymentD';
import Login from './Pages/Login';
import HostelDetails from './Pages/HostelDetails';
import Register from './Pages/Register';
import FresherRegister from './Pages/FresherRegister';
import AdminHero from './Admin/AdminHero';
import AdminHostel from './Admin/AdminHostel';
import CreateHostel from './Admin/CreateHostel';
import CreateRoom from './Admin/CreateRoom';
import AdminPayment from './Admin/AdminPayment';
import AllAvailableHostel from './Pages/AllAvailableHostel';
import AllBookedHostel from './Pages/AllBookedHostel';

import Demo from './Component/Demo';
import AdminLogin from './Admin/AdminLogin';
import Rooms from './Component/Rooms';
import Payment from './Component/Payment';
import Checkout from './Pages/Checkout';
import ProfilePage from './Pages/ProfilePage';



function App() {
  return (
    <div>
      <Router>
      <Routes>
        
                                                  {/* User Section  */}

        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/fresher' element={<FresherRegister/>}></Route>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/hostel' element={<Hostel/>}></Route>
        <Route path='/allavaliablehostel/:hall_id/:hall_name' element={<AllAvailableHostel/>}></Route>
        <Route path='/rooms/:hall_id/:hall_name' element={<Rooms/>}></Route>
        <Route path='/allbookedhostel' element={<AllBookedHostel/>}></Route>
        <Route path='/profilepage' element={<ProfilePage/>}></Route>
        <Route path='/hosteldetails/:room_id' element={<HostelDetails/>}></Route>
        <Route path='/payment/:room_id' element={<Payment/>}></Route>
        <Route path='/checkout/:email/:hall_name/:room_number/:price/:user_id/:room_id/:bed_number' element={<Checkout/>}></Route>


        <Route path='/paymentdetails' element={<PaymentD/>}></Route>

                                                {/* Admin section  */}
        
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/admin' element={<AdminHero/>}></Route>
        <Route path='/adminhostel' element={<AdminHostel/>}></Route>
        <Route path='/createroom' element={<CreateRoom/>}></Route>
        <Route path='/createhostel' element={<CreateHostel/>}></Route>
        <Route path='/adminpaymentdetails' element={<AdminPayment/>}></Route>



        {/* Work sheet  */}
        <Route path='/demo' element={<Demo/>}></Route>

      </Routes>
      </Router>

    </div>
    
  );
}

export default App;
