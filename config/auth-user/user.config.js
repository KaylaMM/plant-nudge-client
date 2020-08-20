require("dotenv").config();
const username = process.env.username;
const pass = process.env.pass;
module.exports = {
  USER: username,
  PASS: pass,
};
