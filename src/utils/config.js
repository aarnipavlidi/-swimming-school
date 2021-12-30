require("dotenv").config();

const DATABASE_URL = process.env.REACT_APP_DATABASE_URL;
const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const EMAIL_USER_ID = process.env.REACT_APP_EMAIL_USER_ID;

module.exports = {
  DATABASE_URL,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_USER_ID
};
