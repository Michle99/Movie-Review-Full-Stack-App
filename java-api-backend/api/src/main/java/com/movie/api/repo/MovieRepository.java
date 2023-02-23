package com.movie.api.repo;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.movie.api.beans.Movie;

// @Repository
public interface MovieRepository  extends MongoRepository<Movie, ObjectId> {
    
    Optional<Movie> findMovieByImdbId(String imdbId);
}
