import apiInstance from "api";

export const getFoldersdata = () =>
  apiInstance.post("/2/files/list_folder").then((res) => res.data);
