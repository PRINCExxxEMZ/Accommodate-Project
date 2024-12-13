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
import LearnMore from './Pages/LearnMore';
import StudentOverview from './Component/StudentOverview';
import AdminStudent from './Admin/AdminStudent';
import AdminStudentsDetails from './Admin/AdminStudentsDetails';
import EditHostel from './Admin/EditHostel';
import EditRoom from './Admin/EditRoom';
import AdminHostelHall from './Admin/AdminHostelHall';
import AdminRoomDetails from './Admin/AdminRoomDetails';
import ScrollToTop from "./ScrollToTop";
import Reserve from './Pages/Reserve';
import AdminAllRoom from './Admin/AdminAllRoom';



function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
      <Routes>
        
                                                  {/* User Section  */}

        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/fresher' element={<FresherRegister/>}></Route>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/hostel' element={<Hostel/>}></Route>
        <Route path='/learnmore' element={<LearnMore/>}></Route>
        <Route path='/allavaliablehostel/:hall_id/:hall_name' element={<AllAvailableHostel/>}></Route>
        <Route path='/rooms/:hall_id/:hall_name' element={<Rooms/>}></Route>
        <Route path='/allbookedhostel' element={<AllBookedHostel/>}></Route>
        <Route path='/profilepage/:id' element={<ProfilePage/>}></Route>
        <Route path='/hosteldetails/:room_id' element={<HostelDetails/>}></Route>
        <Route path='/payment/:room_id' element={<Payment/>}></Route>
        <Route path='/checkout/:email/:hall_name/:room_number/:price/:user_id/:room_id/:bed_number' element={<Checkout/>}></Route>
        <Route path='/reserve/:email/:hall_name/:room_number/:price/:user_id/:room_id/:bed_number' element={<Reserve/>}></Route>

        <Route path='/paymentdetails' element={<PaymentD/>}></Route>

                                                {/* Admin section  */}
        
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/admin' element={<AdminHero/>}></Route>
        <Route path='/adminhostel' element={<AdminHostel/>}></Route>
        <Route path='/createroom' element={<CreateRoom/>}></Route>
        <Route path='/createhostel' element={<CreateHostel/>}></Route>
        <Route path='/studentoverview' element={<AdminStudent/>}></Route>
        <Route path='/studentdetails' element={<AdminStudentsDetails/>}></Route>
        <Route path='/adminhostelhall' element={<AdminHostelHall/>}></Route>
        <Route path='/adminroomdetails/:room_id' element={<AdminRoomDetails/>}></Route>
        <Route path='/adminpaymentdetails' element={<AdminPayment/>}></Route>
        <Route path='/editHostel/:hostel_id' element={<EditHostel />}></Route>
        <Route path='/editRoom/:room_id' element={<EditRoom />}></Route>
        <Route path='/adminallroom/:hall_id/:hall_name' element={<AdminAllRoom/>}></Route>



        {/* Work sheet  */}
        {/* <Route path='/demo' element={<Demo/>}></Route> */}

      </Routes>
      </Router>

    </div>
    
  );
}

export default App;
