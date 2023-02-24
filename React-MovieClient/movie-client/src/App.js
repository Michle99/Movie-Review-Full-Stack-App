
import './App.css';
import api from "./clientAPI/axiosConfig";
import {useState, useEffect} from "react";

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
      <header className="App-header">
        movies clientAPI
      </header>
    </div>
  );
}

export default App;
