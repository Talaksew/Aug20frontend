import React, { useState } from "react";
import "./item.css";
import BedIcon from "@mui/icons-material/Bed";
import WifiIcon from "@mui/icons-material/Wifi";
import BathroomIcon from "@mui/icons-material/Bathroom";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from '@mui/icons-material/Add';

// Importing data
import Data from "../Data"; // Adjust the path according to your folder structure

function Item() {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);
  // Items per page
  const itemsPerPage = 6;

  // Calculate the indices of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the items to display on the current page
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secImage">
          <h2 className="secTitle">Travel with us</h2>
          <p>From the historical places, events...</p>
        </div>
        <div className="mainContent grid">
          {currentItems.map((file, index) => (
            <div key={file.id} className="singleOffer">
              <div className="desImage">
                <img src={file.imgURL} alt={file.name} />
                <span className="discount">{file.name}</span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>${file.price} Negotiable</h4>
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
                  <small>450 Vine $310, Addis Ababa</small>
                </div>
                <div className="btndiv"><button className="btngg" >
                  View Details
                  <ChevronRightIcon />
                </button><button className="btngg" >
                  Reserve 
                  <AddIcon />
                </button></div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={Data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

// Pagination component
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Item;
