import "./App.css";
import Categories from "./components /Categories/Categories";
import Header from "./components /Header/Header";
import Review from "./components /Review/Review";
import Reviews from "./components /Reviews/Reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualReview from "./IndividualReview/IndividualReview";
import Homepage from "./components /Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Categories />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<IndividualReview />} />
          <Route
            path="/reviews/categories/:category_name"
            element={<Reviews />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
