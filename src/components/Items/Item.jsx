import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import BedIcon from "@mui/icons-material/Bed";
import WifiIcon from "@mui/icons-material/Wifi";
import BathroomIcon from "@mui/icons-material/Bathroom";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from '@mui/icons-material/Add';
import "./item.css";

function Item() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    console.log('Fetching items from backend...');
    axios.get('http://127.0.0.1:4000/items')
      .then(response => {
        console.log('Items fetched successfully:', response.data);
        setItems(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching items:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4000/profile', { withCredentials: true });
        if (response.status === 200) {
          setAuthState({
            isAuthenticated: true,
            user: response.data,
          });
        } else {
          setAuthState({
            isAuthenticated: false,
            user: null,
          });
        }
      } catch (error) {
        console.error('Error fetching user info:', error.response ? error.response.data : error.message);
        setAuthState({
          isAuthenticated: false,
          user: null,
        });
      }
    };
    fetchUserInfo();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading items: {error.message}</p>;

  return (
    <div>
      <section className="offer container section">
        <div className="secContainer">
          <div className="secImage">
            <h2 className="secTitle">Travel with us</h2>
            <p>From the historical places, events...</p>
          </div>
          <div className="mainContent grid">
            {items.map((item) => (
              <div key={item._id} className="singleOffer">
                <div className="desImage">
                  {item.images && item.images.map((img, index) => (
                    <img key={index} src={`http://localhost:4000${img}`} alt={`Item Image ${index}`} />
                  ))}
                  <span className="discount">{item.name}</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{item.shortDetail} Negotiable</h4>
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
                    <button name="viewDetail" className="btngg" >
                      <Link to={`/detail/${item._id}`} className="link-text">
                        Detail 
                      </Link>
                    </button>

                    <button name="reserve" className="btnggadd">
                      <Link to={`/reserve/${item._id}`}>
                        Reserve 
                      </Link>
                    </button>

                     {authState.isAuthenticated && authState.user && (
                      ['officer','admin'].includes(authState.user.role) && (
                        <button name="edit" className="btngg"> */}
                          <Link to={`/editItem/${item._id}`}>
                            Edit 
                          </Link>
                        </button>
                       )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Item;
