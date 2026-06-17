import apiClient from "./apiClient";

export const getLabs =
  async () => {

    const res =
      await apiClient.get(
        "/labs"
      );

    return res.data.data;
  };

export const createLab =
  async (data) => {

    const res =
      await apiClient.post(
        "/labs",
        data
      );

    return res.data;
  };

export const updateLab =
  async (
    id,
    data
  ) => {

    const res =
      await apiClient.put(
        `/labs/${id}`,
        data
      );

    return res.data;
  };

export const deleteLab =
  async (id) => {

    const res =
      await apiClient.delete(
        `/labs/${id}`
      );

    return res.data;
  };