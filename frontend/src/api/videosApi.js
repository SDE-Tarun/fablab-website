import api from "./adminApi";

export const getVideos = async () => {
  const { data } = await api.get(
    "/videos"
  );

  return data.data;
};

export const getFeaturedVideos =
  async () => {
    const { data } =
      await api.get(
        "/videos/featured"
      );

    return data.data;
  };

export const createVideo = async (
  payload
) => {
  const { data } = await api.post(
    "/videos",
    payload
  );

  return data;
};

export const updateVideo = async (
  id,
  payload
) => {
  const { data } = await api.put(
    `/videos/${id}`,
    payload
  );

  return data;
};

export const deleteVideo = async (
  id
) => {
  const { data } = await api.delete(
    `/videos/${id}`
  );

  return data;
};