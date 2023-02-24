import React from 'react'
import { useEffect, useRef } from 'react'
import api from "../../clientAPI/axiosConfig"
import {useParams} from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'
import ReviewForm from '../reviewform/ReviewForm'

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;
  console.log("movie data from reviews comp: ", movie);
  console.log("reviews data from reviews comp: ", reviews);

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try{
        const response = await api.post("/api/v1/reviews", {reviewBody:rev.value, imdbId:movieId});
        const updatedReviews = [...reviews, {body:rev.value}];
        rev.value = "";
        console.log("reviews posted: ", reviews);
        setReviews(updatedReviews);

    } catch(err){
        console.log("error found: ", err);
    }
    
    
  }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className='mt-2'>
            <Col>
                <img src={movie?.poster} alt="movie poster" />
            </Col>
            <Col>
                {
                    <>
                      <Row>
                        <Col>
                            <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review..." />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                            <hr/>
                        </Col>
                      </Row>
                    </>
                }
                {
                    reviews && reviews.map((review) => {
                        return(
                            <>
                                <Row>
                                    <Col>{review.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr/>
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews

