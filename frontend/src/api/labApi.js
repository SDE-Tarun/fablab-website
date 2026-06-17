import axios from "axios";

const API =
  "http://localhost:3000/api/v1";

export const getLabs = () =>
  axios.get(`${API}/labs`);

export const getLab = (
  slug
) =>
  axios.get(
    `${API}/labs/${slug}`
  );