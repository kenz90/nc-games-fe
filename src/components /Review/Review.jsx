import React from "react";
import { Link } from "react-router-dom";
import "./Review.css";

function Review({ review }) {
  return (
    <div className="reviewCard">
      <h3>{review.title}</h3>
      <img src={review.review_img_url} alt="" />
      <p>
        Likes:
        <br />
        {review.votes}
      </p>
      <Link to={`/reviews/${review.review_id}`}>
        <button>click for more </button>
      </Link>
    </div>
  );
}

export default Review;
