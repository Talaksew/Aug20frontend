import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

//import "../App.css";
import Navbar from "../components/Navbar/navbar";
import Filter from "../components/Filter/filter";
import Item from "../components/Items/Item";
import ImgImport from "../components/imgImport/imgImport";
import Footer from "../components/Footer/footer";

function ContactUs() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000', {
          method: 'GET',
          credentials: 'include'
        });
        const res = await response.json();
        if (res.valid) {
          setName(res.username);
        } else {
          navigate('/login');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [navigate]);

  
  return (
    <div>
     <Navbar />
    
    
     <Footer />
    </div>
  );
}

export default ContactUs;