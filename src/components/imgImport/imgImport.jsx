import React, { useState } from 'react';
import axios from 'axios';
import './imgImport.css';

const AddItem = () => {
  // State for item data
  const [itemData, setItemData] = useState({
    name: '',
    shortDetail: '',
    detail: '',
    latitude: '',
    longitude: '',
    address: '',
    category: '',
    hotels: '', // Assuming you want to add hotels as a string for input
  });

  // State for special date
  const [specialDay, setSpecialDay] = useState('');
  const [specialMonth, setSpecialMonth] = useState('');


  // State for image data
  const [imagesData, setImagesData] = useState([]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare item data
      const formData = new FormData();
      for (let key in itemData) {
        formData.append(key, itemData[key]);
      }
      formData.append('specialDay', specialDay);
      formData.append('specialMonth', specialMonth);
      imagesData.forEach(image => {
        formData.append('images', image.file);
      });

      // Send form data to backend
      const response = await axios.post('http://localhost:4000/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Handle success
      console.log('Data inserted successfully:', response.data);
      alert('Data inserted successfully!');
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Error inserting data');
    }
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImagesData(files.map(file => ({ file, name: file.name })));
  };

  return (
    <div className="img offer">
      <div className="secContainer">
        <h1>New Item</h1>
        <form onSubmit={handleSubmit}>
          {/* Item Data */}
          <input type="text" name="name" value={itemData.name} onChange={(e) => setItemData({ ...itemData, name: e.target.value })} placeholder="Name" required />
          <input type="text" name="shortDetail" value={itemData.shortDetail} onChange={(e) => setItemData({ ...itemData, shortDetail: e.target.value })} placeholder="Short Detail" />
          <textarea name="detail" value={itemData.detail} onChange={(e) => setItemData({ ...itemData, detail: e.target.value })} placeholder="Detail"></textarea>
          <input type="text" name="category" value={itemData.category} onChange={(e) => setItemData({ ...itemData, category: e.target.value })} placeholder="Category" />
          <p>Location:
            <input type="text" name="latitude" value={itemData.latitude} onChange={(e) => setItemData({ ...itemData, latitude: e.target.value })} placeholder="Latitude" />
            <input type="text" name="longitude" value={itemData.longitude} onChange={(e) => setItemData({ ...itemData, longitude: e.target.value })} placeholder="Longitude" />
          </p>
          <input type="text" name="address" value={itemData.address} onChange={(e) => setItemData({ ...itemData, address: e.target.value })} placeholder="Address" />
          <input type="text" name="hotels" value={itemData.hotels} onChange={(e) => setItemData({ ...itemData, hotels: e.target.value })} placeholder="Hotels preferred" />

          {/* Special Date */}
          <p>Special Date:
            <input type="number" value={specialDay} onChange={(e) => setSpecialDay(e.target.value)} min="1" max="31" placeholder="Day" />
            <input type="number" value={specialMonth} onChange={(e) => setSpecialMonth(e.target.value)} min="1" max="12" placeholder="Month" />
          </p>

          {/* Image Data */}
          <label>Image Files:</label>
          <input type="file" name="images" multiple onChange={handleImageChange} />

          <button type="submit">Insert Data</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
