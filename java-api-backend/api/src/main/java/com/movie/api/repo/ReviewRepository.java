package com.movie.api.repo;


import org.springframework.stereotype.Repository;
import com.movie.api.beans.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId>{
    
}
