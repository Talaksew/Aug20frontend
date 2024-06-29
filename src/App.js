import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/navbar";
import Filter from "./Filter/filter";
import Item from "./Items/item";
import ImgImport from "./imgImport/imgImport"
import Footer from "./Footer/footer";

function App() {
  
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/getUsers")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
    <Navbar /> 
    <Filter />
    
    <Item />
    
    <Footer />
    </div>

  );
}

export default App;
