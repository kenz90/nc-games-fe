import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualReview } from "../utils/axios";
import "./IndividualReview.css";

function IndividualReview() {
  const { review_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);

  useEffect(() => {
    getIndividualReview(review_id).then((data) => {
      setReview(data);
    });
  }, []);
  return (
    <div>
      <h2>{review.title}</h2>
      <p>{review.review_body}</p>
      <img src={review.review_img_url} alt="" />
      <p>votes: {review.votes}</p>
    </div>
  );
}
// review_id: Number,
//                 title: String,
//                 owner: String,
//                 designer: String,
//                 review_body: String,
//                 review_img_url: String,
//                 category: String,
//                 created_at: String,
//                 votes: Number,
//                 comment_count
export default IndividualReview;
