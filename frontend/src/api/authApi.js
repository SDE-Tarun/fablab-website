// import axios from "axios";

// const API =
//   "http://localhost:3000/api/v1";

// export const loginAdmin =
//   async (payload) => {

//     const { data } =
//       await axios.post(
//         `${API}/admin/login`,
//         payload
//       );

//     return data;
//   };

// export const refreshToken =
//   async (refreshToken) => {

//     const { data } =
//       await axios.post(
//         `${API}/admin/refresh`,
//         {
//           refreshToken,
//         }
//       );

//     return data;
//   };

import axios from "axios";

const API =
  "http://localhost:3000/api/v1";

const authApi =
  axios.create({
    baseURL: API,
  });

export const loginAdmin =
  async (payload) => {

    const { data } =
      await authApi.post(
        "/admin/login",
        payload
      );

    return data;
  };

export const refreshToken =
  async (refreshToken) => {

    const { data } =
      await authApi.post(
        "/admin/refresh",
        {
          refreshToken,
        }
      );

    return data;
  };