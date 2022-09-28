import React, { useEffect, useState } from "react";

import { getCategories } from "../../utils/axios";
import "./Categories.css";
import { Link } from "react-router-dom";
// {/api/categories
function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((category) => {
      setCategories(category);
    });
  }, []);

  return (
    <div className="catbox">
      <h2>Categories</h2>
      <div className="cats">
        {categories.map((category) => (
          //   <Categories key={category.slug} category={category} />
          <Link to={`/reviews?category=${category.slug}`} key={category.slug}>
            {" "}
            {category.slug}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
