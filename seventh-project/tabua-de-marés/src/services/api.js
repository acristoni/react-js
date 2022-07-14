import axios from "axios";

const api = axios.create({
  baseURL: `https://api.stormglass.io/v2/tide/extremes/`, 
    headers: {
      'Authorization': '767aecb8-0255-11ed-b21f-0242ac130002-767aed1c-0255-11ed-b21f-0242ac130002'
    }
});

export default api;