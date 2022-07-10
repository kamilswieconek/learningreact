import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar"
import Dogs from "./Components/Dogs/Dogs"
import Footer from "./Components/Footer/Footer"
import HomePage from "./Components/HomePage/HomePage";
import Cats from "./Components/Cats/Cats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";


function App() {

  const [dogsImage, setDogsImage] = useState("");
  const [catsImage, setCatsImage] = useState("");
  const [dogsFact, setDogsFact] = useState("");
  const [catsFact, setCatsFact] = useState("");
  // const cors = require('cors');
  // const express = require('express')
  // const app = express()
  // app.use(cors())


    //Na problem z CORSami (preflight)
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";


  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breed/spaniel/blenheim/images/random")
      .then((response) => {
        setDogsImage(response.data.message);

      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get("https://shibe.online/api/cats")
      .then((response) => {
        setCatsImage(response.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {

    const min = 1;
    const max = 4;
    const x = Math.floor(Math.random() * (max - min)) + min;

    axios
      .get("https://cat-fact.herokuapp.com/facts")
      .then((response) => {
        setCatsFact(response.data[x].text);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {

    
    axios
      .get("https://dog-api.kinduff.com/api/facts", {
        headers: {
          "Access-Control-Allow-Origin": "GET"
        }
      })
      .then((response) => {
        setDogsFact(response.data.facts);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage dogsImage={dogsImage} catsImage={catsImage}/>} />
        <Route path="/dogs" element={<Dogs dogsImage={dogsImage} dogsFact={dogsFact}/>} />
        <Route path="/cats" element={<Cats catsImage={catsImage} catsFact={catsFact}/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;