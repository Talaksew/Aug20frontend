import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import "./viewDetail.css";
import BedIcon from "@mui/icons-material/Bed";
import WifiIcon from "@mui/icons-material/Wifi";
import BathroomIcon from "@mui/icons-material/Bathroom";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from '@mui/icons-material/Add';

function ViewDetail() {
  const { item_id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/viewDetail/${item_id}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [item_id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="singleOffer">
        <div className="desImage">
        <div className="desImage">
                  {item.images && item.images.map((img, index) => (
                    <img key={index} src={`http://localhost:4000${img}`} alt={`Item Image ${index}`} />
                  ))}</div>
          <span className="discount">{item.name}</span>
        </div>
        <div className="offerBody">
          <div className="price flex">
            <p>{item.detail}</p>
            <h4>{item.specialDate.day}/{item.specialDate.month} Negotiable</h4>
            <span className="status">For Rent</span>
          </div>
          <div className="amenities flex">
            <div className="singleAmenity flex">
              <BedIcon className="icon" />
              <small>2 Beds</small>
            </div>
            <div className="singleAmenity flex">
              <BathroomIcon className="icon" />
              <small>Bathroom</small>
            </div>
            <div className="singleAmenity flex">
              <WifiIcon className="icon" />
              <small>Wifi</small>
            </div>
            <div className="singleAmenity flex">
              <AirportShuttleIcon className="icon" />
              <small>Shuttle</small>
            </div>
          </div>
          <div className="location flex">
            <LocationOnIcon className="icon" />
            <small>{item.address}</small>
          </div>
          <div className="btndiv">
            <button name="reserve" className="btnggadd">
              <Link to={`/reserve/${item._id}`}>Reserve</Link>
              <AddIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetail;
