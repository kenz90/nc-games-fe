import { useEffect, useState } from "react";
import { getReviews } from "../../utils/axios";
import Review from "../Review/Review";
import { useLocation } from "react-router-dom";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();
  const categoriesNameSearch = search.slice(10, search.length);

  useEffect(() => {
    setLoading(true);
    getReviews(categoriesNameSearch).then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [categoriesNameSearch]);

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
