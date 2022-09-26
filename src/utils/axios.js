import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://nc-fe-proj.herokuapp.com/api",
});

export const getReviews = () => {
  return apiUrl.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};
