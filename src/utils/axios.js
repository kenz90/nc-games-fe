import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://nc-fe-proj.herokuapp.com/api",
});

export const getReviews = (category) => {
  return apiUrl.get("/reviews", { params: { category } }).then(({ data }) => {
    return data.reviews;
  });
};

export const getCategories = () => {
  return apiUrl.get(`/categories`).then(({ data }) => {
    return data.categories;
  });
};
