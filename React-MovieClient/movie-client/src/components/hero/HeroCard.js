import Carousel from 'react-bootstrap/Carousel';

const HeroCard = (props) => {
    return (
        <div className="movie-card-container">
           <div className="movie-card">
              <div className="movie-detail">
                 <div className="movie-poster">
                    <img src={props.movie.poster} alt="movie poster" />
                  </div><br/><br/><br/>
                  <div className="movie-title">
                    <h4>{props.movie.title}</h4>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default HeroCard;