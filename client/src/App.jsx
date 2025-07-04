import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const image_path = import.meta.env.VITE_ABSOLUTE_PATH;
  const encodedPath ='/@fs' + image_path;

  const [imageData, setImageData] = useState(null);

  const fetchAPI = async () => {
    await axios.get("http://localhost:3000/api");
  };

  const fetchData = async() =>{
    try{
      const res = await fetch(encodedPath);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      
      setImageData(url);

    }catch(e){
      console.log(`Error: ${e}`)
    }
  }

  const request_sent = () => {
    console.log(image_path);
    console.log(encodedPath);
    alert("Image Generation Started");
  } 

  useEffect(() => {
    fetchAPI();
    fetchData();
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
        { imageData ?<img src={imageData}   /> : 'loading...' }
      </div> 
    </>
  )
}

export default App
