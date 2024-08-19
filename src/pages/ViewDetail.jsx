import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import "../App.css";
import Navbar from "../components/Navbar/navbar";
import Filter from "../components/Filter/filter";
import Item from "../components/Items/Item";
import ViewDetails from "../components/viewDetail/ViewDetails";
import Footer from "../components/Footer/footer";

function Home() {
  

  return (
    <div>
 
     <ViewDetails />
     <Footer />
   
    </div>
  );
}

export default Home;