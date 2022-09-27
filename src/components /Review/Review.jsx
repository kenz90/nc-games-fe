import React from "react";
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
    </div>
  );
}

export default Review;
