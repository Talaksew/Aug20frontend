import React, { useState } from 'react';
import axios from 'axios';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import './reserve.css'; // Uncomment if you have custom styles

import { format } from 'date-fns';

function Reserve() {
    // State for item data
    const [ReqData, setReqData] = useState({
        user: '',
        item: '',
        status: 'pending',
        specialRequests: '',
        numberOfPersons: '',
    });

    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleSelect = (ranges) => {
        const { selection } = ranges;
        setDate(selection);
    };

    const item_name = "itemName";
    const item_sortDetail = "Item_Short_Detail";

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Prepare item data
            const formData = new FormData();
            for (let key in ReqData) {
                formData.append(key, ReqData[key]);
            }
            formData.append('startDate', date.startDate.toISOString());
            formData.append('endDate', date.endDate.toISOString());

            // Send form data to backend
            const response = await axios.post('http://localhost:4000/addReserve', formData, {
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

    return (
        <div>
            <div className='Header'>
                <h3>This tour is ${item_name}</h3>
                <h1>New Item</h1>
                <form onSubmit={handleSubmit}>
                    {/* Item Data */}
                    <div className='container'>
                        <span className="calendar">
                            <h3>Choose starting and ending date</h3>
                            {`${format(date.startDate, 'MMM dd, yyyy')} to ${format(date.endDate, 'MMM dd, yyyy')}`}
                        </span>
                        <DateRangePicker
                            ranges={[date]}
                            onChange={handleSelect}
                            minDate={new Date()}
                        />
                    </div>

                    <p>Tell us what you want, we are ready to give a service</p>
                    <h3>Special information</h3>
                    <input
                        type='textarea'
                        name='specialRequests'
                        value={ReqData.specialRequests}
                        onChange={(e) => setReqData({ ...ReqData, specialRequests: e.target.value })}
                        placeholder='Type here...'
                    />

                    <input
                        type="number"
                        name="numberOfPersons"
                        value={ReqData.numberOfPersons}
                        onChange={(e) => setReqData({ ...ReqData, numberOfPersons: e.target.value })}
                        placeholder="Number of Persons"
                        required
                    />

                    <button type="submit">Insert Data</button>
                </form>
            </div>
        </div>
    );
}

export default Reserve;

         
/*{ <input type="number" name="numberOfKids" value={ReqData.noKids} onChange={(e) => setItemData({ ...itemData, shortDetail: e.target.value })} placeholder="Short Detail" />
<textarea name="detail" value={itemData.detail} onChange={(e) => setItemData({ ...itemData, detail: e.target.value })} placeholder="Detail"></textarea>
<input type="text" name="category" value={itemData.category} onChange={(e) => setItemData({ ...itemData, category: e.target.value })} placeholder="Category" />
<p>Location:
  <input type="text" name="latitude" value={itemData.latitude} onChange={(e) => setItemData({ ...itemData, latitude: e.target.value })} placeholder="Latitude" />
  <input type="text" name="longitude" value={itemData.longitude} onChange={(e) => setItemData({ ...itemData, longitude: e.target.value })} placeholder="Longitude" />
</p>
<input type="text" name="address" value={itemData.address} onChange={(e) => setItemData({ ...itemData, address: e.target.value })} placeholder="Address" />
<input type="text" name="hotels" value={itemData.hotels} onChange={(e) => setItemData({ ...itemData, hotels: e.target.value })} placeholder="Hotels preferred" />

{/* Special Date */
/* <p>Special Date:
  <input type="number" value={specialDay} onChange={(e) => setSpecialDay(e.target.value)} min="1" max="31" placeholder="Day" />
  <input type="number" value={specialMonth} onChange={(e) => setSpecialMonth(e.target.value)} min="1" max="12" placeholder="Month" />
</p> */

/* Image Data */
/* <label>Image Files:</label>
<input type="file" name="images" multiple onChange={handleImageChange} /> */

