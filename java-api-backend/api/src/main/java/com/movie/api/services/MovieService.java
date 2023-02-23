package com.movie.api.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.api.beans.Movie;
import com.movie.api.repo.MovieRepository;

@Service
public class MovieService {
    
    @Autowired
    private MovieRepository movieRepository;
    

    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }

    public Optional<Movie> singleMovie(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);
    }


}
