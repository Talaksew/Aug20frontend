import React, { useState } from "react";
import "./imgImport.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
//import mongoose = require ("mongoose");



function ImgImport() {
    const [img, setImg] = useState(null);

    function handleUploadImage(e) {
        const file = e.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onloadend = () => {
                const base64String = reader.result;
                setImg(base64String);
            };
            
            reader.onerror = (err) => {
                console.error("Error reading file:", err);
            };
            
            reader.readAsDataURL(file); // This will encode the image to Base64
        }
    }

    return (
        <div className="imageContainer">
            <form>
                <label htmlFor="uploadImage">
                    <div className="uploadBox">
                        <input type="file" id="uploadImage" onChange={handleUploadImage} />
                        {img ? <img src={img} alt="Uploaded" className="uploadedImage"/> : <CloudUploadIcon />}
                    </div>
                </label>
                <div className="btnd">
                    <button type="button">Upload</button>
                </div>
            </form>
        </div>
    );
}

export default ImgImport;
