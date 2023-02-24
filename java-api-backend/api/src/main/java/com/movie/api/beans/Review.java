package com.movie.api.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;



@Document(collection = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Id
    private ObjectId id;
    private String body;
    // private LocalDateTime created;
    // private LocalDateTime updated;


    public Review(String body) {
        this.body = body;
    }
}
