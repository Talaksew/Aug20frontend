import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import "../App.css";
import Navbar from "../components/Navbar/navbar";
import Filter from "../components/Filter/filter";
import Item from "../components/Items/Item";
import ImgImport from "../components/imgImport/imgImport";
import Footer from "../components/Footer/footer";
import AddHotel from "../components/imgImport/addHotel";

function addNew() {
  

  return (
    <div>
     <Navbar />
    
     <AddHotel />
     <Footer />
   
    </div>
  );
}

export default addNew;