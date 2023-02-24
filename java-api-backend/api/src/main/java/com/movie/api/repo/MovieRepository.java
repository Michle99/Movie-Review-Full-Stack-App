package com.movie.api.repo;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.movie.api.beans.Movie;

public interface MovieRepository  extends MongoRepository<Movie, ObjectId> {
    
    Optional<Movie> findMovieByImdbId(String imdbId);
}
