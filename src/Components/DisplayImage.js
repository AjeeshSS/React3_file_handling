import React, { useState } from 'react';

function DisplayImage() {
    const [image, setImage] = useState('');
    const [images, setImages] = useState([]);

    const addImage = () => {
        if (image !== '') {
            console.log(image);
            setImages([...images, image]);
        }
    }

    return (
        <div>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={addImage}>Upload</button><br/>
            {
                images.map((img)=>(
                    <img src={URL.createObjectURL(img)} alt='Images' width='200px' height='200px'/>
                ))
            }
        </div>
    );
}

export default DisplayImage;
