import React from "react";
import "./Hero.css";
import { Paper } from "@mui/material";
import HeroCard from "./HeroCard";
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-responsive-carousel';

const Hero = ( {movies} ) => {
    console.log("movies data Hero comp: ", movies);
    return(
       
        <div className="movie-carousel-container">
          <Carousel showThumbs={false}>
            {
                movies && movies.map((movie, i) => {
                    return(
                        <Paper key={i}>
                            <div className="movie-card-container">
                                <div className="movie-card">
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="movie poster" />
                                    </div>
                                    <div>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Paper>
                )})
            }
          </Carousel>
        </div>
    );
}

export default Hero;