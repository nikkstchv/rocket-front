import { API } from "./api";


export const getLeads = async () => {
  return API.get('leads').then(response => response?.data);
}