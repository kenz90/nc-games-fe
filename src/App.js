import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getReviews } from "./utils/axios";
import Header from "./components /Header/Header";
import Review from "./components /Reviews/Review";

function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
}

export default App;
