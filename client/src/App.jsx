import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
//import image from '/Users/benatkinson/Code/CAD2Crank/server/storage/image_output/output.png';


function App() {
  const image_path = import.meta.env.VITE_ABSOLUTE_PATH;
  const encodedPath ='/@fs' + image_path;
  //const image_in = fs.readFileSync(image_path, { encoding: 'base64' });
  const [imageData, setImageData] = useState(null);

  const fetchAPI = async () => {
    await axios.post("http://localhost:3000/api");
  };

  const fetchData = async()=>{
    try{
      const res = await fetch(encodedPath);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob)
      
      setImageData(url);

    }catch(e){
      console.log(`Error: ${e}`)
    }
  }

  const request_sent = () => {
    console.log(image)
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
