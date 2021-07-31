import axios from "axios";
import jwt_decode from "jwt-decode";
import { store } from "../redux/store";
import { setLogout } from "../redux/redux/global/action";

const mode = (type) => {
  switch (type) {
    case "development":
      return "https://gz4uz0s4xb.execute-api.ap-south-1.amazonaws.com/development/";
    case "production":
      return "https://s945zcqqhf.execute-api.ap-south-1.amazonaws.com/production/";
    default:
      //return development api
      return "https://gz4uz0s4xb.execute-api.ap-south-1.amazonaws.com/development/";
  }
};
console.log("isOnline =>", window.navigator.onLine);
const defaultOptions = {
  // baseURL: base.url,
  baseURL: mode(process.env.REACT_APP_CUSTOM_ENV),
  method: "get",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
};

// Create instance
let instance = axios.create(defaultOptions);
instance.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = token;
    } else {
      delete config.headers["Authorization"];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    console.log(error);
    if (error.message === "Network Error" && !error.response) {
    }
    if (
      401 === error.response.status &&
      error.response.data.result.TYPE === "INVALID_TOKEN"
    ) {
      // store.dispatch(setLogout());
    }

    if (error) {
      return Promise.reject(error);
    }
  }
);

export const getToken = () => {
  const { token } = store.getState().global;
  if (token) {
    try {
      const JWT = jwt_decode(token);
      const currentDate = Math.round(new Date().getTime() / 1000);
      if (JWT && JWT.exp > currentDate) {
        return token;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
  return null;
};

export const checkToken = (token) => {
  try {
    const JWT = jwt_decode(token);
    const currentDate = Math.round(new Date().getTime() / 1000);
    if (JWT && JWT.exp > currentDate) {
      return JWT;
    }
    return null;
  } catch (error) {
    // console.log(error["__proto__"].name);
    return null;
  }
};

export default instance;
