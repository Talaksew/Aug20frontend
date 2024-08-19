import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//import "./App.css"
// Import components
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddItem from "./pages/AddNewItem";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import ManageItems from "./pages/ManageItems";
import Officers from "./pages/ManageOfficers";
import Profile from "./pages/ManageProfile";
import Reserve from "./pages/Reserve";
import ViewDetails from "./pages/ViewDetail";
import ReservedLists from "./pages/ViewReserved";
import AddHotel from "./pages/AddHotels";

function App() {
  return (
   <Router>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/New" element={<AddItem />} />
      <Route path="/about" element={<About />} />   
      <Route path="/contactus" element={<Contact />} />
      <Route path="/manage_items" element={<ManageItems />} />
      <Route path="/officers" element={<Officers/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/reserve" element={<Reserve />} />
      <Route path="//detail/:item_id" element={<ViewDetails />} />   
      <Route path="/reserved" element={<ReservedLists />} />
      <Route path="/addhotel" element={<AddHotel />} />
    </Routes>
  </Router> 
  );
}

export default App;
