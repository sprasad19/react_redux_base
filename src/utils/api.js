import CONSTANTS from "./base";

const currentEnvironment = {
  development: {
    url:"https://gz4uz0s4xb.execute-api.ap-south-1.amazonaws.com/development/",
    paymentGateway: "",
  },

  production: {
    url: "https://s945zcqqhf.execute-api.ap-south-1.amazonaws.com/production/",
    paymentGateway: "",
  },
};

export default process.env.REACT_APP_API_URL ===
CONSTANTS.ENVIRONMENT.DEVELOPMENT
  ? currentEnvironment.development
  : process.env.REACT_APP_API_URL === CONSTANTS.ENVIRONMENT.PRODUCTION
  ? currentEnvironment.production
  : currentEnvironment.development;
