package com.movie.api.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.api.beans.Review;
import com.movie.api.services.ReviewService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    ReviewService reviewService;

    
    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        
        return new ResponseEntity<Review>(
            reviewService.createReview(
                payload.get("reviewBody"),
                payload.get("imdbId")),
                HttpStatus.CREATED
        );
    }
    

}
