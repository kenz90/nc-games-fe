import { useEffect, useState } from "react";
import { getReviews } from "../../utils/axios";
import Review from "../Review/Review";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getReviews().then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading
        ? "loading..."
        : reviews.map((review) => (
            <Review key={review.review_id} review={review} />
          ))}
    </div>
  );
}
export default Reviews;
