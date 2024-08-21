import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from "./Pages/Hero";
import Hostel from "./Pages/Hostel";
import Payment from "./Pages/Payment";
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
        <Route path='/allavaliablehostel' element={<AllAvailableHostel/>}></Route>
        <Route path='/allbookedhostel' element={<AllBookedHostel/>}></Route>
        <Route path='/hosteldetails' element={<HostelDetails/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>

                                                {/* Admin section  */}
        
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/admin' element={<AdminHero/>}></Route>
        <Route path='/adminhostel' element={<AdminHostel/>}></Route>
        <Route path='/createroom' element={<CreateRoom/>}></Route>
        <Route path='/createhostel' element={<CreateHostel/>}></Route>
        <Route path='/adminpayment' element={<AdminPayment/>}></Route>



        {/* Work sheet  */}
        <Route path='/demo' element={<Demo/>}></Route>

      </Routes>
      </Router>

    </div>
    
  );
}

export default App;
