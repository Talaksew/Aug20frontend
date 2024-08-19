import React, { useState } from 'react';
import axios from 'axios';
import './imgImport.css';

const AddHotel = () => {
  // State for hotel data
  const [hotelData, setHotelData] = useState({
    name: '',
    address: '',
    latitude: '',
    longitude: '',
    rating: '',
    amenities: '',
    phone: '',
    email: '',
    website: ''
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send hotel data to backend
      const response = await axios.post('http://localhost:4000/addHotel', hotelData);

      // Handle success
      console.log('Data inserted successfully:', response.data);
      alert('Data inserted successfully!');
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Error inserting data');
    }
  };

  // Handle input changes
  const handleHotelChange = (e) => {
    setHotelData({ ...hotelData, [e.target.name]: e.target.value });
  };

  return (
    <div className="img offer">
      <div className="secContainer">
        <h1>New Hotels Preferred</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={hotelData.name} onChange={handleHotelChange} placeholder="Hotel Name" required />
          <input type="text" name="address" value={hotelData.address} onChange={handleHotelChange} placeholder="Hotel Address" required />
          <input type="text" name="latitude" value={hotelData.latitude} onChange={handleHotelChange} placeholder="Latitude" />
          <input type="text" name="longitude" value={hotelData.longitude} onChange={handleHotelChange} placeholder="Longitude" />
          <input type="text" name="rating" value={hotelData.rating} onChange={handleHotelChange} placeholder="Rating (1-5)" required />
          <input type="text" name="amenities" value={hotelData.amenities} onChange={handleHotelChange} placeholder="Amenities" />
          <input type="text" name="phone" value={hotelData.phone} onChange={handleHotelChange} placeholder="Contact Phone" />
          <input type="text" name="email" value={hotelData.email} onChange={handleHotelChange} placeholder="Contact Email" />
          <input type="text" name="website" value={hotelData.website} onChange={handleHotelChange} placeholder="Website" />

          <button type="submit">Insert Data</button>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;

// axios.post('http://localhost:4000/addItem', data)
// .then(res => {
//   console.log(res.data);
// })
// .catch(err => {
//   console.error(err);
// });
// };


/* <form className="impoert" onSubmit={handleSubmit}>
      <input type="text" name="item_id" value={formData.item_id} onChange={handleChange} placeholder="Item ID" />
      <input type="text" name="item_name" value={formData.item_name} onChange={handleChange} placeholder="Item Name" />
      <input type="text" name="short_detail" value={formData.short_detail} onChange={handleChange} placeholder="Short Detail" />
     <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} placeholder="Latitude" />
      <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} placeholder="Longitude" />
       <input type="text" name="hotel" value={formData.hotel} onChange={handleChange} placeholder="Hotel" />
       <textarea name="detail" value={formData.detail} onChange={handleChange} placeholder="Detail"></textarea>
       <p>Special date to visite</p><input type="date" name="spetial_date" value={formData.spetial_date} onChange={handleChange} placeholder="Special Date" />
      <input type="file" name="images" multiple onChange={handleFileChange} />
      <button type="submit">Add Item</button>
    </form> */
