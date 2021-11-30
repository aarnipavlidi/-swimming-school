require("dotenv").config();

const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const EMAIL_USER_ID = process.env.REACT_APP_EMAIL_USER_ID;

module.exports = {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_USER_ID
};
