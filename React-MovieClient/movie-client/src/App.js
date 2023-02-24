
import './App.css';
import api from "./clientAPI/axiosConfig";
import {useState, useEffect} from "react";
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log("movies data: ", response.data);
      setMovies(response.data);

    } catch(error) {
      console.log("error: ", error);
    }
   
  }

  useEffect(() => {
    getMovies()
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/home" element={<Home movies={movies}/>} />
      </Routes>
    </div>
  );
}

export default App;
