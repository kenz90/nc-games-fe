import React, { useEffect, useState } from "react";

import { getCategories } from "../../utils/axios";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [searchCategory, setSearchCategory] = useState([]);
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
          <Link to={`/reviews/categories/${category.slug}`} key={category.slug}>
            {category.slug}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
