import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

//import "../App.css";
import Navbar from "../components/Navbar/navbar";
import Filter from "../components/Filter/filter";
import Item from "../components/Items/Item";
import Footer from "../components/Footer/footer";

function Home() {
 

  
  return (
    <div>
     <Navbar />
     <Filter />
     <Item />
     <Footer />
    </div>
  );
}

export default Home;
// 
//
//ImgImport />
//


// const [name, setName] = useState('');
//   const navigate = useNavigate();

//   // Set withCredentials globally for axios
//   axios.defaults.withCredentials = true;

//   useEffect(() => {
//     axios.get('http://localhost:5000')
//       .then(res => {
//         if (res.data.valid) {
//           setName(res.data.username);
//         } else {
//           navigate('/login');
//         }
//       })
//       .catch(err => console.error(err));
//   }, [navigate]);