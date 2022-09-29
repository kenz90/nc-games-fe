import { useEffect, useState } from "react";
import { getReviews } from "../../utils/axios";
import Review from "../Review/Review";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Categories from "../Categories/Categories";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();

  const { category_name } = useParams();
  console.log(category_name);
  useEffect(() => {
    getReviews(category_name).then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [category_name]);

  if (loading) {
    return <h1>"loading..."</h1>;
  }

  return (
    <div>
      <Categories />
      {reviews.map((review) => (
        <Review key={review.review_id} review={review} />
      ))}
    </div>
  );
}
export default Reviews;
