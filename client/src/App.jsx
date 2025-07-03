import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import image from "../../server/storage/image_output/output.png"

function App() {

  const fetchAPI = async () => {
    await axios.post("http://localhost:3000/api");
  };

  const [blobImage, setBlobImage] = useState()

  useEffect(() => {
          // URL to your image
          fetch(image)
              .then((response) => response.blob())
              .then((blob) => {
                  setBlobImage(blob)
              })
              .catch((error) => console.error("Error fetching the image:",error));
      }, []);

  const request_sent = () => {
    alert("Image Generation Started");
  } 


  const imageData =  URL.createObjectURL(blobImage)

  useEffect(() => {
    fetchAPI();
  }, []);


  return (
    <>
      <button onClick={() => {
        fetchAPI();
        request_sent();
      }}>
        Generate image 
      </button>
      <div >
        { imageData ?<img src={imageData} alt="Guido Van Rossum"  /> : 'loading...' }
      </div>
    </>
  )
}

export default App
