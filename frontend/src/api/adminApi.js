import axios from "axios";

const API =
  "http://localhost:3000/api/v1";

const api =
  axios.create({
    baseURL: API,
  });

api.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem(
        "accessToken"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

export const getDashboardStats =
  async () => {

    const { data } =
      await api.get(
        "/dashboard/stats"
      );

    return data.data;
  };

export const getMessages =
  async () => {

    const { data } =
      await api.get(
        "/contact"
      );

    return data.data;
  };

export const updateStatus =
  async (id, status) => {

    const { data } =
      await api.patch(
        `/contact/${id}/status`,
        { status }
      );

    return data;
  };

export const deleteMessage =
  async (id) => {

    const { data } =
      await api.delete(
        `/contact/${id}`
      );

    return data;
  };

export default api;