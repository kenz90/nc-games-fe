import "./App.css";
import Categories from "./components /Categories/Categories";
import Header from "./components /Header/Header";
import Review from "./components /Review/Review";
import Reviews from "./components /Reviews/Reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Categories />
        <Routes>
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
