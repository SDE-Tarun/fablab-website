import api from "./adminApi";

export const getTeam = async () => {
  const { data } = await api.get("/team");
  return data.data;
};

export const createMember = async (payload) => {
  const { data } = await api.post(
    "/team",
    payload
  );

  return data;
};

export const updateMember = async (
  id,
  payload
) => {
  const { data } = await api.put(
    `/team/${id}`,
    payload
  );

  return data;
};

export const deleteMember = async (
  id
) => {
  const { data } = await api.delete(
    `/team/${id}`
  );

  return data;
};